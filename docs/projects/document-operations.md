# 02. Document Operations Workbench

**Status: Planned.** Flagship · FDE. Estimated focused effort: 60 hours, excluding real-user recruitment. These are scope estimates, not commitments.

## Customer problem

Operations staff retype invoice and purchase-order data and manually reconcile mismatches.

## What we will build

Upload invoices and purchase orders; extract structured fields with source spans; reconcile totals and line items; route discrepancies to a human review queue; export approved records.

## Why these choices

OCR and language models handle varied layouts. Decimal arithmetic, schemas, and matching rules own financial calculations. Confidence thresholds route uncertain fields instead of silently posting them.

## Data and baseline

Create 100 clearly synthetic invoices and matching POs across layouts, currencies and tax formats. Include scanned images, duplicate invoices, missing fields, and intentionally inconsistent totals. Split by layout and vendor.

## Architecture

Upload → private storage → queued OCR → schema extraction → deterministic validation → field-level review → approved export + audit events.

Suggested stack: Python, OCR, Pydantic, FastAPI, PostgreSQL, private object storage, React.

## Evaluation and launch criteria

Compare OCR+regex against extraction: field exact match, line-item F1, exception recall, human correction time and cost/document. Target ≥95% exact match on key fields and 100% detection of seeded total mismatches; report results separately by layout.

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

Process a clean invoice, an unseen layout, a duplicate and a mismatched invoice; correct a field with the source page visible.

## Deployment plan

Deploy API plus queue worker and private storage; add upload size limits, deletion, expiring links and an integration sandbox. Pages hosts the public case study only.

Required release evidence: health check, auth/permission tests, model timeout behavior, usage limit, redacted traces, deployment URL, reproducible seeded dataset, rollback instructions and architecture diagram.

## Resume bullet after verification

Built an invoice reconciliation workflow processing [N] synthetic documents with [X]% field accuracy and [Y]% exception recall; measured [Z]% faster review in a [N]-user pilot.

Replace every bracket with recorded measurements. Until shipped, describe it only as an in-progress personal project. Never imply these results came from an employer or paying customer.

## LinkedIn case-study draft

I built a personal prototype of Document Operations Workbench to investigate this workflow: Operations staff retype invoice and purchase-order data and manually reconcile mismatches. My implementation uses Python, OCR, Pydantic, FastAPI, PostgreSQL, private object storage, React. The key design choice: OCR and language models handle varied layouts. Decimal arithmetic, schemas, and matching rules own financial calculations. Confidence thresholds route uncertain fields instead of silently posting them. Baseline: [method]. Evaluation: [dataset size and split]. Result: [measured result]. Biggest remaining failure: [example]. Demo: [URL]. Code and reproducible evaluation: [URL]. Feedback from people doing this work is welcome.

## Research references

- [NRI document review case study](https://claude.com/customers/nri)

Sources support the adjacent problem area or engineering approach; the proposed scope and ranking are my recommendations. Vendor case studies are self-reported and do not predict this prototype’s results.
