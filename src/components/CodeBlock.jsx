import { useState } from 'react'

export default function CodeBlock({ code, lang = 'html', label }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { /* fallback */ }
  }

  return (
    <div className="code-wrap" role="region" aria-label={label || 'Code example'}>
      <div className="code-header">
        <span>{lang}</span>
        <button className="copy-btn" onClick={handleCopy} aria-label="Copy code to clipboard">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  )
}
