import { useState } from "react";
import { projects } from "./data/projects";
import { experience, education } from "./data/experience";
import { ArrowDown, ArrowUpRight, MailIcon } from "./components/Icons";
import ProjectRoadmap from "./components/ProjectRoadmap";

const base = import.meta.env.BASE_URL;
const year = new Date().getFullYear();
const skills = [
  "SQL & Python",
  "Databricks",
  "Snowflake",
  "Azure",
  "AWS",
  "GCP",
  "RAG & agents",
  "FastAPI",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="frame nav-inner">
          <a className="brand" href="#top" aria-label="Bhuvan Chandra home">
            <span>
              BC<span className="brand-dot">.</span>
            </span>
            <span className="brand-name">Bhuvan Chandra</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
          </button>
          <nav
            id="primary-nav"
            className={menuOpen ? "is-open" : ""}
            aria-label="Primary navigation"
            onClick={() => setMenuOpen(false)}
          >
            <a href="#work">Selected work</a>
            <a href="#roadmap">Build journal</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a className="nav-contact" href="#contact">
              Let’s connect <ArrowUpRight />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero frame" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> DATA ENGINEERING · APPLIED AI
            </p>
            <h1 id="hero-title">
              Good data.
              <br />
              Useful AI.
              <br />
              <span>Real-world impact.</span>
            </h1>
            <p className="hero-intro">
              I’m Bhuvan Chandra — a data engineer in Denver building reliable
              platforms and exploring how AI can make everyday work better.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowDown />
              </a>
              <a
                className="button secondary"
                href={`${base}resume/Bhuvan-Sarakam-AI-Data-Engineer.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                View resume <ArrowUpRight />
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/Bchamp21"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight />
              </a>
              <a
                href="https://www.linkedin.com/in/bhuvansdata/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>
              <span>Denver, Colorado</span>
            </div>
          </div>
          <figure className="portrait-card">
            <div className="portrait-image">
              <img
                src={`${base}bhuvan-linkedin.png`}
                alt="Bhuvan Chandra Sarakam"
                width="800"
                height="800"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <div>
                <strong>Bhuvan Chandra Sarakam</strong>
                <span>Data platforms → Applied AI</span>
              </div>
              <span className="portrait-mark" aria-hidden="true">
                ↗
              </span>
            </figcaption>
            <div className="portrait-note">
              <span className="status-dot" /> Building & learning in public
            </div>
          </figure>
        </section>
        <div className="skills-strip">
          <div className="frame">
            <span className="eyebrow">MY TOOLKIT</span>
            <div>
              {skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
        <section
          className="section frame"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">Ideas, made tangible.</h2>
            </div>
            <p>
              Applications and data engineering projects across AI, cloud
              platforms, and analytics. Explore the code and the thinking behind
              each build.
            </p>
          </div>
          <div className="work-grid">
            {projects.map((p, i) => (
              <a
                className={`work-card ${i === 0 ? "featured-work" : ""}`}
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
                {p.image && (
                  <div className="work-image">
                    <img
                      src={p.image}
                      alt="Job-Match AI application preview"
                      loading="lazy"
                      width="1200"
                      height="675"
                    />
                  </div>
                )}
                <div className="work-card-content">
                  <div className="card-meta">
                    <span>{p.category}</span>
                    <span>{p.number}</span>
                  </div>
                  <h3>
                    {p.title}
                    <ArrowUpRight />
                  </h3>
                  <p>{p.blurb}</p>
                  <span className="work-caption">{p.metric}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <ProjectRoadmap />
        <section
          className="section frame about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">03 / THE PERSON BEHIND THE BUILDS</p>
            <h2 id="about-title">
              Engineering starts
              <br />
              with understanding
              <br />
              <span className="muted-heading">the problem.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              My background spans data engineering, analytics, and cloud
              platforms across finance, insurance, and manufacturing.
            </p>
            <p>
              Today, I’m connecting that foundation to applied AI: systems that
              work with real data, explain their outputs, and fit the people who
              use them. My project journal follows the full process, from the
              first question to a deployed, evaluated application.
            </p>
            <div className="capability-list">
              <div>
                <span>01</span>
                <strong>Build the foundation</strong>
                <p>Data modeling, lakehouse pipelines, reliable APIs.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Make AI useful</strong>
                <p>Retrieval, structured outputs, bounded tool use.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Prove it works</strong>
                <p>Evaluation, observability, and human feedback.</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="frame section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / EXPERIENCE</p>
                <h2 id="experience-title">A foundation in delivery.</h2>
              </div>
              <div className="resume-links">
                <a
                  href={`${base}resume/Bhuvan-Sarakam-AI-Data-Engineer.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  AI & data resume <ArrowUpRight />
                </a>
                <a
                  href={`${base}resume/Bhuvan-Sarakam-Databricks-Cloud.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Databricks & cloud resume <ArrowUpRight />
                </a>
              </div>
            </div>
            <div className="experience-list">
              {experience.map((job) => (
                <article key={job.org}>
                  <span className="experience-date">{job.when}</span>
                  <div>
                    <h3>{job.title}</h3>
                    <span>{job.org}</span>
                  </div>
                  <p>{job.detail}</p>
                </article>
              ))}
            </div>
            <div className="education">
              <p className="eyebrow">EDUCATION</p>
              {education.map((ed) => (
                <div key={ed.org}>
                  <strong>{ed.org}</strong>
                  <span>
                    {ed.when} · {ed.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="frame">
            <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
            <h2 id="contact-title">
              Have a real problem
              <br />
              worth solving?
            </h2>
            <div className="contact-bottom">
              <p>
                Let’s talk about AI engineering, data platforms, and bringing
                ideas into production.
              </p>
              <a
                className="button primary"
                href="mailto:bhuvansarakam@gmail.com"
              >
                <MailIcon /> Get in touch <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="frame footer">
        <a className="brand" href="#top">
          BC<span className="brand-dot">.</span>
        </a>
        <span>© {year} Bhuvan Chandra · Denver, CO</span>
        <div>
          <a
            href="https://github.com/Bchamp21"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/bhuvansdata/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
