from fastapi.testclient import TestClient

from app.evaluation import run_locked_evaluation
from main import app

client = TestClient(app)


def test_health():
    assert client.get("/health").json()["status"] == "ok"


def test_empty_corpus_is_not_answer_ready():
    body = client.get("/api/v1/corpus/status").json()
    assert body["verifiedProvisionCount"] == 0
    assert body["readyForGroundedAnswers"] is False


def test_unverified_question_refuses():
    response = client.post("/api/v1/legal-answer", json={"query": "Can police search my phone?"})
    assert response.status_code == 422
    assert response.json()["detail"]["code"] == "insufficient-verified-authority"


def test_corpus_validation_is_clean_for_empty_repository():
    body = client.get("/api/v1/corpus/validation").json()
    assert body == {"recordCount": 0, "answerEligibleCount": 0, "malformedFiles": [], "approvalAuditGaps": [], "valid": True}


def test_locked_evaluation_preserves_refusal_boundary():
    assert run_locked_evaluation() == {"total": 3, "passed": 3, "failed": [], "ok": True}

import base64
import hashlib
import hmac
import json
import time


def _jwt(secret: str, payload: dict) -> str:
    encode = lambda value: base64.urlsafe_b64encode(json.dumps(value, separators=(",", ":")).encode()).rstrip(b"=").decode()
    header = encode({"alg": "HS256", "typ": "JWT"})
    body = encode(payload)
    signature = base64.urlsafe_b64encode(hmac.new(secret.encode(), f"{header}.{body}".encode(), hashlib.sha256).digest()).rstrip(b"=").decode()
    return f"{header}.{body}.{signature}"


def test_auth_me_rejects_missing_token():
    assert client.get("/api/v1/auth/me").status_code == 401


def test_auth_me_accepts_valid_supabase_hs256_token(monkeypatch):
    secret = "test-supabase-secret"
    monkeypatch.setenv("SUPABASE_JWT_SECRET", secret)
    token = _jwt(secret, {"sub": "user-123", "email": "user@example.com", "aud": "authenticated", "exp": time.time() + 60})
    response = client.get("/api/v1/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    assert response.json() == {"id": "user-123", "email": "user@example.com", "authenticated": True}


def test_auth_me_rejects_tampered_token(monkeypatch):
    monkeypatch.setenv("SUPABASE_JWT_SECRET", "test-supabase-secret")
    response = client.get("/api/v1/auth/me", headers={"Authorization": "Bearer a.b.c"})
    assert response.status_code == 401
