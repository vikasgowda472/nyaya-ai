# Corpus workflow

1. Copy `provision.template.json` into `provisions/`.
2. Paste the exact provision text from its official source; do not summarize in `exact_text`.
3. Record the source URL, publication/version, effective date and a named reviewer.
4. Append a `review_history` event for every submission, approval, revocation or supersession. Events identify the actor, timestamp and source version; do not rewrite old events.
5. A legal reviewer changes `review.status` from `pending` to `approved` only after checking all fields and appends a matching `approved` event for that exact source version.
6. Run the test suite, the corpus validation endpoint, and the locked evaluation before enabling the record.

Only `approved` records with all required authority fields and a matching approval event can be retrieved for an answer. Pending records are retained for workflow visibility but are never answer-eligible. A malformed record is reported by corpus validation and is excluded from retrieval; it can never silently become answer authority.
