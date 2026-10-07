# 03. Governed Analytics Copilot

**Status: Planned.** Flagship · AI engineering. Estimated focused effort: 60 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Business users wait for analysts, while unrestricted text-to-SQL can return incorrect metrics or expose data.

## What we will build

Translate business questions into queries over an approved semantic layer; show SQL, metric definitions, freshness and result provenance; ask clarification on ambiguous questions.

## Why these choices

The model maps language to intent. A semantic layer defines revenue and other metrics consistently. A read-only database identity, allowed views, timeouts and row limits enforce access outside the model.

## Data and baseline

Seed a SaaS dataset with customers, subscriptions and events. Write 100 questions with expected result sets, including ambiguous metrics, timezone boundaries and forbidden access. Use Spider 2.0 as additional research, not an unreported training/test mix.

## Architecture

Question → allowed schema + definitions → structured query proposal → AST checks → read-only execution → cited result explanation.

Suggested stack: FastAPI, PostgreSQL, SQL parser, metric registry, React charts.

## Evaluation and launch criteria

Measure result-set correctness rather than SQL string match; refusal accuracy, clarification rate, tenant isolation, latency and cost. Target ≥85% execution accuracy on the held-out set and zero forbidden queries in the attack suite.

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

Ask a growth question, inspect its SQL and definition, then attempt cross-tenant access and a malicious query.

## Deployment plan

Deploy API with separate read-only DB role, per-user access mapping, statement timeout and query audit trail; serve the UI separately.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built a governed analytics copilot with [X]% result correctness on [N] held-out questions; enforced read-only execution and blocked [N/N] prohibited test queries.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Governed Analytics Copilot to investigate this workflow: Business users wait for analysts, while unrestricted text-to-SQL can return incorrect metrics or expose data. My implementation uses FastAPI, PostgreSQL, SQL parser, metric registry, React charts. The key design choice: The model maps language to intent. A semantic layer defines revenue and other metrics consistently. A read-only database identity, allowed views, timeouts and row limits enforce access outside the model. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [Spider 2.0 enterprise SQL benchmark](https://spider2-sql.github.io/)
- [OpenAI FDE responsibilities](https://openai.com/careers/forward-deployed-engineer-singapore-singapore/)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
