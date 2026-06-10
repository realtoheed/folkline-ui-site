import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') return document.documentElement.classList.contains('dark')
    return false
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    function handleKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true) }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const isActive = (p) => location.pathname.startsWith(p) ? { 'data-active': true } : {}

  const navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/docs', label: 'Docs' },
    { path: '/templates', label: 'Templates' },
    { path: '/editor', label: 'Editor' },
    { path: '/dashboard', label: 'Dashboard' },
  ]

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="header-row">
          <button className="header-toggle" onClick={() => setSidebarOpen(o => !o)} aria-label="Toggle sidebar">☰</button>
          <Link to="/" className="header-logo" aria-label="Folkline UI Home">
            <span className="mark">✦</span>
            Folkline <span className="muted">UI</span>
          </Link>
          <nav className="main-nav" role="navigation" aria-label="Main">
            {navLinks.map(l => (
              <Link key={l.path} to={l.path} {...isActive(l.path)}>{l.label}</Link>
            ))}
          </nav>
          <div className="header-spacer" />
          <div className="header-actions">
            <button className="search-btn" onClick={() => setSearchOpen(true)} aria-label="Search docs">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 12l-2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span>Search docs...</span>
              <kbd>⌘K</kbd>
            </button>
            <div className="header-sep" />
            <button className="icon-btn" onClick={() => setDark(d => !d)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
              {dark ? '☀️' : '🌙'}
            </button>
            <a href="https://github.com/realtoheed/folkline-ui" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </header>
  )
}

function SearchModal({ onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    import('../data/searchIndex.js').then(m => {
      if (!query.trim()) { setResults([]); return }
      setResults(m.searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords?.some(k => k.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 10))
    })
  }, [query])

  return (
    <div style={{position:'fixed',inset:0,zIndex:9999,display:'flex',alignItems:'flex-start',justifyContent:'center',paddingTop:'15vh',background:'rgba(0,0,0,.4)'}} onClick={onClose} role="dialog" aria-modal="true" aria-label="Search">
      <div style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:'14px',width:'600px',maxWidth:'90vw',maxHeight:'60vh',display:'flex',flexDirection:'column',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,.15)'}} onClick={e => e.stopPropagation()}>
        <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'12px 16px',borderBottom:'1px solid var(--border)'}}>
          <svg width="16" height="16" viewBox="0 0 15 15" fill="none"><path d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 12l-2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <input autoFocus style={{flex:1,border:'none',outline:'none',fontSize:'1rem',background:'transparent',fontFamily:'inherit',color:'inherit'}} placeholder="Search documentation..." value={query} onChange={e => setQuery(e.target.value)} aria-label="Search input" />
          <kbd style={{fontSize:'.6875rem',padding:'2px 6px',background:'var(--muted)',borderRadius:'4px',border:'1px solid var(--border)'}}>ESC</kbd>
        </div>
        <div style={{overflow:'auto',flex:1}}>
          {results.length === 0 && query.trim() && <div style={{padding:'20px',textAlign:'center',color:'var(--muted-foreground)',fontSize:'.875rem'}}>No results found</div>}
          {results.map((r,i) => (
            <a key={i} href={`#${r.id}`} style={{display:'block',padding:'10px 16px',borderBottom:'1px solid var(--border)',cursor:'pointer',transition:'background .1s'}} onClick={onClose} onMouseEnter={e=>e.currentTarget.style.background='var(--accent)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              <div style={{fontSize:'.875rem',fontWeight:500}}>{r.title}</div>
              {r.description && <div style={{fontSize:'.75rem',color:'var(--muted-foreground)',marginTop:2}}>{r.description}</div>}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
