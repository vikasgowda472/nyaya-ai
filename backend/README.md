# NYAYA trusted legal-answer service

Run locally:

```powershell
py -m pip install -r requirements.txt
py -m uvicorn main:app --reload --port 8000
```

The checked-in corpus deliberately contains no approved provisions. Add official-source records under `legal-data/provisions/`, have a named legal reviewer approve them, append the matching immutable approval event, then change `review.status` to `approved`. The API refuses legal conclusions until this gate is satisfied.

Phase 2 workflow checks:

```powershell
py -m pytest tests -q
py -c "from app.evaluation import run_locked_evaluation; print(run_locked_evaluation())"
```

`GET /api/v1/corpus/validation` reports malformed provision files and approved records that lack a matching audit event. It never returns provision text. `GET /api/v1/corpus/status` remains the public readiness signal.

`NYAYA_MODEL_PROVIDER=disabled` is the default. A provider adapter is present so a hosted provider can be added server-side after retrieval and evaluations are ready; it must never receive content that was not retrieved from approved records.

## Authentication

The web app uses Supabase Auth for email/password accounts. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the frontend environment. Supabase manages the persisted browser session; NYAYA does not store a substitute login object or an OTP in the browser.

`GET /api/v1/auth/me` verifies a Supabase HS256 access token. Set `SUPABASE_JWT_SECRET` only in the backend environment (never a `VITE_` variable). If the Supabase project uses asymmetric signing keys, add JWKS verification before enabling this endpoint in production. Legal-answer lookup remains public; future corpus review endpoints must require a verified identity and check reviewer roles against the server-side profile store.
