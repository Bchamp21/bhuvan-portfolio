# 05. Permission-Aware Knowledge Search

**Status: Planned.** Retrieval · AI engineering. Estimated focused effort: 40 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Employees need answers from scattered documentation, but useful retrieval must respect document permissions and changes.

## What we will build

Index a synthetic company wiki with document ACLs and versions; support hybrid retrieval, cited answers, deletion and abstention when evidence is absent.

## Why these choices

Lexical search captures exact identifiers; embeddings capture paraphrases. Server-side permission filtering must occur before model context construction. A reranker is added only if retrieval evaluation justifies its cost.

## Data and baseline

Create 150 synthetic wiki pages across three departments and 100 answerable/unanswerable questions. Include revoked access, stale policies and malicious instructions inside documents.

## Architecture

Authenticated question → ACL-filtered hybrid retrieval → optional rerank → evidence threshold → cited answer or abstention.

Suggested stack: FastAPI, PostgreSQL full-text search + vector extension, React and an ingestion worker.

## Evaluation and launch criteria

Compare keyword, vector and hybrid retrieval using Recall@5 and grounded-answer accuracy; measure abstention precision and ACL leakage. Target zero unauthorized snippets across the access test matrix.

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

Ask the same question as two roles, revoke a document, reindex a policy and show a missing-evidence refusal.

## Deployment plan

Deploy API and managed PostgreSQL; private ingestion endpoint, deletion propagation, role fixtures and traces with redacted text.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built permission-aware hybrid search across [N] documents; achieved Recall@5 of [X] and passed [N] access-isolation tests.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Permission-Aware Knowledge Search to investigate this workflow: Employees need answers from scattered documentation, but useful retrieval must respect document permissions and changes. My implementation uses FastAPI, PostgreSQL full-text search + vector extension, React and an ingestion worker. The key design choice: Lexical search captures exact identifiers; embeddings capture paraphrases. Server-side permission filtering must occur before model context construction. A reranker is added only if retrieval evaluation justifies its cost. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
