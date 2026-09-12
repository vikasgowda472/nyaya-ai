import json
import re
from hashlib import sha256
from pathlib import Path

from .models import Provision


ROOT = Path(__file__).resolve().parent.parent
PROVISION_DIR = ROOT / "legal-data" / "provisions"


def load_provisions() -> list[Provision]:
    records: list[Provision] = []
    for path in sorted(PROVISION_DIR.glob("*.json")):
        records.append(Provision.model_validate_json(path.read_text(encoding="utf-8")))
    return records


def approved_provisions() -> list[Provision]:
    return [record for record in load_provisions() if record.answer_eligible]


def corpus_version(records: list[Provision] | None = None) -> str:
    records = records if records is not None else approved_provisions()
    payload = "|".join(sorted(f"{item.id}:{item.source_version}:{item.review.reviewed_at}" for item in records))
    return f"sha256:{sha256(payload.encode()).hexdigest()[:12]}"


def search(query: str, language: str = "en", limit: int = 3) -> list[Provision]:
    tokens = {token for token in re.findall(r"[a-z0-9]+", query.lower()) if len(token) > 2}
    scored: list[tuple[int, Provision]] = []
    for record in approved_provisions():
        haystack = " ".join([record.law, record.provision, record.exact_text, *record.topic_tags, *record.plain_language.values()]).lower()
        score = sum(1 for token in tokens if token in haystack)
        if score:
            scored.append((score, record))
    return [record for _, record in sorted(scored, key=lambda row: (-row[0], row[1].id))[:limit]]
