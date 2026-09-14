from app.supabase_corpus import parse_approved_records


def _approved_row():
    return {
        "id": "db-provision-1",
        "provision_key": "ndps-1985-section-1",
        "law": "The Narcotic Drugs and Psychotropic Substances Act, 1985",
        "provision": "Section 1",
        "exact_text": "Official text.",
        "effective_date": "1985-11-14",
        "topic_tags": ["commencement"],
        "plain_language": {"en": "Names the Act."},
        "review_status": "approved",
        "reviewer_id": "reviewer-1",
        "reviewer_name": "Named Reviewer",
        "reviewed_at": "2026-09-14T10:00:00Z",
        "review_notes": "Checked against the official source.",
        "content_sha256": "a" * 64,
        "legal_sources": {"official_url": "https://www.indiacode.nic.in/", "source_version": "India Code 2026-09-14"},
    }


def test_remote_corpus_accepts_only_matching_approved_audit_event():
    records = parse_approved_records([_approved_row()], [{"provision_id": "db-provision-1", "action": "approved", "source_version": "India Code 2026-09-14"}])
    assert len(records) == 1
    assert records[0].answer_eligible is True
    assert records[0].review.reviewer_name == "Named Reviewer"


def test_remote_corpus_rejects_record_without_matching_audit_event():
    assert parse_approved_records([_approved_row()], []) == []
