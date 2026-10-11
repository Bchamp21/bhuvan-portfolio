import { useState } from "react";
import roadmap from "../data/roadmap.json";
import { ArrowUpRight } from "./Icons";

const filters = ["All projects", "Flagships", "AI engineering", "FDE"] as const;
export default function ProjectRoadmap() {
  const [filter, setFilter] = useState<string>("All projects");
  const [query, setQuery] = useState("");
  const visible = roadmap.filter((p) => {
    const matchesTrack =
      filter === "All projects" ||
      (filter === "Flagships"
        ? p.track.startsWith("Flagship")
        : p.track.toLowerCase().includes(filter.toLowerCase()));
    return (
      matchesTrack &&
      `${p.title} ${p.problem} ${p.stack}`
        .toLowerCase()
        .includes(query.trim().toLowerCase())
    );
  });
  return (
    <section
      className="roadmap-section section"
      id="roadmap"
      aria-labelledby="roadmap-title"
    >
      <div className="frame">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / THE BUILD JOURNAL</p>
            <h2 id="roadmap-title">
              From a problem
              <br />
              to a working system.
            </h2>
          </div>
          <p>
            Ten focused projects. A practical path through AI engineering and
            forward deployed delivery — with the decisions, experiments, and
            lessons documented along the way.
          </p>
        </div>
        <div className="roadmap-overview">
          <div>
            <strong>10</strong>
            <span>Planned builds</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Flagship projects</span>
          </div>
          <div>
            <strong>01 → 10</strong>
            <span>A deliberate learning path</span>
          </div>
          <a
            href="https://github.com/Bchamp21/bhuvan-portfolio/blob/master/docs/RESEARCH-AND-ROADMAP.md"
            target="_blank"
            rel="noreferrer"
          >
            Explore the research <ArrowUpRight />
          </a>
        </div>
        <div className="roadmap-toolbar">
          <div
            className="filter-group"
            role="group"
            aria-label="Filter project roadmap"
          >
            {filters.map((label) => (
              <button
                key={label}
                aria-pressed={filter === label}
                onClick={() => setFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <label className="search-box">
            <span className="sr-only">Search projects</span>
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or technologies"
            />
          </label>
        </div>
        <div className="roadmap-note">
          <p>
            <span className="status-dot" /> Planned projects · Designs and
            evaluation targets are documented; implementation is ahead.
          </p>
          <span role="status" aria-live="polite">
            {visible.length} of {roadmap.length} projects
          </span>
        </div>
        <div className="roadmap-grid">
          {visible.map((p) => (
            <article
              className={`roadmap-card ${p.track.startsWith("Flagship") ? "is-flagship" : ""}`}
              key={p.id}
            >
              <div className="card-meta">
                <span className="project-index">{p.number}</span>
                <span>{p.track.split(" · ")[0]}</span>
                <span className="badge">{p.status}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="project-problem">{p.problem}</p>
              <div className="project-track">{p.track.split(" · ")[1]}</div>
              <details>
                <summary>
                  Inside the project <span aria-hidden="true">+</span>
                </summary>
                <div className="project-details">
                  <h4>What I’ll build</h4>
                  <p>{p.solution}</p>
                  <h4>Why this approach</h4>
                  <p>{p.why}</p>
                  <h4>How I’ll measure success</h4>
                  <p>{p.evaluation}</p>
                  <h4>Deployment plan</h4>
                  <p>{p.deployment}</p>
                  <h4>Research behind the idea</h4>
                  <ul>
                    {p.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.title} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
              <a
                className="roadmap-spec"
                href={p.spec}
                target="_blank"
                rel="noreferrer"
              >
                Read the build plan <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <div className="empty-state">
            <h3>No projects match that search.</h3>
            <p>Try a technology such as Python, or browse all ten builds.</p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("All projects");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
        <aside className="learning-note">
          <div>
            <p className="eyebrow">LEARNING IN PUBLIC</p>
            <h3>Understand it. Build it. Measure it.</h3>
            <p>
              SQL → Python APIs → evaluated AI workflows → cloud deployment.
              <br />A local-first approach, with focused labs across Azure, AWS,
              and GCP.
            </p>
          </div>
          <a
            href="https://github.com/Bchamp21/bhuvan-portfolio/blob/master/docs/LOW-COST-LEARNING-PLAN.md"
            target="_blank"
            rel="noreferrer"
          >
            The learning plan <ArrowUpRight />
          </a>
        </aside>
      </div>
    </section>
  );
}
