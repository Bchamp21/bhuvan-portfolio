# 10. Customer Integration and Onboarding Lab

**Status: Planned.** Delivery capstone · FDE. Estimated focused effort: 50 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Enterprise AI pilots stall when customer data schemas, identity systems and operational requirements differ.

## What we will build

Build a configurable onboarding workbench that maps CSV/JSON fields to a canonical schema, validates imports, provisions an isolated demo tenant and generates a handoff checklist and integration report.

## Why these choices

LLMs suggest mappings for unfamiliar column names. Deterministic contracts and dry-run validation decide acceptance. This project demonstrates repeatable delivery across customers rather than a single hardcoded demo.

## Data and baseline

Create three synthetic customers with different schemas, field names, malformed rows, webhook signatures and retry behavior. Add a fourth unseen customer as the acceptance test.

## Architecture

Discovery worksheet → mapping proposal → human confirmation → validation preview → idempotent import → isolated tenant → acceptance report + handoff.

Suggested stack: FastAPI, PostgreSQL tenant isolation, React, schema registry, signed webhooks, Docker and CI.

## Evaluation and launch criteria

Measure time to onboard unseen schemas, mapping accuracy, row rejection precision, webhook replay handling and tenant-isolation tests. Compare with manual mapping on identical datasets.

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

Onboard an unseen customer, fix a rejected row, replay a webhook and show that a second tenant cannot access the first.

## Deployment plan

Deploy an API and mock customer services, separate credentials per tenant, migrations and backup/restore instructions; publish a customer runbook.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built a configurable onboarding platform supporting [N] schemas; reduced measured integration setup from [A] to [B] and passed [N] tenant-isolation and replay tests.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Customer Integration and Onboarding Lab to investigate this workflow: Enterprise AI pilots stall when customer data schemas, identity systems and operational requirements differ. My implementation uses FastAPI, PostgreSQL tenant isolation, React, schema registry, signed webhooks, Docker and CI. The key design choice: LLMs suggest mappings for unfamiliar column names. Deterministic contracts and dry-run validation decide acceptance. This project demonstrates repeatable delivery across customers rather than a single hardcoded demo. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [OpenAI FDE responsibilities](https://openai.com/careers/forward-deployed-engineer-singapore-singapore/)
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
