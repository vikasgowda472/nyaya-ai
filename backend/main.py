from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from app.corpus import approved_provisions, corpus_version, load_provisions, search
from app.models import LegalAnswer, LegalAnswerRequest, Refusal
from app.service import answer

app = FastAPI(title="NYAYA Verified Legal API", version="0.1.0")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000", "http://localhost:5173"], allow_methods=["GET", "POST"], allow_headers=["Content-Type"])


@app.get("/health")
def health():
    return {"status": "ok", "service": "nyaya-verified-legal-api"}


@app.get("/api/v1/corpus/status")
def status():
    all_records = load_provisions()
    approved = approved_provisions()
    return {"totalProvisionCount": len(all_records), "verifiedProvisionCount": len(approved), "readyForGroundedAnswers": bool(approved), "corpusVersion": corpus_version(approved)}


@app.get("/api/v1/provisions/search")
def provision_search(q: str = Query(min_length=3), language: str = "en"):
    return {"results": [record.model_dump(mode="json", exclude={"exact_text", "review"}) for record in search(q, language)], "corpusVersion": corpus_version()}


@app.post("/api/v1/legal-answer", response_model=LegalAnswer)
def legal_answer(request: LegalAnswerRequest):
    result = answer(request)
    if isinstance(result, Refusal):
        raise HTTPException(status_code=422, detail=result.model_dump(mode="json"))
    return result
