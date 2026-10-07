# 08. Compliance Evidence Mapper

**Status: Planned.** Enterprise workflow · FDE. Estimated focused effort: 40 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Security teams repeatedly map technical evidence to customer questionnaires and struggle to keep answers current.

## What we will build

Map versioned policies and infrastructure evidence to an authored control catalog; draft cited questionnaire answers; flag missing, stale or contradictory evidence for reviewer signoff.

## Why these choices

Retrieval supplies evidence; deterministic freshness and coverage rules prevent vague summaries from masquerading as controls. The model assists drafting, while a human owns approval.

## Data and baseline

Author a small control catalog and 50 synthetic questionnaire items, policies and mock cloud configuration exports. Avoid redistributing proprietary control text.

## Architecture

Evidence ingestion → control matching → freshness/contradiction checks → cited draft → reviewer approval → export.

Suggested stack: FastAPI, PostgreSQL, retrieval, versioned object storage and review UI.

## Evaluation and launch criteria

Measure evidence precision, unsupported assertion rate, missing-evidence recall and review time. Target zero unsupported approved claims in the held-out set; this does not certify compliance.

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

Expire an access-review artifact, show the affected controls, update evidence and compare the versioned answer.

## Deployment plan

Deploy read-only mock cloud connectors, private evidence storage, retention controls and a public synthetic demo.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built an evidence-backed questionnaire workflow covering [N] controls, with [X]% citation precision and [Y]% missing-evidence recall on synthetic reviews.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Compliance Evidence Mapper to investigate this workflow: Security teams repeatedly map technical evidence to customer questionnaires and struggle to keep answers current. My implementation uses FastAPI, PostgreSQL, retrieval, versioned object storage and review UI. The key design choice: Retrieval supplies evidence; deterministic freshness and coverage rules prevent vague summaries from masquerading as controls. The model assists drafting, while a human owns approval. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [Vanta compliance remediation case study](https://www.anthropic.com/customers/vanta)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
