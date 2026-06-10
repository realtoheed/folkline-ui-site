import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import Docs from './pages/Docs.jsx'
import Templates from './pages/Templates.jsx'
import TemplateView from './pages/TemplateView.jsx'
import Editor from './pages/Editor.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  return (
    <div data-slot="layout">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <div className="app-main" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<WithSidebar><Docs /></WithSidebar>} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/template/:id" element={<TemplateView />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

function WithSidebar({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - var(--header-h) - var(--footer-h))' }}>
      <Sidebar />
      <main className="main-content-area has-sidebar">{children}</main>
    </div>
  )
}
