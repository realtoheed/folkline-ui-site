import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { templates } from '../data/templates.js'

export default function TemplateView() {
  const { id } = useParams()
  const template = templates.find(t => t.id === id)
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('folkline-saved-templates') || '[]')
    setSaved(savedIds.includes(id))
  }, [id])

  if (!template) {
    return (
      <main className="main-content-area">
        <div className="template-view">
          <h1>Template not found</h1>
          <Link to="/templates" className="back">← Back to templates</Link>
        </div>
      </main>
    )
  }

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(template.html)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { /* ignore */ }
  }

  const handleSave = () => {
    const savedIds = JSON.parse(localStorage.getItem('folkline-saved-templates') || '[]')
    let newSaved
    if (saved) {
      newSaved = savedIds.filter(s => s !== id)
    } else {
      newSaved = [...savedIds, id]
    }
    localStorage.setItem('folkline-saved-templates', JSON.stringify(newSaved))
    setSaved(!saved)
  }

  return (
    <main className="main-content-area">
      <div className="template-view">
        <Link to="/templates" className="back">← Back to templates</Link>
        <div className="header">
          <h1>{template.title}</h1>
          <p>{template.description}</p>
          <div className="tags" style={{ marginTop: 8 }}>
            <span className="badge">{template.category}</span>
            {template.tags.map(tag => <span key={tag} className="badge" style={{background:'var(--muted)'}}>{tag}</span>)}
          </div>
        </div>
        <div className="template-actions">
          <button className="btn-action primary" onClick={handleCopyAll}>
            {copied ? 'Copied!' : 'Copy All'}
          </button>
          <button className="btn-action" onClick={handleSave}>
            {saved ? '★ Saved' : '☆ Save'}
          </button>
        </div>
        <div className="split">
          <div className="preview-area" dangerouslySetInnerHTML={{ __html: template.html }} />
          <div className="code-area">
            <div className="code-header">
              <span>HTML</span>
              <button className="copy-btn" onClick={handleCopyAll}>{copied ? 'Copied!' : 'Copy'}</button>
            </div>
            <pre><code>{template.html}</code></pre>
          </div>
        </div>
      </div>
    </main>
  )
}
