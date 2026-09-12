"""Minimal Supabase JWT verification for protected NYAYA API operations."""
import base64
import hashlib
import hmac
import json
import os
import time
from typing import Any

from fastapi import Header, HTTPException, status


def _decode_segment(segment: str) -> dict[str, Any]:
    padded = segment + "=" * (-len(segment) % 4)
    return json.loads(base64.urlsafe_b64decode(padded.encode("ascii")))


def verified_identity(authorization: str | None = Header(default=None)) -> dict[str, Any]:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Missing bearer token")
    secret = os.getenv("SUPABASE_JWT_SECRET")
    if not secret:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Authentication is not configured")
    try:
        header_segment, payload_segment, signature_segment = authorization[7:].split(".")
        header = _decode_segment(header_segment)
        payload = _decode_segment(payload_segment)
        if header.get("alg") != "HS256":
            raise ValueError("Unsupported algorithm")
        signed = f"{header_segment}.{payload_segment}".encode("ascii")
        expected = base64.urlsafe_b64encode(hmac.new(secret.encode("utf-8"), signed, hashlib.sha256).digest()).rstrip(b"=").decode("ascii")
        if not hmac.compare_digest(expected, signature_segment):
            raise ValueError("Invalid signature")
        if not payload.get("sub") or payload.get("exp", 0) <= time.time():
            raise ValueError("Expired or incomplete token")
        if payload.get("aud") != "authenticated":
            raise ValueError("Invalid audience")
        return {"id": payload["sub"], "email": payload.get("email"), "authenticated": True}
    except (ValueError, KeyError, UnicodeError, json.JSONDecodeError) as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid bearer token") from exc
