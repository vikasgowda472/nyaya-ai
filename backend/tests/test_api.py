from fastapi.testclient import TestClient

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
