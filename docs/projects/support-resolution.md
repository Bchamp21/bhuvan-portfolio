# 04. Support Resolution Workbench

**Status: Planned.** Workflow · FDE. Estimated focused effort: 40 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Support agents repeatedly search policies and order history; a plausible answer alone does not resolve a case.

## What we will build

Classify tickets, fetch scoped order data, retrieve versioned policy, draft a cited response, and propose an approved action in a mock commerce system.

## Why these choices

Rules handle policy limits and action permissions. The LLM handles intent and response composition. A persisted state machine makes escalation, approval and retries inspectable.

## Data and baseline

Author 80 synthetic tickets, two policy versions and a mock order API. Include conflicting policy, angry users, missing evidence and refund requests outside limits.

## Architecture

Ticket → intent → scoped tools → policy retrieval → draft/action → reviewer decision → idempotent action → audit.

Suggested stack: FastAPI, PostgreSQL, retrieval, React review queue and a mock order service.

## Evaluation and launch criteria

Measure correct case resolution, policy adherence, escalation recall and review time against human lookup. Target ≥90% policy adherence and zero unapproved refunds in seeded tests.

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

Resolve a routine case, escalate a policy exception, then retry an approved action without issuing it twice.

## Deployment plan

Deploy API and mock commerce service with sandbox credentials; cap tool calls and spend; make the public demo resettable.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built a support workflow spanning [N] tools; achieved [X]% policy adherence on [N] cases and reduced measured handling time by [Y]%.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Support Resolution Workbench to investigate this workflow: Support agents repeatedly search policies and order history; a plausible answer alone does not resolve a case. My implementation uses FastAPI, PostgreSQL, retrieval, React review queue and a mock order service. The key design choice: Rules handle policy limits and action permissions. The LLM handles intent and response composition. A persisted state machine makes escalation, approval and retries inspectable. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [Assembled customer deployments](https://www.assembled.com/customers)
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
