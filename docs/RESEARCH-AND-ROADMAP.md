# AI Engineer / Forward Deployed Engineer portfolio research

Research date: October 6, 2026 (America/Denver). Assumption: FDE means Forward Deployed Engineer. This is a curated qualitative review of employer responsibilities, engineering guidance, benchmark research and deployment case studies, not a census of the job market or a ranking of the world's largest economic problems.

## Recommendation

Build three flagship projects deeply, then complete seven focused builds. Your existing portfolio presents data-platform experience; projects that connect operational data to evaluated AI workflows provide a coherent transition story. Resume details and past-project impact remain user-provided claims from the existing site, not independently verified employment history.

Start with Data Incident Commander, Document Operations Workbench and Governed Analytics Copilot. They cover production debugging, multimodal extraction, SQL/data semantics, integrations and measurable workflow outcomes. Start the evaluation harness during project one and generalize it as project six. Do not wait for ten projects to begin applying.

## What the research supports

OpenAI's FDE descriptions emphasize discovery through production delivery, adoption and feedback. Its healthcare role adds domain constraints and customer-specific acceptance criteria. This suggests including a discovery brief and operational handoff in every flagship. [FDE role](https://openai.com/careers/forward-deployed-engineer-singapore-singapore/), [Healthcare role](https://openai.com/careers/forward-deployed-engineer-%28fde%29-healthcare-sf-san-francisco/).

