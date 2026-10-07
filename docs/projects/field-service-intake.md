# 09. Field Service Intake and Routing

**Status: Planned.** Public service · FDE. Estimated focused effort: 40 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Service requests arrive as incomplete descriptions; operators must classify, deduplicate and route them to the right team.

## What we will build

Create a multilingual intake form that extracts location and issue type, asks for missing information, finds potential duplicates and proposes a routing queue.

## Why these choices

Language models normalize messy descriptions. Rules enforce service boundaries and required fields. Similarity identifies candidates for human duplicate review rather than deleting requests automatically.

## Data and baseline

Use an anonymized, bounded NYC311 open-data slice for structured categories and routing analysis. Author synthetic multilingual narratives because public records may not contain the free-text detail needed. Preserve temporal splits.

## Architecture

Intake → field extraction → validation/clarification → duplicate candidates → routing suggestion → dispatcher approval.

Suggested stack: FastAPI, PostgreSQL geospatial support if needed, multilingual model and React map/list interface.

## Evaluation and launch criteria

Compare rules and classifier/model routing with macro-F1, per-language results, missing-field recall and duplicate precision. Target ≥90% routing macro-F1 on your chosen subset; report language limitations.

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

Submit incomplete intake, clarify location, identify a duplicate and explain the proposed department.

## Deployment plan

Deploy a synthetic public intake sandbox with rate limits; never submit real city requests. Keep raw public location records out of the portfolio demo.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built multilingual service-request intake; achieved [X] routing macro-F1 on [N] held-out cases and [Y]% precision for duplicate suggestions.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Field Service Intake and Routing to investigate this workflow: Service requests arrive as incomplete descriptions; operators must classify, deduplicate and route them to the right team. My implementation uses FastAPI, PostgreSQL geospatial support if needed, multilingual model and React map/list interface. The key design choice: Language models normalize messy descriptions. Rules enforce service boundaries and required fields. Similarity identifies candidates for human duplicate review rather than deleting requests automatically. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [NYC311 service request reporting](https://www.nyc.gov/site/311reporting/311-reports/service-requests.page)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
