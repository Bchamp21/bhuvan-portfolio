# 07. Agent Security and Tool Gateway

**Status: Planned.** Security · AI engineering. Estimated focused effort: 40 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Agents can confuse retrieved instructions with authority or call tools beyond the intended permissions.

## What we will build

Build a local attack lab plus a tool gateway that checks identity, resource scope, JSON schemas and action approvals; test indirect prompt injection and cross-tenant access.

## Why these choices

Prompt text is an imperfect defense. Authorization, network allowlists, scoped tokens and tool-side checks constrain consequences even when the model follows hostile text.

## Data and baseline

Write synthetic documents and attacks against your own knowledge/support apps; use canary secrets and mock outbound endpoints. PyRIT is an optional harness; do not scan third-party systems.

## Architecture

Untrusted content → model proposal → identity-bound gateway → permission/schema checks → approved tool execution → audit events.

Suggested stack: Python, FastAPI gateway, policy checks, pytest; optional Microsoft PyRIT.

## Evaluation and launch criteria

Measure attack success rate before/after, benign task completion, false denials and added latency. A zero observed attack rate is limited to the disclosed suite, not proof of immunity.

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

Show an injection succeeding in an intentionally vulnerable sandbox, then blocked by an independent tool permission check.

## Deployment plan

Deploy a restricted sandbox with mock integrations, no production secrets and an explicit reset path. Publish the attack corpus and defensive test report.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built a tool authorization gateway; reduced attack success from [A]% to [B]% on [N] disclosed scenarios while retaining [X]% benign task completion.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Agent Security and Tool Gateway to investigate this workflow: Agents can confuse retrieved instructions with authority or call tools beyond the intended permissions. My implementation uses Python, FastAPI gateway, policy checks, pytest; optional Microsoft PyRIT. The key design choice: Prompt text is an imperfect defense. Authorization, network allowlists, scoped tokens and tool-side checks constrain consequences even when the model follows hostile text. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [Microsoft PyRIT](https://microsoft.github.io/PyRIT/0.12.1/getting-started/readme/)
- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