Document review, debugging, support and compliance are established deployment areas, as illustrated by NRI, Sentry, Assembled and Vanta. These sources establish practical use cases; they are vendor/customer narratives, not independent ROI evidence. [NRI](https://claude.com/customers/nri), [Sentry](https://www.anthropic.com/customers/sentry), [Assembled](https://www.assembled.com/customers), [Vanta](https://www.anthropic.com/customers/vanta).

Anthropic's agent guidance favors simple composable patterns; its evaluation guidance supports explicit tasks, graders and traces. Use ordinary workflows where the steps are known, and add autonomy when experiments show a benefit. [Agent guidance](https://www.anthropic.com/engineering/building-effective-agents), [Evaluation guidance](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

Spider 2.0 supplies realistic enterprise SQL tasks; NIST identifies generative AI risks, and Microsoft PyRIT supplies a red-team testing framework. These make correctness and authorization measurable parts of the portfolio. [Spider](https://spider2-sql.github.io/), [NIST](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), [PyRIT](https://microsoft.github.io/PyRIT/0.12.1/getting-started/readme/).

## Selection method and ranking

Judgment-based ranking considers customer workflow value (30%), fit to your existing data-platform positioning (25%), demonstrable AI engineering depth (20%), measurable/reproducible evaluation (15%) and feasibility for a solo builder (10%). Numerical scores would imply more precision than this evidence supports. The order below is a recommended learning sequence; projects six and seven should also contribute checks to earlier builds.

### 01. [Data Incident Commander](projects/data-incident-commander.md)

**Flagship · FDE + AI engineering · approximately 55 focused hours.**

Problem: Data teams lose time correlating failed jobs, schema changes, lineage, and business impact.

Build: Ingest dbt artifacts and pipeline logs; detect deterministic failures; retrieve relevant runbooks; propose a cited incident timeline and recovery plan. Require approval before any rerun.

Why: Use SQL and rules for detection because counts and contracts are verifiable. Use an LLM for explaining heterogeneous logs and linking evidence. Retrieval keeps recommendations tied to actual runbooks.

Measure: Compare to rule-only alerts on 30 held-out incidents: top-1 cause accuracy, unsupported-claim rate, reviewer time, recovery success, p95 latency and cost per incident. Aim for ≥80% cause accuracy and zero unapproved writes; these are launch targets.

### 02. [Document Operations Workbench](projects/document-operations.md)

**Flagship · FDE · approximately 60 focused hours.**

Problem: Operations staff retype invoice and purchase-order data and manually reconcile mismatches.

Build: Upload invoices and purchase orders; extract structured fields with source spans; reconcile totals and line items; route discrepancies to a human review queue; export approved records.

Why: OCR and language models handle varied layouts. Decimal arithmetic, schemas, and matching rules own financial calculations. Confidence thresholds route uncertain fields instead of silently posting them.

Measure: Compare OCR+regex against extraction: field exact match, line-item F1, exception recall, human correction time and cost/document. Target ≥95% exact match on key fields and 100% detection of seeded total mismatches; report results separately by layout.

### 03. [Governed Analytics Copilot](projects/governed-analytics.md)

**Flagship · AI engineering · approximately 60 focused hours.**

Problem: Business users wait for analysts, while unrestricted text-to-SQL can return incorrect metrics or expose data.

Build: Translate business questions into queries over an approved semantic layer; show SQL, metric definitions, freshness and result provenance; ask clarification on ambiguous questions.

Why: The model maps language to intent. A semantic layer defines revenue and other metrics consistently. A read-only database identity, allowed views, timeouts and row limits enforce access outside the model.

Measure: Measure result-set correctness rather than SQL string match; refusal accuracy, clarification rate, tenant isolation, latency and cost. Target ≥85% execution accuracy on the held-out set and zero forbidden queries in the attack suite.

### 04. [Support Resolution Workbench](projects/support-resolution.md)

**Workflow · FDE · approximately 40 focused hours.**

Problem: Support agents repeatedly search policies and order history; a plausible answer alone does not resolve a case.

Build: Classify tickets, fetch scoped order data, retrieve versioned policy, draft a cited response, and propose an approved action in a mock commerce system.

Why: Rules handle policy limits and action permissions. The LLM handles intent and response composition. A persisted state machine makes escalation, approval and retries inspectable.

Measure: Measure correct case resolution, policy adherence, escalation recall and review time against human lookup. Target ≥90% policy adherence and zero unapproved refunds in seeded tests.

### 05. [Permission-Aware Knowledge Search](projects/secure-knowledge.md)

**Retrieval · AI engineering · approximately 40 focused hours.**

Problem: Employees need answers from scattered documentation, but useful retrieval must respect document permissions and changes.

Build: Index a synthetic company wiki with document ACLs and versions; support hybrid retrieval, cited answers, deletion and abstention when evidence is absent.

Why: Lexical search captures exact identifiers; embeddings capture paraphrases. Server-side permission filtering must occur before model context construction. A reranker is added only if retrieval evaluation justifies its cost.

Measure: Compare keyword, vector and hybrid retrieval using Recall@5 and grounded-answer accuracy; measure abstention precision and ACL leakage. Target zero unauthorized snippets across the access test matrix.

### 06. [LLM Evaluation and Release Gate](projects/llm-release-gate.md)

**Platform · AI engineering · approximately 35 focused hours.**

Problem: Prompt and model updates can silently regress task quality, latency or operating cost.

Build: Build a reusable runner that compares prompt/model versions, stores traces, reports quality/cost tradeoffs, and gates changes in GitHub Actions. Use the first three projects as real evaluation clients.

Why: Deterministic graders evaluate factual fields and tool effects. Human-reviewed rubrics handle nuanced answers. A model judge is calibrated against humans and never treated as sole ground truth.

Measure: Measure seeded regression detection, grader-human agreement, run reproducibility, dollar cost and false gate failures. Report confidence intervals and failure slices instead of one aggregate score.

### 07. [Agent Security and Tool Gateway](projects/agent-security-lab.md)

**Security · AI engineering · approximately 40 focused hours.**

Problem: Agents can confuse retrieved instructions with authority or call tools beyond the intended permissions.

Build: Build a local attack lab plus a tool gateway that checks identity, resource scope, JSON schemas and action approvals; test indirect prompt injection and cross-tenant access.

Why: Prompt text is an imperfect defense. Authorization, network allowlists, scoped tokens and tool-side checks constrain consequences even when the model follows hostile text.

Measure: Measure attack success rate before/after, benign task completion, false denials and added latency. A zero observed attack rate is limited to the disclosed suite, not proof of immunity.

### 08. [Compliance Evidence Mapper](projects/compliance-evidence.md)

**Enterprise workflow · FDE · approximately 40 focused hours.**

Problem: Security teams repeatedly map technical evidence to customer questionnaires and struggle to keep answers current.

Build: Map versioned policies and infrastructure evidence to an authored control catalog; draft cited questionnaire answers; flag missing, stale or contradictory evidence for reviewer signoff.

Why: Retrieval supplies evidence; deterministic freshness and coverage rules prevent vague summaries from masquerading as controls. The model assists drafting, while a human owns approval.

Measure: Measure evidence precision, unsupported assertion rate, missing-evidence recall and review time. Target zero unsupported approved claims in the held-out set; this does not certify compliance.

### 09. [Field Service Intake and Routing](projects/field-service-intake.md)

**Public service · FDE · approximately 40 focused hours.**

Problem: Service requests arrive as incomplete descriptions; operators must classify, deduplicate and route them to the right team.

Build: Create a multilingual intake form that extracts location and issue type, asks for missing information, finds potential duplicates and proposes a routing queue.

Why: Language models normalize messy descriptions. Rules enforce service boundaries and required fields. Similarity identifies candidates for human duplicate review rather than deleting requests automatically.

Measure: Compare rules and classifier/model routing with macro-F1, per-language results, missing-field recall and duplicate precision. Target ≥90% routing macro-F1 on your chosen subset; report language limitations.

### 10. [Customer Integration and Onboarding Lab](projects/customer-onboarding.md)

**Delivery capstone · FDE · approximately 50 focused hours.**

Problem: Enterprise AI pilots stall when customer data schemas, identity systems and operational requirements differ.

Build: Build a configurable onboarding workbench that maps CSV/JSON fields to a canonical schema, validates imports, provisions an isolated demo tenant and generates a handoff checklist and integration report.

Why: LLMs suggest mappings for unfamiliar column names. Deterministic contracts and dry-run validation decide acceptance. This project demonstrates repeatable delivery across customers rather than a single hardcoded demo.

Measure: Measure time to onboard unseen schemas, mapping accuracy, row rejection precision, webhook replay handling and tenant-isolation tests. Compare with manual mapping on identical datasets.

## Confirmed learner constraints

SQL is the strongest current skill; Python and web development are basic. Budget is very limited. Follow [the low-cost learning plan](LOW-COST-LEARNING-PLAN.md) for beginner pacing, local development, free API constraints and Azure/AWS/GCP rotation. It supersedes the illustrative budget below.

## Effort and cost

These scopes total approximately 460 focused hours for an experienced builder. A beginner needs additional foundations and substantially more implementation time; use milestone completion rather than the experienced-builder timeline below. At 10 hours/week, allow about 46 build weeks plus discovery, feedback and revision; at 20 hours/week, about 23 build weeks plus those activities. Reuse authentication, deployment and evaluation infrastructure, but make each project answer a distinct question. Three credible flagship builds can be enough for a strong portfolio; ten is a learning curriculum, not a hiring guarantee.

Budget planning assumption: start with a $25–$50 monthly API cap and a $20–$60 shared hosting allowance while one project is active. These are proposed spending limits, not verified provider quotes or guarantees. Benchmark tokens and requests before estimating per-project operating cost. Keep dormant projects as case studies or recorded demos; do not pay to keep ten databases and workers running. No paid infrastructure is provisioned by this plan.

## Teaching contract

For each milestone, explain the user problem, the simplest baseline, why a model is needed, the chosen architecture, alternatives and tradeoffs, the failure to expect, and the test proving progress. Then implement a small slice, inspect it together, ask you to explain the decision back, and record it in docs/decisions. Progress should produce working software and understanding at the same time.

## Completion rubric

A project is complete when it has a reproducible repository, public-safe data, working user flow, live deployment or clearly identified recorded demo, baseline comparison, frozen evaluation set, failure analysis, latency/cost report, bounded usage, operational runbook and a short case study. A frontend alone is not a deployed AI project. Synthetic benchmarks support technical claims; business impact requires an actual measured pilot.

## GitHub, LinkedIn and resume

Use one repository per substantial application when implementation starts. Include problem, architecture, local setup, demo, dataset origin/license, eval command/results, tradeoffs and limitations in each README. Pin the strongest shipped work, not ten empty repositories. Keep forks distinct from original work.

The profile page links to all ten specifications under a Planned label. Promote each only after implementation and deployment evidence exists. Add the strongest three finished case studies to LinkedIn Featured with a demo and repository link. Publish a short post describing the problem, architectural decision, measured benchmark and one failure. Templates are included in each specification.

On the resume, use two or three relevant projects with measured outcomes. Prefer execution accuracy, exception recall, latency, cost or timed review metrics over unsupported revenue claims. Keep this work in a Personal Projects section. Bracketed bullet templates in each specification are not ready to paste as accomplishments.

## First milestone: Data Incident Commander

Create a deterministic orders pipeline in DuckDB with contracts for order IDs, partitions and totals. Seed three incidents: duplicate IDs, missing daily partition and renamed amount column. Write a rule-only diagnosis command and fixtures with expected outputs. Only then add an LLM explanation grounded in those facts. This establishes a measurable baseline and teaches the boundary between detection and explanation before deployment complexity.

## Unknowns to resolve

Confirm your preferred resume, skills you want to strengthen, weekly availability, cloud/API budget, preferred deployment provider and access to a real operator for interviews. Do not use employer systems, internal datasets or production credentials in public projects without explicit authorization.
