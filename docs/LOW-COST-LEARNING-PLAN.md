# Low-cost learning and deployment plan

Updated October 6, 2026. Confirmed: SQL is strongest; Python and web development are basic; target is AI Engineer / Forward Deployed Engineer; budget is very limited. Weekly availability and a strict dollar ceiling remain unconfirmed.

## Learning sequence

1. Foundations (approximately 40–70 hours): Python functions, modules, typing, exceptions, JSON, files, virtual environments, HTTP, Git, pytest and SQL access. Build a small data validation API before using an LLM. Learn HTML/CSS, React state and API requests through its review screen.
2. First flagship (approximately 80–120 hours at beginner pace): Data Incident Commander, local first. Work through one request at a time and explain each decision. Revisit SQL execution plans, contracts and data modeling while learning Python.
3. Next two flagships (approximately 90–140 hours each at beginner pace): document operations, then governed analytics. Reuse the API, UI and evaluation skeleton rather than introducing a new framework each time.
4. Remaining seven builds: original specification estimates assume existing engineering fluency; allow 1.5–2.5 times those estimates while learning. Mastery comes from diagnosis and revision, not checking ten repositories off a list.

Use milestones rather than a fixed calendar until weekly availability is known. Original project effort estimates are experienced-builder scope estimates, not a promise to a beginner.

## Start at $0 locally

Use Python, FastAPI, SQLite/DuckDB, local files, pytest and a small React UI. Use a local PostgreSQL instance only when tenant isolation or database deployment becomes the lesson. Containers are useful later; they need not block lesson one. Use frozen model responses in clearly labeled fixture mode for UI development and CI. Fixture mode does not demonstrate live inference.

Try a small local model if your existing hardware supports it; check the model license, memory requirements and output quality first. Do not buy a GPU for this curriculum. Add a provider adapter so local, fixture and hosted inference use the same application interface.

GitHub Pages hosts the public portfolio and static case studies. It cannot run Python APIs, workers or a database. A live AI application needs a separate backend. Keep completed case studies permanently available even if their live backends are temporarily offline.

## Free API option

Gemini Developer API offers a free tier on eligible models, subject to model/region/account limits. Select an actually free-supported model from current pricing and inspect your active AI Studio quota; do not hardcode an assumed daily allowance. Handle quota errors and use fixtures when unavailable. [Pricing](https://ai.google.dev/gemini-api/docs/pricing), [rate limits](https://ai.google.dev/gemini-api/docs/rate-limits).

For US unpaid services, Google's terms describe using submitted content and responses for product improvement. Use synthetic/public-safe data and avoid employer documents or credentials. Billing status changes applicable data terms; verify your account. [Terms](https://ai.google.dev/gemini-api/terms).

## Cloud rotation: one deployment lab at a time

| Project | Cloud lab | Services to learn | Local fallback |
|---|---|---|---|
| Data Incident Commander | Azure | Container Apps or Functions, Blob Storage, managed identity, Key Vault, Azure Monitor | FastAPI + DuckDB + local logs |
| Document Operations | AWS | S3, Lambda, SQS, IAM, CloudWatch; OCR locally first | Local files + queue simulation |
| Governed Analytics | GCP | Cloud Run, BigQuery sandbox for SQL exercises, Secret Manager, logging; local Postgres for app | DuckDB/Postgres + FastAPI |
| Support Resolution | AWS | Lambda/API Gateway, DynamoDB, signed callbacks | Mock order API + SQLite |
| Knowledge Search | Azure | Container Apps, identity and private storage; local vector search first | Local PostgreSQL |
| Evaluation Gate | GitHub | Actions, artifacts, Pages, secret handling | Python runner + HTML report |
| Agent Security | Local, then GCP | Cloud Run service identities and constrained tool endpoints | Isolated local mock services |
| Compliance Mapper | Azure | Read-only configuration export, Blob, managed identity | Synthetic cloud export files |
| Field Service Intake | GCP | Cloud Run, bounded public-data ingestion, logging | Small CSV + local map/list |
| Customer Onboarding | AWS | Signed webhooks, queue retries, tenant authorization | Mock customer services |

This table is a teaching plan, not a claim these products are all free. A managed database, registry, logs, storage, outbound traffic and OCR/model APIs may bill separately. First deploy a small container; then add only the service the lesson actually needs. Avoid Kubernetes, always-on clusters, NAT gateways and paid database instances at the start. Learn equivalents conceptually before paying to run the same app in three clouds.

## What free cloud actually means

AWS's new-customer program currently offers a free account plan for up to six months with eligible credits; existing-account eligibility differs. [AWS Free Tier](https://aws.amazon.com/free/), [FAQ](https://aws.amazon.com/free/free-tier-faqs/).

Azure advertises $200 credit for eligible new accounts for 30 days plus specified free-service quantities. Do not convert to pay-as-you-go merely to finish a tutorial; review charges before upgrading. [Azure guidance](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/avoid-charges-free-account).

GCP advertises eligible new-customer credits and service-specific free quotas. Cloud Run's free allowance does not make every dependency or workload free. [GCP free program](https://cloud.google.com/free), [Cloud Run pricing](https://cloud.google.com/run/pricing).

Check account age, region, remaining credits and exact SKUs before provisioning. Do not activate three trials simultaneously: their clocks would run while you are learning Python.

## Cost controls

Keep API spend at $0 initially. If a later live demo requires paid inference, agree a small explicit monthly cap before enabling it. Do not carry forward the earlier illustrative $25–$50 API budget as your target.

Cache non-sensitive repeated requests, use small retrieval contexts and bounded output tokens, rate-limit public endpoints, cap tool turns, and run paid evals only on demand. Never place API keys in frontend code. Anonymous visitors should use a resettable fixture demo until a protected live endpoint has cost controls.

Use application-side request/token limits and provider quotas where available. Billing alerts alone do not stop spending. Configure scale-to-zero where supported, maximum instances, storage retention and log retention; inventory and delete lab resources afterward. Document any service that keeps billing when compute stops. Do not assume scale-to-zero means zero total charges.

## Teaching format for every lesson

Problem → SQL/manual baseline → Python concept → implement one small slice → inspect request and database state → test the expected failure → explain the tradeoff back → commit → deploy when ready.

## Lesson one

Create an orders table and three contract checks: unique order_id, nonnegative amount and expected date partition. First write the SQL and expected failures yourself. Then wrap those checks in Python functions returning structured JSON. The first LLM lesson will explain those recorded failures, not decide whether duplicate IDs exist. This makes the AI's contribution and its limitations visible.
