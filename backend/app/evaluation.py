"""Run the immutable, source-free safety checks for the legal-answer boundary."""
import json
from pathlib import Path

from .models import LegalAnswerRequest, Refusal
from .service import answer


EVALUATION_FILE = Path(__file__).resolve().parent.parent / "datasets" / "evaluation" / "locked_cases.jsonl"


def run_locked_evaluation(path: Path = EVALUATION_FILE) -> dict:
    failures: list[dict] = []
    total = 0
    for line in path.read_text(encoding="utf-8").splitlines():
        case = json.loads(line)
        total += 1
        result = answer(LegalAnswerRequest(query=case["query"]))
        if case["expected"] == "refusal" and not isinstance(result, Refusal):
            failures.append({"id": case["id"], "reason": "expected refusal"})
        elif case["expected"] == "refusal-or-cited-answer" and not isinstance(result, Refusal) and not result.citations:
            failures.append({"id": case["id"], "reason": "supported answer lacked citations"})
    return {"total": total, "passed": total - len(failures), "failed": failures, "ok": not failures}
