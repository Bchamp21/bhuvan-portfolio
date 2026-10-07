# 01. Data Incident Commander

**Status: Planned.** Flagship · FDE + AI engineering. Estimated focused effort: 55 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Data teams lose time correlating failed jobs, schema changes, lineage, and business impact.

## What we will build

Ingest dbt artifacts and pipeline logs; detect deterministic failures; retrieve relevant runbooks; propose a cited incident timeline and recovery plan. Require approval before any rerun.

## Why these choices

Use SQL and rules for detection because counts and contracts are verifiable. Use an LLM for explaining heterogeneous logs and linking evidence. Retrieval keeps recommendations tied to actual runbooks.

## Data and baseline

Generate 30 pipeline incidents with known causes in a small orders lakehouse: schema drift, duplicate loads, missing partitions, late arrivals, stale dashboards. Keep incident families separated between development and holdout.

## Architecture

Dashboard → incident API → rule checks + lineage graph → runbook retrieval → structured diagnosis → approval queue → audited sandbox rerun.

Suggested stack: Python, FastAPI, dbt, DuckDB locally; PostgreSQL for deployment; React; Docker. Add an orchestrator only when scheduling needs it.

## Evaluation and launch criteria

Compare to rule-only alerts on 30 held-out incidents: top-1 cause accuracy, unsupported-claim rate, reviewer time, recovery success, p95 latency and cost per incident. Aim for ≥80% cause accuracy and zero unapproved writes; these are launch targets.

All thresholds above are proposed targets, not measured achievements. Freeze the evaluation set before tuning. Report raw denominators, error slices and limitations; measure reviewer time on the same task with and without the assistant.

## Teaching and implementation sequence

1. Discovery: interview an operator or run a clearly labeled simulated discovery session. Write the current workflow, user pain, decision owner and acceptance criteria. Explain why this workflow merits automation.
2. Baseline: implement the smallest deterministic/manual version. Record where it fails before introducing a model. Explain what information the model adds.
3. Vertical slice: connect one fixture through API, business logic and UI. Inspect each request, response and persisted state together.
4. AI component: add structured output, evidence handling and bounded tool use. Explain each schema field, retrieval choice and failure behavior.
5. Reliability: add permissions, timeouts, retries, idempotency and representative failure tests where relevant. Explain the production failure each control prevents.
6. Evaluation: run the frozen benchmark and compare with the baseline. Investigate failures; do not optimize only the headline score.
7. Deployment: containerize, configure secrets, migrate storage, run smoke checks and exercise rollback. Trace one live request end to end.
8. Pilot and handoff: collect consented operator feedback, document changes, and record a three-minute demo. Publish measured results and remaining limits.

## Live demonstration

Break a pipeline live, explain downstream impact, approve a replay, and show idempotency on duplicate replay.

## Deployment plan

Deploy a Docker API and worker on a container host with managed PostgreSQL; frontend on Pages. Run seeded scenarios on a schedule and expose only synthetic logs.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built a data-incident assistant integrating [N] pipelines; achieved [X]% cause accuracy on [N] held-out incidents and reduced median diagnosis time from [A] to [B] in a timed pilot.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Data Incident Commander to investigate this workflow: Data teams lose time correlating failed jobs, schema changes, lineage, and business impact. My implementation uses Python, FastAPI, dbt, DuckDB locally; PostgreSQL for deployment; React; Docker. Add an orchestrator only when scheduling needs it. The key design choice: Use SQL and rules for detection because counts and contracts are verifiable. Use an LLM for explaining heterogeneous logs and linking evidence. Retrieval keeps recommendations tied to actual runbooks. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [Sentry debugging case study](https://www.anthropic.com/customers/sentry)
- [OpenAI FDE responsibilities](https://openai.com/careers/forward-deployed-engineer-singapore-singapore/)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
