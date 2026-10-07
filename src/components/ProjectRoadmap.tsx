import { useState } from 'react'
import roadmap from '../data/roadmap.json'

export default function ProjectRoadmap() {
  const [filter, setFilter] = useState('All')
  const visible = roadmap.filter(p => filter === 'All' || (filter === 'Flagships' ? p.track.startsWith('Flagship') : p.track.includes('FDE')))
  return <section className="roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
    <div className="signal-page-frame">
      <p className="signal-kicker">The build journal / 2026</p>
      <div className="roadmap-heading"><h2 id="roadmap-title">From a problem<br />to a working system.</h2><p>Ten planned builds exploring how AI fits into real workflows. Each starts with a baseline and ends with evaluation, deployment, and a clear account of what worked.</p></div>
      <div className="roadmap-toolbar"><div role="group" aria-label="Filter project roadmap">{['All', 'Flagships', 'FDE'].map(label => <button key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}</div><a href="https://github.com/Bchamp21/bhuvan-portfolio/blob/master/docs/RESEARCH-AND-ROADMAP.md" target="_blank" rel="noreferrer">Read the research ↗</a></div>
      <p className="roadmap-status">Roadmap · All ten projects are planned. Specifications describe proposed designs and evaluation targets, not completed results.</p>
      <div className="roadmap-grid">{visible.map(p => <article className="roadmap-card" key={p.id}>
        <div className="roadmap-card-top"><span>{p.number} / {p.track.split(' · ')[0]}</span><span className="roadmap-badge">{p.status}</span></div>
        <h3>{p.title}</h3><p>{p.problem}</p>
        <details><summary>Explore the build</summary><h4>The solution</h4><p>{p.solution}</p><h4>Why this approach</h4><p>{p.why}</p><h4>How success is measured</h4><p>{p.evaluation}</p><h4>Deployment</h4><p>{p.deployment}</p><h4>Research</h4><ul>{p.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title} ↗</a></li>)}</ul></details>
        <a className="roadmap-spec" href={p.spec} target="_blank" rel="noreferrer">Build specification & learning plan <span>↗</span></a>
      </article>)}</div>
      <div className="roadmap-learning"><p className="signal-kicker">How I’m approaching the work</p><h3>Understand it. Build it. Measure it.</h3><p>SQL foundations → Python APIs → evaluated AI workflows → Azure, AWS and GCP deployments. Local development and recorded fixtures keep experiments reproducible and costs bounded.</p><a href="https://github.com/Bchamp21/bhuvan-portfolio/blob/master/docs/LOW-COST-LEARNING-PLAN.md" target="_blank" rel="noreferrer">Learning and cloud plan ↗</a></div>
    </div>
  </section>
}
