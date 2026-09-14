# NYAYA trusted legal-answer service

Run locally:

```powershell
py -m pip install -r requirements.txt
py -m uvicorn main:app --reload --port 8000
```

The checked-in corpus deliberately contains no approved provisions. Add official-source records under `legal-data/provisions/`, have a named legal reviewer approve them, append the matching immutable approval event, then change `review.status` to `approved`. The API refuses legal conclusions until this gate is satisfied.

## Supabase publishing

Phase 6 reads only approved provisions from Supabase when both server-only variables are configured:

```ini
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
```

Set these only in the FastAPI deployment environment. Never expose the service-role key in `.env.local`, a `VITE_` variable, or the browser. The reader requests only `provisions`, `legal_sources`, and `provision_review_events`; it has no query path to `private_incidents`.

Apply `202609120004_approved_corpus_contract.sql` after the earlier Supabase migrations. The reviewer account needs a `full_name` in its Supabase user metadata before approving a provision. If Supabase is unconfigured, unavailable, or has no complete approved authority, `/api/v1/legal-answer` refuses the request.

Phase checks:

```powershell
py -m pytest tests -q
py -c "from app.evaluation import run_locked_evaluation; print(run_locked_evaluation())"
```

`GET /api/v1/corpus/validation` reports local draft problems. `GET /api/v1/corpus/status` reports which corpus source FastAPI is currently using.
