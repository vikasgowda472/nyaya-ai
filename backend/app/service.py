from .corpus import corpus_version, search
from .models import Citation, LegalAnswer, LegalAnswerRequest, Refusal
from .provider import ProviderAdapter


def answer(request: LegalAnswerRequest) -> LegalAnswer | Refusal:
    records = search(request.query, request.language)
    version = corpus_version()
    if not records:
        return Refusal(
            message="NYAYA cannot provide a legal conclusion because it has no sufficiently verified authority for this question.",
            limitations=["Only named-reviewer-approved official provisions are answer-eligible.", "This is legal information, not legal representation."],
            corpus_version=version,
        )

    # Deterministic answer remains the safe default. Provider output is deliberately not trusted
    # until a future adapter validates it against these exact citations.
    primary = records[0]
    explanation = primary.plain_language.get(request.language, primary.plain_language.get("en", primary.exact_text))
    citations = [Citation(
        provision_id=item.id, law=item.law, provision=item.provision,
        official_source_url=item.official_source_url, source_version=item.source_version,
        effective_date=item.effective_date,
    ) for item in records]
    return LegalAnswer(
        answer_summary=explanation,
        supported_explanation=primary.exact_text,
        action_options=["Read the official source linked in the citation.", "Consult a qualified advocate for advice on your facts."],
        citations=citations,
        limitations=["The response is limited to the cited verified provisions.", "It does not determine how a court or authority will decide a case."],
        corpus_version=version,
    )
