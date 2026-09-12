# Corpus workflow

1. Copy `provision.template.json` into `provisions/`.
2. Paste the exact provision text from its official source; do not summarize in `exact_text`.
3. Record the source URL, publication/version, effective date and a named reviewer.
4. A legal reviewer changes `review.status` from `pending` to `approved` only after checking all fields.
5. Run the test suite and corpus-status endpoint before enabling the record.

Only `approved` records with all required authority fields can be retrieved for an answer. Pending records are retained for workflow visibility but are never answer-eligible.
