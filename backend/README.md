# NYAYA trusted legal-answer service

Run locally:

```powershell
py -m pip install -r requirements.txt
py -m uvicorn main:app --reload --port 8000
```

The checked-in corpus deliberately contains no approved provisions. Add official-source records under `legal-data/provisions/`, have a named legal reviewer approve them, then change `review.status` to `approved`. The API refuses legal conclusions until this gate is satisfied.

`NYAYA_MODEL_PROVIDER=disabled` is the default. A provider adapter is present so a hosted provider can be added server-side after retrieval and evaluations are ready; it must never receive content that was not retrieved from approved records.
