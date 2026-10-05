/** Decorative sticky stage visual inspired by a system diagram (not a skill galaxy). */
export default function SystemStage({ step }: { step: number }) {
  const labels = ['System', 'Pipeline', 'Platform', 'AI', 'Connect'] as const
  return (
    <div className="signal-stage" aria-hidden="true">
      <div className="signal-canvas">
        <div className={`system-rig step-${step}`}>
          <div className="rig-panel rig-dash">
            <div className="rig-dash-bar" />
            <div className="rig-dash-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="rig-panel rig-nodes">
            <div className="rig-node core" />
            <div className="rig-node a" />
            <div className="rig-node b" />
            <div className="rig-node c" />
            <svg className="rig-links" viewBox="0 0 200 160" preserveAspectRatio="none">
              <line x1="100" y1="80" x2="40" y2="30" />
              <line x1="100" y1="80" x2="160" y2="30" />
              <line x1="100" y1="80" x2="40" y2="130" />
              <line x1="100" y1="80" x2="160" y2="130" />
            </svg>
          </div>
          <div className="rig-panel rig-stack">
            <div className="rig-layer">Bronze</div>
            <div className="rig-layer">Silver</div>
            <div className="rig-layer accent">Gold</div>
          </div>
          <div className="rig-glow" />
        </div>
      </div>
      <div className="signal-stage-index">
        {labels.map((label, i) => (
          <span
            key={label}
            className={
              i === step ? 'is-active' : i < step ? 'is-complete' : ''
            }
          >
            {label}
          </span>
        ))}
      </div>
      <div className="signal-progress-track">
        <div
          className="signal-progress"
          style={{ width: `${(step / (labels.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
