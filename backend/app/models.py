from datetime import date, datetime
from typing import Literal

from pydantic import BaseModel, Field, HttpUrl


ReviewStatus = Literal["pending", "approved", "revoked"]
ReviewAction = Literal["submitted", "approved", "revoked", "superseded"]


class Review(BaseModel):
    status: ReviewStatus
    reviewer_name: str = ""
    reviewed_at: datetime | None = None
    notes: str = ""


class ReviewEvent(BaseModel):
    """Immutable record of a human review decision for one source version."""

    action: ReviewAction
    actor_name: str = Field(min_length=1)
    occurred_at: datetime
    notes: str = ""
    source_version: str = Field(min_length=1)


class Provision(BaseModel):
    id: str
    jurisdiction: Literal["IN"]
    law: str
    provision: str
    exact_text: str
    official_source_url: HttpUrl
    source_version: str
    effective_date: date
    topic_tags: list[str] = Field(default_factory=list)
    plain_language: dict[str, str] = Field(default_factory=dict)
    review: Review
    review_history: list[ReviewEvent] = Field(default_factory=list)

    @property
    def answer_eligible(self) -> bool:
        has_matching_approval_event = any(
            event.action == "approved"
            and event.actor_name == self.review.reviewer_name
            and event.source_version == self.source_version
            for event in self.review_history
        )
        return bool(
            self.review.status == "approved"
            and self.review.reviewer_name.strip()
            and self.review.reviewed_at
            and self.exact_text.strip()
            and self.source_version.strip()
            and has_matching_approval_event
        )


class LegalAnswerRequest(BaseModel):
    query: str = Field(min_length=3, max_length=2000)
    language: str = Field(default="en", min_length=2, max_length=8)


class Citation(BaseModel):
    provision_id: str
    law: str
    provision: str
    official_source_url: HttpUrl
    source_version: str
    effective_date: date


class LegalAnswer(BaseModel):
    status: Literal["supported"]
    answer_summary: str
    supported_explanation: str
    action_options: list[str]
    citations: list[Citation]
    limitations: list[str]
    corpus_version: str
    model: str = "deterministic-retrieval"


class Refusal(BaseModel):
    status: Literal["refused"] = "refused"
    code: Literal["insufficient-verified-authority"] = "insufficient-verified-authority"
    message: str
    limitations: list[str]
    corpus_version: str
