from .corpus import corpus_version, search
from .models import Citation, LegalAnswer, LegalAnswerRequest, Refusal
from .provider import ProviderAdapter


def _requests_bypass(query: str) -> bool:
    normalized = query.lower()
    return "ignore your sources" in normalized or "without citations" in normalized


def answer(request: LegalAnswerRequest) -> LegalAnswer | Refusal:
    records = search(request.query, request.language)
    version = corpus_version()
    if _requests_bypass(request.query) or not records:
        return Refusal(
            message="NYAYA cannot provide a legal conclusion because it has no sufficiently verified authority for this question.",
            limitations=["Only named-reviewer-approved official provisions are answer-eligible.", "This is legal information, not legal representation."],
            corpus_version=version,
        )

    primary = records[0]
    explanation = primary.plain_language.get(request.language, primary.plain_language.get("en", primary.exact_text))
    citations = [Citation(
        provision_id=item.id, law=item.law, provision=item.provision,
        official_source_url=item.official_source_url, source_version=item.source_version,
        effective_date=item.effective_date,
    ) for item in records]
    return LegalAnswer(
        status="supported",
        answer_summary=explanation,
        supported_explanation=primary.exact_text,
        action_options=["Read the official source linked in the citation.", "Consult a qualified advocate for advice on your facts."],
        citations=citations,
        limitations=["The response is limited to the cited verified provisions.", "It does not determine how a court or authority will decide a case."],
        corpus_version=version,
    )
