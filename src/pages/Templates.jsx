import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { categories, templates } from '../data/templates.js'

export default function Templates() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = templates
    if (activeCat !== 'all') result = result.filter(t => t.category === activeCat)
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      )
    }
    return result
  }, [activeCat, search])

  const total = templates.length

  return (
    <main className="main-content-area">
      <div className="templates-header">
        <h1>Templates</h1>
        <p>Browse {total} pre-built templates using Folkline UI classes. Click to view the source code and live preview.</p>
      </div>
      <div className="template-search">
        <span className="search-icon">🔍</span>
        <input
          type="search"
          placeholder="Search templates..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search templates"
        />
      </div>
      <div className="template-filters">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={activeCat === cat.id ? 'active' : ''}
            onClick={() => setActiveCat(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="template-grid">
        {filtered.length === 0 && (
          <p style={{color:'var(--muted-foreground)',gridColumn:'1/-1',textAlign:'center',padding:40}}>No templates found matching your search.</p>
        )}
        {filtered.map(t => (
          <Link key={t.id} to={`/template/${t.id}`} className="template-card">
            <div className="preview">
              <div style={{width:'100%',height:'100%',overflow:'hidden',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color:'var(--muted-foreground)'}}>
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M3 9h18" /><path d="M9 21V9" />
                </svg>
                <div style={{position:'absolute',bottom:8,right:8,fontSize:'.625rem',color:'var(--muted-foreground)'}}>{t.category}</div>
              </div>
            </div>
            <div className="info">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <div className="tags">
                {t.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
