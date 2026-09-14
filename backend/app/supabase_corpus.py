"""Fetch only approved legal authority from Supabase for FastAPI retrieval."""
from __future__ import annotations

import os
from typing import Any

import httpx
from pydantic import ValidationError

from .models import Provision, Review, ReviewEvent


PROVISION_SELECT = (
    "id,provision_key,law,provision,exact_text,effective_date,topic_tags,plain_language,"
    "review_status,reviewer_id,reviewer_name,reviewed_at,review_notes,content_sha256,"
    "legal_sources(official_url,source_version)"
)


def _configuration() -> tuple[str, str] | None:
    url = os.getenv("SUPABASE_URL", "").rstrip("/")
    key = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")
    return (url, key) if url and key else None


def _headers(key: str) -> dict[str, str]:
    return {"apikey": key, "Authorization": f"Bearer {key}"}


def parse_approved_records(rows: list[dict[str, Any]], events: list[dict[str, Any]]) -> list[Provision]:
    approved_events = {
        (event["provision_id"], event["source_version"])
        for event in events
        if event.get("action") == "approved"
    }
    records: list[Provision] = []
    for row in rows:
        source = row.get("legal_sources") or {}
        source = source[0] if isinstance(source, list) and source else source
        source_version = source.get("source_version", "")
        if row.get("review_status") != "approved" or (row.get("id"), source_version) not in approved_events:
            continue
        try:
            records.append(Provision(
                id=row["provision_key"],
                jurisdiction="IN",
                law=row["law"],
                provision=row["provision"],
                exact_text=row["exact_text"],
                official_source_url=source["official_url"],
                source_version=source_version,
                effective_date=row["effective_date"],
                topic_tags=row.get("topic_tags") or [],
                plain_language=row.get("plain_language") or {},
                review=Review(
                    status="approved",
                    reviewer_name=row.get("reviewer_name", ""),
                    reviewed_at=row.get("reviewed_at"),
                    notes=row.get("review_notes", ""),
                ),
                review_history=[ReviewEvent(
                    action="approved",
                    actor_name=row.get("reviewer_name", ""),
                    occurred_at=row.get("reviewed_at"),
                    notes=row.get("review_notes", ""),
                    source_version=source_version,
                )],
            ))
        except (KeyError, TypeError, ValidationError):
            continue
    return [record for record in records if record.answer_eligible]


def fetch_approved_provisions() -> list[Provision] | None:
    """Returns None only when Supabase publishing is not configured.

    When configured but unavailable or malformed, returns an empty corpus. This
    makes the legal-answer service refuse rather than use an older local fallback.
    """
    configuration = _configuration()
    if configuration is None:
        return None
    url, key = configuration
    try:
        response = httpx.get(
            f"{url}/rest/v1/provisions",
            headers=_headers(key),
            params={"select": PROVISION_SELECT, "review_status": "eq.approved"},
            timeout=8.0,
        )
        response.raise_for_status()
        rows = response.json()
        ids = [row["id"] for row in rows if row.get("id")]
        if not ids:
            return []
        event_response = httpx.get(
            f"{url}/rest/v1/provision_review_events",
            headers=_headers(key),
            params={"select": "provision_id,action,source_version", "provision_id": f"in.({','.join(ids)})", "action": "eq.approved"},
            timeout=8.0,
        )
        event_response.raise_for_status()
        return parse_approved_records(rows, event_response.json())
    except (httpx.HTTPError, TypeError, ValueError):
        return []


def publishing_configured() -> bool:
    return _configuration() is not None
