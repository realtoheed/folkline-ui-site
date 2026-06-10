import { useState, useMemo } from 'react'
import CodeBlock from '../components/CodeBlock.jsx'

const elementOptions = [
  { id: 'button', label: 'Button', base: '<button class="bg-primary text-white px-4 py-2 rounded-lg fw-600">Button</button>' },
  { id: 'card', label: 'Card', base: '<div class="p-4 border rounded-lg shadow-sm"><h3 class="fw-600 mb-2">Card Title</h3><p class="text-muted fs-sm">Card content here.</p></div>' },
  { id: 'badge', label: 'Badge', base: '<span class="badge badge-primary">Badge</span>' },
  { id: 'alert', label: 'Alert', base: '<div class="p-3 bg-muted border rounded-lg flex items-center gap-2"><span>ℹ️</span> This is an alert message.</div>' },
  { id: 'input', label: 'Input', base: '<input type="text" placeholder="Enter text..." class="w-full border px-3 py-2 rounded-lg" />' },
  { id: 'nav', label: 'Nav Bar', base: '<nav class="flex items-center justify-between p-4 border-b"><div class="fw-700">Brand</div><div class="flex gap-4"><a href="#" class="text-muted fs-sm">Link</a><a href="#" class="text-muted fs-sm">Link</a></div></nav>' },
]

const themeColors = ['primary', 'secondary', 'destructive', 'muted']

export default function Editor() {
  const [element, setElement] = useState(elementOptions[0])
  const [color, setColor] = useState('primary')
  const [radius, setRadius] = useState('lg')
  const [shadow, setShadow] = useState('none')
  const [paddingX, setPaddingX] = useState('4')
  const [paddingY, setPaddingY] = useState('2')

  const generatedCode = useMemo(() => {
    let code = element.base
    if (color !== 'primary') {
      code = code.replace(/bg-primary/g, `bg-${color}`)
    }
    if (radius !== 'lg') {
      code = radius === 'none' ? code.replace(/rounded-lg/g, '') : code.replace(/rounded-lg/g, `rounded-${radius}`)
    }
    if (shadow !== 'none') {
      code = code.replace(/shadow-sm/g, `shadow-${shadow}`)
    }
    return code
  }, [element, color, radius, shadow, paddingX, paddingY])

  return (
    <main className="main-content-area">
      <div className="editor-header">
        <h1>Visual Editor</h1>
        <p>Customize Folkline UI components visually and copy the generated code.</p>
      </div>
      <div className="editor-layout">
        <div>
          <div className="editor-controls">
            <div className="editor-control-group">
              <label>Element</label>
              <select value={element.id} onChange={e => setElement(elementOptions.find(o => o.id === e.target.value))}>
                {elementOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
            </div>
            <div className="editor-control-group">
              <label>Theme Color</label>
              <select value={color} onChange={e => setColor(e.target.value)}>
                {themeColors.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="editor-control-group">
              <label>Border Radius</label>
              <select value={radius} onChange={e => setRadius(e.target.value)}>
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
              </select>
            </div>
            <div className="editor-control-group">
              <label>Shadow</label>
              <select value={shadow} onChange={e => setShadow(e.target.value)}>
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
          </div>
          <div className="editor-code">
            <CodeBlock code={generatedCode} />
          </div>
        </div>
        <div>
          <div className="editor-preview" dangerouslySetInnerHTML={{ __html: generatedCode }} />
        </div>
      </div>
    </main>
  )
}
