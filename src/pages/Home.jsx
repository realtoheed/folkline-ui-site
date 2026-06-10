import { Link } from 'react-router-dom'

const features = [
  { icon: '⚡', title: 'Zero Build Step', desc: 'Drop one CDN link and start building. No webpack, no Vite, no configuration needed.' },
  { icon: '🎨', title: '2,734 Utility Classes', desc: 'Spacing, typography, colors, flexbox, grid, shadows, transforms, and more at your fingertips.' },
  { icon: '🧩', title: '30+ Components', desc: 'Modal, tabs, accordion, toast, badge, skeleton, tooltip, and many more ready-to-use components.' },
  { icon: '♿', title: 'Accessibility First', desc: 'All components follow WCAG patterns with proper ARIA, keyboard navigation, and focus management.' },
  { icon: '🌓', title: 'Dark Mode Ready', desc: 'Built-in dark mode support with CSS variables. Toggle with a single class.' },
  { icon: '📦', title: '3.5 KB Gzipped', desc: 'Incredibly lightweight. Your users will thank you for the fast load times.' },
  { icon: '🔄', title: 'Framework Agnostic', desc: 'Works with React, Vue, Svelte, Alpine, or plain HTML. No framework lock-in.' },
  { icon: '🎯', title: 'Consistent Design', desc: 'OKLCH color system with harmonious scales. Every class is designed to work together.' },
]

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-inner">
          <a href="https://github.com/realtoheed/folkline-ui" target="_blank" rel="noopener noreferrer" className="hero-badge">
            <span>✦</span> Folkline UI v3 — 2,734 utility classes
          </a>
          <h1 className="hero-h1">
            Build with <span className="grad">Zero CSS</span>
          </h1>
          <p className="hero-desc">
            A utility-first CSS framework with 2,734 utility classes and 30+ accessible components.
            Drop in one CDN link and start building beautiful interfaces immediately.
          </p>
          <div className="hero-actions">
            <Link to="/docs" className="btn-lg btn-solid">
              Get Started <span>→</span>
            </Link>
            <Link to="/templates" className="btn-lg btn-ghost-lg">
              Browse Templates
            </Link>
            <a href="https://github.com/realtoheed/folkline-ui" target="_blank" rel="noopener noreferrer" className="btn-lg btn-ghost-lg">
              GitHub <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="page-content">
        <div className="stats-row">
          <div className="stat-item"><div className="stat-num">2,734</div><div className="stat-label">Utility Classes</div></div>
          <div className="stat-item"><div className="stat-num">30+</div><div className="stat-label">Components</div></div>
          <div className="stat-item"><div className="stat-num">3.5 KB</div><div className="stat-label">Gzipped</div></div>
          <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">Accessible</div></div>
        </div>

        <div className="feature-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <span className="icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="install-section">
          <h2>Get started in seconds</h2>
          <p className="sub">Add one link to your HTML and start building</p>
          <div className="code-block-dark code-block-long">
            <button className="copy-top" onClick={() => navigator.clipboard.writeText('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@realtoheed/folkline-ui@3/dist/folkline.min.css" />')}>Copy</button>
            &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@realtoheed/folkline-ui@3/dist/folkline.min.css&quot; /&gt;
          </div>
          <div className="hero-actions" style={{marginTop:24}}>
            <Link to="/docs" className="btn-lg btn-solid">Read the docs →</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
