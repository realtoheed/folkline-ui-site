import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const docsNav = [
  { group: 'Getting Started', items: [
    { id: 'installation', title: 'Installation' },
    { id: 'usage', title: 'Usage' },
    { id: 'customizing', title: 'Customizing' },
  ]},
  { group: 'Utilities', items: [
    { id: 'spacing', title: 'Spacing' },
    { id: 'typography', title: 'Typography' },
    { id: 'colors', title: 'Colors' },
    { id: 'flexbox', title: 'Flexbox' },
    { id: 'grid', title: 'Grid' },
    { id: 'sizing', title: 'Sizing' },
    { id: 'borders', title: 'Borders' },
    { id: 'shadows', title: 'Shadows' },
    { id: 'transforms', title: 'Transforms' },
    { id: 'filters', title: 'Filters' },
    { id: 'transitions', title: 'Transitions' },
    { id: 'display', title: 'Display & Overflow' },
    { id: 'position', title: 'Position & Z-Index' },
    { id: 'cursor', title: 'Cursor & Opacity' },
    { id: 'animation', title: 'Animation' },
  ]},
  { group: 'Components', items: [
    { id: 'badge', title: 'Badge' },
    { id: 'spinner', title: 'Spinner' },
    { id: 'skeleton', title: 'Skeleton' },
    { id: 'avatar', title: 'Avatar' },
    { id: 'table', title: 'Table' },
    { id: 'tooltip', title: 'Tooltip' },
    { id: 'modal', title: 'Modal' },
    { id: 'tabs', title: 'Tabs' },
    { id: 'accordion', title: 'Accordion' },
    { id: 'dropdown', title: 'Dropdown' },
    { id: 'toast', title: 'Toast' },
    { id: 'switch', title: 'Switch (Toggle)' },
    { id: 'pagination', title: 'Pagination' },
    { id: 'progress', title: 'Progress' },
    { id: 'breadcrumb', title: 'Breadcrumb' },
    { id: 'stepper', title: 'Stepper' },
    { id: 'timeline', title: 'Timeline' },
    { id: 'menu', title: 'Menu' },
    { id: 'list-group', title: 'List Group' },
    { id: 'stat', title: 'Stat' },
    { id: 'rating', title: 'Rating' },
    { id: 'code-kbd', title: 'Code & Kbd' },
    { id: 'separator', title: 'Separator' },
    { id: 'carousel', title: 'Carousel' },
    { id: 'upload', title: 'Upload Zone' },
    { id: 'faq', title: 'FAQ' },
    { id: 'compare', title: 'Compare' },
    { id: 'hero', title: 'Hero Section' },
  ]},
  { group: 'Accessibility', items: [
    { id: 'a11y-overview', title: 'Overview' },
    { id: 'a11y-aria', title: 'ARIA Patterns' },
    { id: 'a11y-keyboard', title: 'Keyboard Navigation' },
    { id: 'a11y-reduced-motion', title: 'Reduced Motion' },
    { id: 'a11y-contrast', title: 'High Contrast' },
  ]},
]

export default function Sidebar() {
  const [active, setActive] = useState('')
  const [search, setSearch] = useState('')
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) setActive(hash)
  }, [location])

  const allItems = docsNav.flatMap(g => g.items)

  const filtered = search.trim()
    ? docsNav.map(g => ({
        ...g,
        items: g.items.filter(i =>
          i.title.toLowerCase().includes(search.toLowerCase()) ||
          i.id.toLowerCase().includes(search.toLowerCase())
        )
      })).filter(g => g.items.length > 0)
    : docsNav

  return (
    <aside className="sidebar-area" role="navigation" aria-label="Documentation">
      <div className="sidebar-search">
        <span className="sidebar-search-icon">🔍</span>
        <input type="search" placeholder="Filter..." value={search} onChange={e => setSearch(e.target.value)} aria-label="Filter sidebar" />
      </div>
      {filtered.map(group => (
        <div key={group.group} className="sidebar-group">
          <div className="sidebar-group-title">{group.group}</div>
          {group.items.map(item => (
            <a
              key={item.id}
              href={`/folkline-ui-site/#/docs?id=${item.id}`}
              onClick={(e) => { e.preventDefault(); setActive(item.id); window.location.hash = `/docs?id=${item.id}` }}
              className={`sidebar-link${active === item.id ? ' active' : ''}`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.title}
            </a>
          ))}
        </div>
      ))}
    </aside>
  )
}
