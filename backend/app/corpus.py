import json
import re
from dataclasses import dataclass
from hashlib import sha256
from pathlib import Path

from pydantic import ValidationError

from .models import Provision
from .supabase_corpus import fetch_approved_provisions, publishing_configured


ROOT = Path(__file__).resolve().parent.parent
PROVISION_DIR = ROOT / 'legal-data' / 'provisions'
STOPWORDS = {'the', 'and', 'for', 'what', 'with', 'from', 'that', 'this', 'are', 'was', 'were', 'can', 'could', 'should', 'would', 'give', 'best', 'legal', 'law', 'act', 'section', 'answer', 'about', 'under', 'without'}


@dataclass(frozen=True)
class CorpusIssue:
    file: str
    message: str


@dataclass(frozen=True)
class CorpusLoad:
    records: list[Provision]
    issues: list[CorpusIssue]


def load_corpus() -> CorpusLoad:
    """Parse local draft files without letting a malformed draft become authority."""
    records: list[Provision] = []
    issues: list[CorpusIssue] = []
    for path in sorted(PROVISION_DIR.glob("*.json")):
        try:
            records.append(Provision.model_validate_json(path.read_text(encoding="utf-8")))
        except (OSError, json.JSONDecodeError, ValidationError) as exc:
            issues.append(CorpusIssue(file=path.name, message=str(exc).splitlines()[0]))
    return CorpusLoad(records=records, issues=issues)


def load_provisions() -> list[Provision]:
    return load_corpus().records


def approved_provisions() -> list[Provision]:
    remote = fetch_approved_provisions()
    if remote is not None:
        return remote
    return [record for record in load_provisions() if record.answer_eligible]


def corpus_source() -> str:
    return "supabase-approved" if publishing_configured() else "local-approved"


def validation_report() -> dict:
    loaded = load_corpus()
    approved = [record for record in loaded.records if record.answer_eligible]
    approval_gaps = [
        record.id for record in loaded.records
        if record.review.status == "approved" and not record.answer_eligible
    ]
    return {
        "recordCount": len(loaded.records),
        "answerEligibleCount": len(approved),
        "malformedFiles": [{"file": issue.file, "message": issue.message} for issue in loaded.issues],
        "approvalAuditGaps": approval_gaps,
        "valid": not loaded.issues and not approval_gaps,
    }


def corpus_version(records: list[Provision] | None = None) -> str:
    records = records if records is not None else approved_provisions()
    payload = "|".join(sorted(f"{item.id}:{item.source_version}:{item.review.reviewed_at}" for item in records))
    return f"sha256:{sha256(payload.encode()).hexdigest()[:12]}"


def search(query: str, language: str = "en", limit: int = 3) -> list[Provision]:
    tokens = {token for token in re.findall(r"[a-z0-9]+", query.lower()) if len(token) > 2 and token not in STOPWORDS}
    scored: list[tuple[int, Provision]] = []
    for record in approved_provisions():
        explanation = record.plain_language.get(language, record.plain_language.get("en", ""))
        haystack = " ".join([record.law, record.provision, record.exact_text, *record.topic_tags, explanation]).lower()
        score = sum(1 for token in tokens if token in haystack)
        if score:
            scored.append((score, record))
    return [record for _, record in sorted(scored, key=lambda row: (-row[0], row[1].id))[:limit]]
