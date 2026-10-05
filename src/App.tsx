import { lazy, Suspense } from 'react'
import { motion } from 'motion/react'

const SkillGalaxy = lazy(() => import('./SkillGalaxy'))

const projects = [
  {
    kicker: '01 · LIVE DEMO',
    title: 'Job-Match AI',
    blurb: 'Resume ↔ job skill scorer with FastAPI and optional ChatGPT blending.',
    metric: 'Live on Render',
    href: 'https://job-match-ai-rawb.onrender.com',
  },
  {
    kicker: '02 · AI ENGINEERING',
    title: 'AI Engineer Projects',
    blurb: 'Symptom checker, finance sentiment analyzer, multi-agent research digest.',
    metric: 'Deployed LLM apps',
    href: 'https://github.com/Bchamp21/ai-engineer-projects',
  },
  {
    kicker: '03 · DATA PLATFORM',
    title: 'Azure Databricks Lakehouse',
    blurb: 'Medallion MDM pipelines with ADF, ADLS Gen2, and Delta Lake.',
    metric: '500+ fund datasets',
    href: 'https://github.com/Bchamp21/data-engineering-azure-databricks-project',
  },
  {
    kicker: '04 · CLOUD DE',
    title: 'AWS & GCP Pipelines',
    blurb: 'End-to-end data engineering projects across major clouds.',
    metric: 'Multi-cloud DE',
    href: 'https://github.com/Bchamp21/data-engineering-aws',
  },
  {
    kicker: '05 · PRODUCT',
    title: 'AuraAI',
    blurb: 'AI chatbot SaaS stack: FastAPI + React + Supabase + Stripe.',
    metric: 'Full-stack AI',
    href: 'https://github.com/Bchamp21/AuraAI',
  },
  {
    kicker: '06 · PRACTICE',
    title: 'Daily DE + AI',
    blurb: '180 days of real data engineering and AI mini-projects.',
    metric: 'Builder rhythm',
    href: 'https://github.com/Bchamp21/daily-de-ai-projects',
  },
]

const jobs = [
  {
    when: '2023 — Now',
    title: 'Sr. Data / Application Engineer',
    org: 'Janus Henderson Investors',
    detail: 'Lakehouse + Snowflake MDM for fund data; production AI agents for BAU triage and integrity checks.',
  },
  {
    when: 'Prior',
    title: 'Data & Analytics engineering',
    org: 'Hubbell · Zurich · TransUnion · Citi · Amex · Cognizant',
    detail: 'Fraud/credit risk models, ETL latency cuts, and enterprise SQL/Spark platforms across financial services.',
  },
]

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav inner">
          <a className="brand" href="#top">Bhuvan Sarakam</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <main id="top">
        <section className="container hero">
          <div>
            <p className="muted" style={{ fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.78rem' }}>
              Data · Power BI · Software · AI
            </p>
            <motion.h1
              className="serif"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              I build data platforms and AI systems for the real world.
            </motion.h1>
            <p className="lead muted">
              Senior Data Engineer with 10+ years across banking, insurance, and asset management —
              Databricks lakehouses, Snowflake warehouses, and production LangGraph agents that cut detection time from hours to minutes.
            </p>
            <div className="btns">
              <a className="btn primary" href="/resume/Bhuvan-Sarakam-AI-Data-Engineer.pdf" target="_blank" rel="noreferrer">AI / Data resume</a>
              <a className="btn" href="/resume/Bhuvan-Sarakam-Databricks-Cloud.pdf" target="_blank" rel="noreferrer">Databricks resume</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/bhuvansdata" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn ghost" href="https://github.com/Bchamp21" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img src="/bhuvan.png" alt="Bhuvan Sarakam" />
            <div className="canvas-chip">
              <Suspense fallback={null}>
                <SkillGalaxy />
              </Suspense>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2 className="serif">From lakehouse to agent — software that holds up.</h2>
            <p className="muted" style={{ maxWidth: '40rem' }}>
              Same rhythm as a product engineer’s portfolio: clear narrative, real metrics, then the work.
            </p>
            <div className="story-grid">
              <article className="story">
                <div className="num">01</div>
                <h3 className="serif">Pipelines people can trust</h3>
                <p className="muted">Medallion architectures, incremental loads, and SQL that survives audit — ADF, Databricks, Snowflake.</p>
              </article>
              <article className="story">
                <div className="num">02</div>
                <h3 className="serif">Platforms built to hold up</h3>
                <p className="muted">.NET/Python APIs, CI/CD, observability, and MDM for hundreds of fund datasets under tight SLAs.</p>
              </article>
              <article className="story">
                <div className="num">03</div>
                <h3 className="serif">AI as part of the product</h3>
                <p className="muted">LangChain / LangGraph / RAG agents for triage, integrity checks, and match scoring — with a human in the loop.</p>
              </article>
              <article className="story">
                <div className="num">04</div>
                <h3 className="serif">BI that tells the story</h3>
                <p className="muted">Power BI and dimensional models so operators see impact, not just raw tables.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <h2 className="serif">Selected work</h2>
            <p className="muted">Projects you can open. New AI builds get added here as they ship.</p>
            <div className="work-grid">
              {projects.map((p) => (
                <a key={p.title} className="work" href={p.href} target="_blank" rel="noreferrer">
                  <div className="kicker">{p.kicker}</div>
                  <h3>{p.title}</h3>
                  <p className="muted" style={{ fontSize: '0.92rem', margin: 0 }}>{p.blurb}</p>
                  <div className="metric">{p.metric} →</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <h2 className="serif">Experience</h2>
            <div className="skills">
              {['Databricks', 'PySpark', 'Snowflake', 'ADF', 'dbt', 'Power BI', 'SQL', 'LangGraph', 'RAG', 'FastAPI', '.NET', 'Azure', 'AWS'].map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
            <div className="timeline">
              {jobs.map((j) => (
                <div className="job" key={j.title}>
                  <div className="when">{j.when}</div>
                  <div>
                    <strong>{j.title}</strong>
                    <div className="muted">{j.org}</div>
                    <p className="muted" style={{ margin: '0.4rem 0 0' }}>{j.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="partners">
          <div className="container">
            <h2 className="serif">For investors &amp; cofounders</h2>
            <div className="story-grid">
              <article className="story">
                <h3 className="serif">What I build</h3>
                <p className="muted">AI agents, data platforms, and demos that ship. Looking for partners who care about craft and real users.</p>
              </article>
              <article className="story">
                <h3 className="serif">How to reach me</h3>
                <p className="muted">Send a short intro and what you’re building. This site is a portfolio — not a commercial pitch.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="cta">
              <h2 className="serif" style={{ margin: 0, color: '#fff' }}>Let’s build something people remember.</h2>
              <p className="muted" style={{ margin: 0 }}>bhuvansarakam@gmail.com · Denver, CO</p>
              <div className="btns">
                <a className="btn" href="mailto:bhuvansarakam@gmail.com">Email me</a>
                <a className="btn ghost" href="https://www.linkedin.com/in/bhuvansdata" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn ghost" href="/resume/Bhuvan-Sarakam-AI-Data-Engineer.pdf" target="_blank" rel="noreferrer">AI resume</a>
                <a className="btn ghost" href="/resume/Bhuvan-Sarakam-Databricks-Cloud.pdf" target="_blank" rel="noreferrer">Databricks resume</a>
              </div>
            </div>
            <p className="footer">© {new Date().getFullYear()} Bhuvan Sarakam · Portfolio</p>
          </div>
        </section>
      </main>
    </>
  )
}
