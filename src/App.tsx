import { useEffect, useRef, useState } from 'react'
import { projects } from './data/projects'
import { experience, education } from './data/experience'
import { ArrowDown, ArrowUpRight, MailIcon } from './components/Icons'
import ProjectRoadmap from './components/ProjectRoadmap'
import SystemStage from './components/SystemStage'

const STEPS = [
  {
    kicker: '01 / Pipelines',
    title: 'Pipelines people can trust.',
    body: 'Medallion architectures, incremental loads, and SQL that survives audit — ADF, Databricks, and Snowflake under tight SLAs.',
  },
  {
    kicker: '02 / Platforms',
    title: 'Platforms built to hold up.',
    body: '.NET and Python APIs, CI/CD, observability, and MDM for hundreds of fund datasets across banking, insurance, and asset management.',
  },
  {
    kicker: '03 / Applied AI',
    title: 'AI becomes part of the product.',
    body: 'LangChain, LangGraph, and RAG agents for triage, integrity checks, and match scoring — with a human in the loop for the final call.',
  },
  {
    kicker: '04 / Analytics',
    title: 'Then the data tells the story.',
    body: 'Power BI and dimensional models so operators see impact, not just raw tables — from lakehouse tables to board-ready views.',
  },
] as const

export default function App() {
  const [activeProject, setActiveProject] = useState(0)
  const [storyStep, setStoryStep] = useState(0)
  const [navScrolled, setNavScrolled] = useState(false)
  const panelRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = panelRefs.current.filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (!visible[0]) return
        const idx = els.indexOf(visible[0].target as HTMLElement)
        if (idx >= 0) setStoryStep(idx)
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: [0.15, 0.4, 0.7] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const current = projects[activeProject] ?? projects[0]

  return (
    <div className="signal-portfolio">
      <header className={`signal-nav ${navScrolled ? 'is-scrolled' : 'is-home'}`}>
        <div className="signal-nav-inner">
          <a className="signal-nav-mark" href="#top">
            <span>BC</span>
            <strong>Bhuvan Chandra</strong>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#roadmap">Build journal</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a className="signal-nav-contact" href="#contact">
              Contact <ArrowUpRight />
            </a>
          </nav>
        </div>
      </header>

      <main className="signal-portfolio-main">
        <section className={`signal-story is-step-${storyStep}`} aria-label="How a data platform works">
          <SystemStage step={Math.min(storyStep, 4)} />
          <div className="signal-panels">
            <section
              id="top"
              className="signal-panel signal-hero"
              ref={(el) => {
                panelRefs.current[0] = el
              }}
            >
              <div className="signal-panel-copy">
                <p className="signal-kicker">
                  Bhuvan Chandra
                  <span>Senior Data Engineer · AI/ML &amp; Data Platform</span>
                </p>
                <h1>I build data platforms and AI systems for the real world.</h1>
                <p className="signal-intro">
                  10+ years in data engineering, analytics, and ML — Databricks lakehouses,
                  Snowflake warehouses, and production agents that move detection from hours to minutes.
                </p>
                <div className="signal-actions">
                  <a className="signal-button" href="#work">
                    View selected work <ArrowDown />
                  </a>
                  <a className="signal-text-link" href="mailto:bhuvansarakam@gmail.com">
                    Start a conversation <ArrowUpRight />
                  </a>
                </div>
              </div>
            </section>

            {STEPS.map((step, i) => (
              <section
                key={step.kicker}
                className="signal-panel"
                ref={(el) => {
                  panelRefs.current[i + 1] = el
                }}
              >
                <div className="signal-panel-copy signal-step-copy">
                  <p className="signal-kicker">{step.kicker}</p>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="signal-work" id="work" aria-labelledby="work-title">
          <div className="signal-page-frame signal-section-heading">
            <div>
              <p className="signal-kicker">Selected work</p>
              <h2 id="work-title">Built for the real world.</h2>
            </div>
            <p>
              Projects measured by what ships: live demos, lakehouse pipelines, and AI agents you can open
              and explore. New builds land here as they go live.
            </p>
          </div>

          <div className="signal-page-frame signal-work-layout">
            <div className="signal-project-list">
              {projects.map((p, i) => (
                <a
                  key={p.id}
                  className={`signal-project-row ${i === activeProject ? 'is-active' : ''}`}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setActiveProject(i)}
                  onFocus={() => setActiveProject(i)}
                >
                  <span className="signal-project-number">{p.number}</span>
                  <span className="signal-project-copy">
                    <small>{p.category}</small>
                    <strong>{p.title}</strong>
                    <span>{p.metric}</span>
                  </span>
                  <ArrowUpRight />
                  {p.image ? (
                    <span className="signal-project-mobile-image">
                      <img src={p.image} alt="" loading="lazy" />
                    </span>
                  ) : null}
                </a>
              ))}
            </div>

            <div className="signal-work-visual">
              <div className="signal-work-image">
                {current.image ? (
                  <>
                    <img src={current.image} alt="" className="work-shot" />
                    <div className="signal-work-caption">
                      <span>{current.role ?? current.category}</span>
                      <strong>{current.metric}</strong>
                    </div>
                  </>
                ) : (
                  <div className="signal-work-fallback">
                    <p className="signal-kicker">{current.category}</p>
                    <strong>{current.title}</strong>
                    <span>{current.metric}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ProjectRoadmap />

        <section className="signal-about" id="about" aria-labelledby="about-title">
          <div className="signal-page-frame signal-about-grid">
            <div className="signal-about-image">
              <img src={`${import.meta.env.BASE_URL}bhuvan.png`} alt="Bhuvan Chandra" className="object-cover" />
            </div>
            <div className="signal-about-copy">
              <p className="signal-kicker">About Bhuvan</p>
              <h2 id="about-title">From lakehouse tables to production agents.</h2>
              <p className="signal-about-lead">
                Based in Denver, CO. Senior Data Engineer at Janus Henderson since 2023, with a decade
                across Hubbell, Zurich, TransUnion CIBIL, Citi, American Express, and Cognizant.
                Education: IIT Madras (B.Tech / M.Tech) and an M.S. in Computer Science from Northwest
                Missouri State.
              </p>
              <dl className="signal-capabilities">
                <div>
                  <dt>Data platform</dt>
                  <dd>Databricks, PySpark, Snowflake, Azure Data Factory, dbt, Delta Lake</dd>
                </div>
                <div>
                  <dt>Applied AI</dt>
                  <dd>LangChain, LangGraph, RAG, 17 production agents, FastAPI scoring services</dd>
                </div>
                <div>
                  <dt>Software &amp; BI</dt>
                  <dd>.NET / Python APIs, Power BI, dimensional models, CI/CD observability</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="signal-page-frame signal-experience" id="experience">
            <header className="signal-experience-heading">
              <p className="signal-kicker">Selected experience</p>
              <h3>Engineering across platforms, products, and teams.</h3>
              <div className="signal-resume-links">
                <a
                  className="signal-resume-link"
                  href={`${import.meta.env.BASE_URL}resume/Bhuvan-Sarakam-AI-Data-Engineer.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  AI/Data Platform resume <ArrowUpRight />
                </a>
                <a
                  className="signal-resume-link"
                  href={`${import.meta.env.BASE_URL}resume/Bhuvan-Sarakam-Databricks-Cloud.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Databricks &amp; Cloud resume <ArrowUpRight />
                </a>
              </div>
            </header>
            <div>
              {experience.map((job) => (
                <div className="signal-experience-row" key={`${job.org}-${job.title}`}>
                  <span>{job.when}</span>
                  <div className="signal-experience-role">
                    <strong>{job.title}</strong>
                    <span>{job.org}</span>
                  </div>
                  <p>{job.detail}</p>
                </div>
              ))}
              {education.map((ed) => (
                <div className="signal-experience-row" key={ed.org}>
                  <span>{ed.when}</span>
                  <div className="signal-experience-role">
                    <strong>{ed.title}</strong>
                    <span>{ed.org}</span>
                  </div>
                  <p>{ed.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="signal-contact" id="contact" aria-labelledby="contact-title">
          <div className="signal-page-frame">
            <p className="signal-kicker">The next sequence</p>
            <h2 id="contact-title">Let&apos;s build something people remember.</h2>
            <p className="signal-contact-note">
              Open to connect with collaborators and investors on portfolio and hobby projects —
              this site is a portfolio, not a commercial pitch.
            </p>
            <a className="signal-contact-link" href="mailto:bhuvansarakam@gmail.com">
              <MailIcon />
              bhuvansarakam@gmail.com
              <ArrowUpRight />
            </a>
            <footer className="signal-footer">
              <span>Bhuvan Chandra</span>
              <span>Denver, CO</span>
              <a href="https://github.com/Bchamp21" target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight />
              </a>
              <a href="https://linkedin.com/in/bhuvansdata" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}
