import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock.jsx'

const docs = {
  installation: {
    title: 'Installation',
    desc: 'Install Folkline UI via CDN or npm.',
    sections: [
      {
        title: 'CDN (Recommended)',
        content: 'Add the following link tag to your HTML head:',
        code: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@realtoheed/folkline-ui@3/dist/folkline.min.css" />'
      },
      {
        title: 'npm',
        content: 'Install via npm for use with build tools:',
        code: 'npm install @realtoheed/folkline-ui\n\n// In your JS/SCSS:\nimport "@realtoheed/folkline-ui/dist/folkline.min.css";'
      },
    ]
  },
  usage: {
    title: 'Usage',
    desc: 'Folkline UI is a utility-first CSS framework. Apply classes directly in your HTML to style elements.',
    sections: [
      {
        title: 'Basic Example',
        content: 'Combine utility classes to build layouts:',
        code: '<div class="flex items-center gap-3 p-4 rounded-lg shadow-sm border">\n  <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white fw-700 fs-sm">JD</div>\n  <div>\n    <div class="fw-600">John Doe</div>\n    <div class="text-muted fs-sm">john@example.com</div>\n  </div>\n</div>',
        preview: true,
        previewContent: (
          <div className="flex items-center gap-3 p-4 rounded-lg shadow-sm border" style={{ background: 'var(--card)', width: '100%' }}>
            <div className="w-10 h-10" style={{ background: 'var(--primary)', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '.8125rem' }}>JD</div>
            <div><div style={{ fontWeight: 600 }}>John Doe</div><div style={{ color: 'var(--muted-foreground)', fontSize: '.8125rem' }}>john@example.com</div></div>
          </div>
        )
      },
    ]
  },
  customizing: {
    title: 'Customizing',
    desc: 'Override CSS variables to customize the theme.',
    sections: [
      {
        title: 'CSS Variables',
        content: 'All design tokens are exposed as CSS variables. Override them in your stylesheet:',
        code: ':root {\n  --primary: oklch(0.6 0.25 200);\n  --radius: 0.5rem;\n  --font-sans: "Inter", sans-serif;\n}'
      },
    ]
  },
  spacing: {
    title: 'Spacing',
    desc: 'Control margin, padding, and gap with utility classes.',
    sections: [
      {
        title: 'Padding',
        content: 'Use p-{size} for padding on all sides, pt-, pr-, pb-, pl- for individual sides:',
        code: '<div class="p-4">Padding all sides (16px)</div>\n<div class="pt-2 pb-2">Vertical padding only</div>\n<div class="px-3">Horizontal padding</div>'
      },
      {
        title: 'Margin',
        content: 'Use m-{size}, mt-, mr-, mb-, ml- for margin:',
        code: '<div class="mb-3">Bottom margin</div>\n<div class="mx-auto">Centered horizontally</div>'
      },
      {
        title: 'Gap',
        content: 'Use gap-{size} on flex/grid containers:',
        code: '<div class="flex gap-2">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>'
      },
      { title: 'Available Sizes', content: 'Sizes follow a consistent scale: 0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10 (in rem units).' }
    ]
  },
  typography: {
    title: 'Typography',
    desc: 'Font size, weight, alignment, and decoration utilities.',
    sections: [
      {
        title: 'Font Size',
        content: 'Use fs-{size} for font sizes:',
        code: '<p class="fs-xs">Extra small (.75rem)</p>\n<p class="fs-sm">Small (.875rem)</p>\n<p class="fs-base">Base (1rem)</p>\n<p class="fs-lg">Large (1.125rem)</p>\n<p class="fs-xl">XL (1.25rem)</p>\n<h1 class="fs-2xl">2XL (1.5rem)</h1>\n<h1 class="fs-3xl">3XL (1.875rem)</h1>'
      },
      {
        title: 'Font Weight',
        content: 'Use fw-{weight}:',
        code: '<p class="fw-400">Regular (400)</p>\n<p class="fw-500">Medium (500)</p>\n<p class="fw-600">Semi-bold (600)</p>\n<p class="fw-700">Bold (700)</p>'
      },
      {
        title: 'Text Alignment',
        content: 'Use text-left, text-center, text-right, text-justify.',
        code: '<p class="text-center">Centered text</p>\n<p class="text-right">Right-aligned text</p>'
      },
      { title: 'Text Decoration', content: 'Use text-underline, text-line-through, text-no-underline.' },
    ]
  },
  colors: {
    title: 'Colors',
    desc: 'Background and text color utilities using the OKLCH color system.',
    sections: [
      {
        title: 'Background Colors',
        content: 'Use bg-{color} for backgrounds. Available: bg-primary, bg-secondary, bg-muted, bg-accent, bg-destructive, bg-card, bg-background, bg-transparent.',
        code: '<div class="bg-primary text-white p-3 rounded">Primary background</div>\n<div class="bg-muted p-3 rounded">Muted background</div>'
      },
      {
        title: 'Text Colors',
        content: 'Use text-{color} for text colors. Available: text-primary, text-muted, text-destructive, text-foreground, text-background.',
        code: '<p class="text-primary">Primary text</p>\n<p class="text-muted">Muted text</p>'
      },
    ]
  },
  flexbox: {
    title: 'Flexbox',
    desc: 'Flexbox utility classes for layout.',
    sections: [
      {
        title: 'Display Flex',
        content: 'Use flex to create a flex container.',
        code: '<div class="flex">\n  <div class="flex-1">Flex 1</div>\n  <div class="flex-1">Flex 1</div>\n</div>'
      },
      {
        title: 'Alignment',
        content: 'Use items-{start|center|end|stretch|baseline} and justify-{start|center|end|between|around|evenly}:',
        code: '<div class="flex items-center justify-between">\n  <div>Left</div>\n  <div>Center</div>\n  <div>Right</div>\n</div>'
      },
      { title: 'Direction & Wrap', content: 'Use flex-col, flex-row, flex-wrap, flex-nowrap, flex-wrap-reverse.' },
      { title: 'Flex Properties', content: 'Use flex-1, flex-auto, flex-none, flex-initial, gap-{size}.' },
    ]
  },
  grid: {
    title: 'Grid',
    desc: 'CSS Grid layout utilities.',
    sections: [
      {
        title: 'Grid Container',
        content: 'Use grid, inline-grid to create grid containers.',
        code: '<div class="grid grid-cols-3 gap-3">\n  <div>Column 1</div>\n  <div>Column 2</div>\n  <div>Column 3</div>\n</div>'
      },
      { title: 'Grid Columns', content: 'Use grid-cols-{1|2|3|4|5|6|7|8|9|10|11|12|none}.' },
      { title: 'Grid Rows', content: 'Use grid-rows-{1|2|3|4|5|6|none}.' },
    ]
  },
  sizing: {
    title: 'Sizing',
    desc: 'Width and height utility classes.',
    sections: [
      { title: 'Width', content: 'Use w-{size} for fixed widths, w-{1/2|1/3|2/3|1/4|3/4|full|screen|auto|fit|min|max}.', code: '<div class="w-full">Full width</div>\n<div class="w-1/2">Half width</div>\n<div class="w-48">192px width</div>' },
      { title: 'Height', content: 'Use h-{size} and h-{full|screen|auto|fit|min|max}.', code: '<div class="h-12">48px height</div>\n<div class="h-screen">100vh height</div>' },
      { title: 'Min/Max', content: 'Use min-w-{0|full|screen|min|max|fit}, max-w-{xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full}, min-h-{0|full|screen}, max-h-{full|screen}.' },
    ]
  },
  borders: {
    title: 'Borders',
    desc: 'Border, border-radius, and outline utilities.',
    sections: [
      { title: 'Border', content: 'Use border, border-{2|4|8|0}, border-t-, border-r-, border-b-, border-l-, border-x-, border-y-.', code: '<div class="border p-4 rounded">Default border</div>\n<div class="border-2 border-primary p-4 rounded">Primary border</div>' },
      { title: 'Border Radius', content: 'Use rounded-{none|sm|md|lg|xl|2xl|3xl|full}. Also rounded-t-, rounded-r-, rounded-b-, rounded-l-, rounded-tr-, rounded-tl-, rounded-br-, rounded-bl-.', code: '<div class="rounded-lg p-4 border">Rounded large</div>\n<div class="rounded-full w-12 h-12 border flex items-center justify-center">Round</div>' },
      { title: 'Outline', content: 'Use outline, outline-{2|4}, outline-offset-{value}.' },
    ]
  },
  shadows: {
    title: 'Shadows',
    desc: 'Box shadow utility classes.',
    sections: [
      {
        title: 'Shadow Sizes',
        content: 'Use shadow-{none|sm|md|lg|xl|2xl|inner}:',
        code: '<div class="shadow-sm p-4 rounded">Small shadow</div>\n<div class="shadow-lg p-4 rounded">Large shadow</div>\n<div class="shadow-xl p-4 rounded">Extra large shadow</div>'
      },
    ]
  },
  transforms: {
    title: 'Transforms',
    desc: 'Scale, rotate, translate, and skew utilities.',
    sections: [
      { title: 'Scale', content: 'Use scale-{0|50|75|90|95|100|105|110|125|150} and scale-x-, scale-y- variants.', code: '<button class="scale-105 hover:scale-110 transition">Scale me</button>' },
      { title: 'Rotate', content: 'Use rotate-{0|45|90|180|270} or negative rotate-n{45|90|180|270}.' },
      { title: 'Translate', content: 'Use translate-x- and translate-y- with spacing values.' },
    ]
  },
  filters: {
    title: 'Filters',
    desc: 'CSS filter utilities for blur, brightness, contrast, and more.',
    sections: [
      { title: 'Blur', content: 'Use blur-{none|sm|md|lg|xl|2xl|3xl}.' },
      { title: 'Brightness', content: 'Use brightness-{0|50|75|90|95|100|105|110|125|150|200}.' },
      { title: 'Contrast & Others', content: 'Use contrast-{0|50|75|100|125|150|200}, grayscale, hue-rotate, invert, saturate, sepia, drop-shadow.' },
    ]
  },
  transitions: {
    title: 'Transitions',
    desc: 'Transition utility classes for smooth animations.',
    sections: [
      { title: 'Transition', content: 'Use transition-{none|all|colors|opacity|shadow|transform} with duration-{fast|normal|slow|slower} and ease-{linear|in|out|in-out}.' },
    ]
  },
  display: {
    title: 'Display & Overflow',
    desc: 'Display and overflow utility classes.',
    sections: [
      { title: 'Display', content: 'Use d-{none|inline|inline-block|block|table|table-cell|table-row|flex|inline-flex|grid|inline-grid}.' },
      { title: 'Overflow', content: 'Use overflow-{auto|hidden|visible|scroll|x-auto|y-auto|x-hidden|y-hidden|...}. Also overflow-clip, overflow-visible.' },
    ]
  },
  position: {
    title: 'Position & Z-Index',
    desc: 'Position and z-index utilities.',
    sections: [
      { title: 'Position', content: 'Use pos-{static|fixed|absolute|relative|sticky}.' },
      { title: 'Top/Right/Bottom/Left', content: 'Use top-{0|1|2|3|4|5|6|8|10|12|16|20|24|auto|full|1/2|1/3|2/3}, same for right-, bottom-, left-.' },
      { title: 'Z-Index', content: 'Use z-{0|10|20|30|40|50|auto}.' },
    ]
  },
  cursor: {
    title: 'Cursor & Opacity',
    desc: 'Cursor style and opacity utilities.',
    sections: [
      { title: 'Cursor', content: 'Use cursor-{auto|default|pointer|wait|text|move|not-allowed|grab|grabbing|zoom-in|zoom-out}.' },
      { title: 'Opacity', content: 'Use opacity-{0|5|10|15|20|25|30|40|50|60|70|75|80|85|90|95|100}.' },
    ]
  },
  animation: {
    title: 'Animation',
    desc: 'Animation utility classes.',
    sections: [
      { title: 'Animations', content: 'Use animate-{none|spin|ping|pulse|bounce|fade-in|slide-up|slide-down|slide-left|slide-right|scale-in|float}.' },
      { title: 'Animation Properties', content: 'Combine with transition classes for custom animations.' },
    ]
  },

  /* COMPONENTS */
  badge: {
    title: 'Badge',
    desc: 'Inline labels for status, counts, or categories.',
    sections: [
      {
        title: 'Example',
        content: 'Use the .badge, .badge-primary, .badge-secondary, .badge-destructive, .badge-outline classes:',
        code: '<span class="badge">Default</span>\n<span class="badge badge-primary">Primary</span>\n<span class="badge badge-secondary">Secondary</span>\n<span class="badge badge-destructive">Destructive</span>\n<span class="badge badge-outline">Outline</span>',
        preview: true,
        previewContent: (
          <div className="flex gap-2 flex-wrap items-center">
            <span className="badge">Default</span>
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-secondary">Secondary</span>
            <span className="badge badge-destructive">Destructive</span>
            <span className="badge badge-outline">Outline</span>
          </div>
        )
      },
    ]
  },
  spinner: {
    title: 'Spinner',
    desc: 'Loading spinner indicator.',
    sections: [
      {
        title: 'Example',
        content: 'Use the .spinner class:',
        code: '<div class="spinner"></div>\n<div class="spinner spinner-sm"></div>\n<div class="spinner spinner-primary"></div>',
        preview: true,
        previewContent: (
          <div className="flex gap-4 items-center">
            <div className="spinner" />
            <div className="spinner spinner-sm" />
            <div className="spinner spinner-primary" />
          </div>
        )
      },
    ]
  },
  skeleton: {
    title: 'Skeleton',
    desc: 'Content placeholder loading animation.',
    sections: [
      {
        title: 'Example',
        content: 'Use the .skeleton class:',
        code: '<div class="skeleton w-12 h-12 rounded-full"></div>\n<div class="skeleton h-4 w-3/4 mt-2"></div>\n<div class="skeleton h-4 w-1/2 mt-2"></div>',
        preview: true,
        previewContent: (
          <div className="flex items-center gap-3">
            <div className="skeleton w-12 h-12 rounded-full" />
            <div><div className="skeleton h-4 w-40" /><div className="skeleton h-3 w-24 mt-2" /></div>
          </div>
        )
      },
    ]
  },
  avatar: {
    title: 'Avatar',
    desc: 'User profile images and initials.',
    sections: [
      {
        title: 'Example',
        content: 'Use .avatar with .avatar-sm, .avatar-lg variants:',
        code: '<div class="avatar avatar-sm">JD</div>\n<div class="avatar">JD</div>\n<div class="avatar avatar-lg">JD</div>\n<img class="avatar avatar-lg" src="https://i.pravatar.cc/100" alt="User" />',
        preview: true,
        previewContent: (
          <div className="flex gap-3 items-center">
            <div className="avatar avatar-sm">JD</div>
            <div className="avatar">JD</div>
            <div className="avatar avatar-lg">JD</div>
          </div>
        )
      },
    ]
  },
  table: {
    title: 'Table',
    desc: 'Styled table with responsive options.',
    sections: [
      {
        title: 'Example',
        content: 'Use .table and .table-striped classes:',
        code: '<table class="table">\n  <thead><tr><th>Name</th><th>Role</th></tr></thead>\n  <tbody>\n    <tr><td>John</td><td>Admin</td></tr>\n    <tr><td>Jane</td><td>Editor</td></tr>\n  </tbody>\n</table>',
        preview: true,
        previewContent: (
          <table className="table" style={{ width: '100%' }}>
            <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>John Doe</td><td>Admin</td><td><span className="badge badge-primary">Active</span></td></tr>
              <tr><td>Jane Smith</td><td>Editor</td><td><span className="badge">Inactive</span></td></tr>
            </tbody>
          </table>
        )
      },
    ]
  },
  tooltip: {
    title: 'Tooltip',
    desc: 'Hover tooltips for additional information.',
    sections: [
      {
        title: 'Example',
        content: 'Use data-tooltip attribute:',
        code: '<button data-tooltip="This is a tooltip" class="p-2 border rounded">Hover me</button>',
        preview: true,
        previewContent: (
          <div className="flex gap-4 items-center">
            <button data-tooltip="Top tooltip" className="p-2 border rounded">Top</button>
            <button data-tooltip-right="Right tooltip" className="p-2 border rounded">Right</button>
            <button data-tooltip-bottom="Bottom tooltip" className="p-2 border rounded">Bottom</button>
            <button data-tooltip-left="Left tooltip" className="p-2 border rounded">Left</button>
          </div>
        )
      },
    ]
  },
  modal: {
    title: 'Modal',
    desc: 'Dialog overlay for focused content.',
    sections: [
      {
        title: 'Example',
        content: 'Use the .modal with .modal-open class:',
        code: '<div class="modal modal-open" role="dialog" aria-modal="true" aria-label="Modal dialog">\n  <div class="modal-overlay"></div>\n  <div class="modal-content">\n    <div class="modal-header"><h2>Modal Title</h2></div>\n    <div class="modal-body"><p>Modal content goes here.</p></div>\n    <div class="modal-footer"><button class="btn">Close</button></div>\n  </div>\n</div>',
        preview: true,
        previewContent: (
          <button className="btn-lg btn-solid" onClick={() => alert('Modal would open. Check the source code for the markup.')}>
            Open Modal (demo)
          </button>
        )
      },
    ]
  },
  tabs: {
    title: 'Tabs',
    desc: 'Tabbed content navigation.',
    sections: [
      {
        title: 'Example',
        content: 'Use .tabs and .tab-panel:',
        code: '<div class="tabs">\n  <button class="tab active" role="tab" aria-selected="true">Tab 1</button>\n  <button class="tab" role="tab" aria-selected="false">Tab 2</button>\n  <button class="tab" role="tab" aria-selected="false">Tab 3</button>\n</div>\n<div class="tab-panel active" role="tabpanel">Content for Tab 1</div>',
        preview: true,
        previewContent: (
          <div style={{ width: '100%' }}>
            <div className="tabs">
              <button className="tab active" role="tab" aria-selected="true">Tab 1</button>
              <button className="tab" role="tab" aria-selected="false">Tab 2</button>
              <button className="tab" role="tab" aria-selected="false">Tab 3</button>
            </div>
            <div className="tab-panel active mt-3" role="tabpanel">Content for Tab 1 — This is an accessible tab panel.</div>
          </div>
        )
      },
    ]
  },
  accordion: {
    title: 'Accordion',
    desc: 'Collapsible content sections.',
    sections: [
      {
        title: 'Example',
        content: 'Use .accordion and .accordion-item:',
        code: '<div class="accordion">\n  <div class="accordion-item">\n    <button class="accordion-header" aria-expanded="true">Section 1</button>\n    <div class="accordion-body" aria-hidden="false">Content for section 1.</div>\n  </div>\n  <div class="accordion-item">\n    <button class="accordion-header" aria-expanded="false">Section 2</button>\n    <div class="accordion-body" aria-hidden="true">Content for section 2.</div>\n  </div>\n</div>',
        preview: true,
        previewContent: (
          <div className="accordion" style={{ width: '100%' }}>
            <div className="accordion-item">
              <button className="accordion-header" aria-expanded="true">Section 1</button>
              <div className="accordion-body" aria-hidden="false">This is the content for section 1. It is currently expanded.</div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header" aria-expanded="false">Section 2</button>
              <div className="accordion-body" aria-hidden="true">This is the content for section 2.</div>
            </div>
          </div>
        )
      },
    ]
  },
  dropdown: {
    title: 'Dropdown',
    desc: 'Revealable menu from a trigger element.',
    sections: [
      {
        title: 'Example',
        content: 'Use .dropdown with .dropdown-menu:',
        code: '<div class="dropdown">\n  <button class="dropdown-trigger" aria-haspopup="true" aria-expanded="false">Options</button>\n  <div class="dropdown-menu" role="menu">\n    <a href="#" role="menuitem">Edit</a>\n    <a href="#" role="menuitem">Duplicate</a>\n    <a href="#" role="menuitem">Delete</a>\n  </div>\n</div>',
        preview: true,
        previewContent: (
          <div className="dropdown">
            <button className="dropdown-trigger btn-lg btn-ghost-lg" aria-haspopup="true" aria-expanded="false">Options ▾</button>
            <div className="dropdown-menu" role="menu" style={{ display: 'block', position: 'static' }}>
              <a href="#" role="menuitem" onClick={e => e.preventDefault()}>Edit</a>
              <a href="#" role="menuitem" onClick={e => e.preventDefault()}>Duplicate</a>
              <a href="#" role="menuitem" onClick={e => e.preventDefault()}>Delete</a>
            </div>
          </div>
        )
      },
    ]
  },
  toast: {
    title: 'Toast',
    desc: 'Brief notification messages.',
    sections: [
      {
        title: 'Example',
        content: 'Use .toast class:',
        code: '<div class="toast" role="alert">\n  <span>Action completed successfully!</span>\n  <button class="toast-close" aria-label="Close">×</button>\n</div>\n<div class="toast toast-destructive" role="alert">\n  <span>An error occurred.</span>\n  <button class="toast-close" aria-label="Close">×</button>\n</div>',
        preview: true,
        previewContent: (
          <div className="flex flex-col gap-2" style={{ width: '100%', maxWidth: 360 }}>
            <div className="toast" role="alert"><span>Action completed successfully!</span><button className="toast-close" aria-label="Close">×</button></div>
            <div className="toast toast-destructive" role="alert"><span>An error occurred.</span><button className="toast-close" aria-label="Close">×</button></div>
            <div className="toast" role="alert" style={{ background: 'oklch(0.577 0.245 143.34 / 0.15)', borderColor: 'oklch(0.577 0.245 143.34)' }}><span>Success toast</span><button className="toast-close" aria-label="Close">×</button></div>
          </div>
        )
      },
    ]
  },
  switch: {
    title: 'Switch (Toggle)',
    desc: 'iOS-style toggle switch.',
    sections: [
      {
        title: 'Example',
        content: 'Use the .switch class:',
        code: '<label class="switch" aria-label="Toggle setting">\n  <input type="checkbox" role="switch" />\n  <span class="switch-slider"></span>\n</label>\n<label class="switch switch-primary" aria-label="Primary toggle">\n  <input type="checkbox" checked role="switch" />\n  <span class="switch-slider"></span>\n</label>',
        preview: true,
        previewContent: (
          <div className="flex gap-3 items-center">
            <label className="switch" aria-label="Toggle option"><input type="checkbox" role="switch" /><span className="switch-slider"></span></label>
            <label className="switch switch-primary" aria-label="Toggle primary"><input type="checkbox" checked role="switch" /><span className="switch-slider"></span></label>
            <label className="switch" aria-label="Toggle disabled"><input type="checkbox" disabled role="switch" /><span className="switch-slider"></span></label>
          </div>
        )
      },
    ]
  },
  pagination: {
    title: 'Pagination',
    desc: 'Page navigation for lists and tables.',
    sections: [
      {
        title: 'Example',
        content: 'Use .pagination class:',
        code: '<nav class="pagination" aria-label="Page navigation">\n  <a href="#" class="page-item">Previous</a>\n  <a href="#" class="page-item active" aria-current="page">1</a>\n  <a href="#" class="page-item">2</a>\n  <a href="#" class="page-item">3</a>\n  <a href="#" class="page-item">Next</a>\n</nav>',
        preview: true,
        previewContent: (
          <nav className="pagination" aria-label="Page navigation">
            <a href="#" className="page-item" onClick={e => e.preventDefault()}>Previous</a>
            <a href="#" className="page-item active" aria-current="page" onClick={e => e.preventDefault()}>1</a>
            <a href="#" className="page-item" onClick={e => e.preventDefault()}>2</a>
            <a href="#" className="page-item" onClick={e => e.preventDefault()}>3</a>
            <a href="#" className="page-item" onClick={e => e.preventDefault()}>Next</a>
          </nav>
        )
      },
    ]
  },
  progress: {
    title: 'Progress',
    desc: 'Progress bar indicator.',
    sections: [
      {
        title: 'Example',
        content: 'Use .progress and .progress-bar:',
        code: '<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">\n  <div class="progress-bar" style="width: 60%"></div>\n</div>\n<div class="progress progress-primary">\n  <div class="progress-bar" style="width: 40%"></div>\n</div>',
        preview: true,
        previewContent: (
          <div className="flex flex-col gap-2" style={{ width: '100%' }}>
            <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{ width: '60%' }}></div>
            </div>
            <div className="progress progress-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar" style={{ width: '40%' }}></div>
            </div>
          </div>
        )
      },
    ]
  },
  breadcrumb: {
    title: 'Breadcrumb',
    desc: 'Navigation breadcrumb trail.',
    sections: [
      {
        title: 'Example',
        content: 'Use .breadcrumb class:',
        code: '<nav class="breadcrumb" aria-label="Breadcrumb">\n  <a href="#">Home</a>\n  <a href="#">Docs</a>\n  <span aria-current="page">Components</span>\n</nav>',
        preview: true,
        previewContent: (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#" onClick={e => e.preventDefault()}>Home</a>
            <a href="#" onClick={e => e.preventDefault()}>Docs</a>
            <span aria-current="page">Components</span>
          </nav>
        )
      },
    ]
  },
  stepper: {
    title: 'Stepper',
    desc: 'Multi-step progress indicator.',
    sections: [
      {
        title: 'Example',
        content: 'Use .stepper with .step classes:',
        code: '<div class="stepper" role="navigation" aria-label="Progress steps">\n  <div class="step completed">1</div>\n  <div class="step active">2</div>\n  <div class="step">3</div>\n  <div class="step">4</div>\n</div>',
        preview: true,
        previewContent: (
          <div className="stepper" role="navigation" aria-label="Progress steps" style={{ width: '100%' }}>
            <div className="step completed"><span>1</span><div className="step-label">Cart</div></div>
            <div className="step active"><span>2</span><div className="step-label">Shipping</div></div>
            <div className="step"><span>3</span><div className="step-label">Payment</div></div>
            <div className="step"><span>4</span><div className="step-label">Confirm</div></div>
          </div>
        )
      },
    ]
  },
  timeline: {
    title: 'Timeline',
    desc: 'Vertical timeline for chronological content.',
    sections: [
      {
        title: 'Example',
        content: 'Use .timeline with .timeline-item:',
        code: '<div class="timeline">\n  <div class="timeline-item">\n    <div class="timeline-marker"></div>\n    <div class="timeline-content">\n      <h4>Event One</h4>\n      <p>Description of the event.</p>\n    </div>\n  </div>\n</div>',
        preview: true,
        previewContent: (
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content"><h4 style={{ fontWeight: 600 }}>Event One</h4><p style={{ color: 'var(--muted-foreground)', fontSize: '.8125rem' }}>Description of the first event.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content"><h4 style={{ fontWeight: 600 }}>Event Two</h4><p style={{ color: 'var(--muted-foreground)', fontSize: '.8125rem' }}>Description of the second event.</p></div>
            </div>
          </div>
        )
      },
    ]
  },
  menu: {
    title: 'Menu',
    desc: 'Vertical navigation menu.',
    sections: [
      {
        title: 'Example',
        content: 'Use .menu class:',
        code: '<div class="menu" role="menu">\n  <a href="#" class="menu-item active" role="menuitem" aria-current="page">Dashboard</a>\n  <a href="#" class="menu-item" role="menuitem">Settings</a>\n  <a href="#" class="menu-item" role="menuitem">Profile</a>\n  <div class="menu-separator" role="separator"></div>\n  <a href="#" class="menu-item" role="menuitem">Logout</a>\n</div>',
        preview: true,
        previewContent: (
          <div className="menu" role="menu" style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '8px', width: 200 }}>
            <a href="#" className="menu-item active" role="menuitem" onClick={e => e.preventDefault()}>Dashboard</a>
            <a href="#" className="menu-item" role="menuitem" onClick={e => e.preventDefault()}>Settings</a>
            <a href="#" className="menu-item" role="menuitem" onClick={e => e.preventDefault()}>Profile</a>
            <div className="menu-separator" role="separator"></div>
            <a href="#" className="menu-item" role="menuitem" onClick={e => e.preventDefault()}>Logout</a>
          </div>
        )
      },
    ]
  },
  listgroup: {
    title: 'List Group',
    desc: 'Styled list groups.',
    sections: [
      {
        title: 'Example',
        content: 'Use .list-group class:',
        code: '<div class="list-group">\n  <div class="list-group-item">Item one</div>\n  <div class="list-group-item active" aria-current="true">Item two</div>\n  <div class="list-group-item">Item three</div>\n</div>'
      },
    ]
  },
  stat: {
    title: 'Stat',
    desc: 'Statistics and metrics display.',
    sections: [
      {
        title: 'Example',
        content: 'Use .stat with .stat-value and .stat-label:',
        code: '<div class="stat">\n  <div class="stat-label">Total Users</div>\n  <div class="stat-value">12,847</div>\n  <div class="stat-desc">↑ 12% from last month</div>\n</div>',
        preview: true,
        previewContent: (
          <div className="stat" style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px', minWidth: 160 }}>
            <div className="stat-label">Total Users</div>
            <div className="stat-value">12,847</div>
            <div className="stat-desc">↑ 12% from last month</div>
          </div>
        )
      },
    ]
  },
  rating: {
    title: 'Rating',
    desc: 'Star rating display.',
    sections: [
      {
        title: 'Example',
        content: 'Use .rating class:',
        code: '<div class="rating">\n  <span class="star filled" aria-label="1 star">★</span>\n  <span class="star filled" aria-label="2 stars">★</span>\n  <span class="star filled" aria-label="3 stars">★</span>\n  <span class="star half" aria-label="3.5 stars">★</span>\n  <span class="star" aria-label="4 stars">★</span>\n</div>',
        preview: true,
        previewContent: (
          <div className="rating">
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star">★</span>
          </div>
        )
      },
    ]
  },
  codekbd: {
    title: 'Code & Kbd',
    desc: 'Inline code and keyboard shortcuts.',
    sections: [
      {
        title: 'Example',
        content: 'Use .code for inline code and .kbd for keyboard shortcuts:',
        code: '<p>Use the <code class="code">npm install</code> command or press <kbd class="kbd">⌘K</kbd> to search.</p>'
      },
    ]
  },
  separator: {
    title: 'Separator',
    desc: 'Horizontal and vertical separators.',
    sections: [
      {
        title: 'Example',
        content: 'Use hr with .separator class or .separator-vertical:',
        code: '<hr class="separator" />\n<div class="flex items-center gap-2">\n  <span>Left</span>\n  <div class="separator-vertical"></div>\n  <span>Right</span>\n</div>'
      },
    ]
  },
  carousel: {
    title: 'Carousel',
    desc: 'Slideshow component for images and content.',
    sections: [
      {
        title: 'Example',
        content: 'Use .carousel with .carousel-track:',
        code: '<div class="carousel" role="region" aria-label="Image carousel">\n  <div class="carousel-track">\n    <div class="carousel-slide active">Slide 1</div>\n    <div class="carousel-slide">Slide 2</div>\n    <div class="carousel-slide">Slide 3</div>\n  </div>\n  <button class="carousel-prev" aria-label="Previous slide">‹</button>\n  <button class="carousel-next" aria-label="Next slide">›</button>\n</div>'
      },
    ]
  },
  upload: {
    title: 'Upload Zone',
    desc: 'Drag-and-drop file upload area.',
    sections: [
      {
        title: 'Example',
        content: 'Use .upload-zone class:',
        code: '<div class="upload-zone" role="button" tabindex="0">\n  <div class="upload-icon">📁</div>\n  <p>Drop files here or click to upload</p>\n  <span class="upload-hint">Max 10MB per file</span>\n</div>'
      },
    ]
  },
  faq: {
    title: 'FAQ',
    desc: 'Frequently asked questions accordion component.',
    sections: [
      {
        title: 'Example',
        content: 'Use .faq class:',
        code: '<div class="faq">\n  <details class="faq-item">\n    <summary class="faq-question">What is Folkline UI?</summary>\n    <div class="faq-answer">A utility-first CSS framework with 2,734 utility classes.</div>\n  </details>\n</div>'
      },
    ]
  },
  compare: {
    title: 'Compare',
    desc: 'Side-by-side comparison component.',
    sections: [
      {
        title: 'Example',
        content: 'Use .compare class:',
        code: '<div class="compare">\n  <div class="compare-before">Before</div>\n  <div class="compare-after">After</div>\n</div>'
      },
    ]
  },
  hero: {
    title: 'Hero Section',
    desc: 'Full-width hero section component.',
    sections: [
      {
        title: 'Example',
        content: 'Use .hero-section class:',
        code: '<div class="hero-section bg-primary text-white p-8">\n  <h1 class="fs-3xl fw-700 mb-2">Build Beautiful UIs</h1>\n  <p class="fs-lg mb-4">Utility-first CSS framework for everyone.</p>\n  <button class="btn-lg" style="background:#fff;color:#000">Get Started</button>\n</div>'
      },
    ]
  },

  /* ACCESSIBILITY */
  'a11y-overview': {
    title: 'Accessibility Overview',
    desc: 'Folkline UI is built with accessibility as a core principle.',
    sections: [
      { title: 'Our Commitment', content: 'Every component follows WCAG 2.1 AA guidelines as a minimum, with many reaching AAA. We ensure proper ARIA attributes, keyboard navigation, focus management, and semantic HTML.' },
    ]
  },
  'a11y-aria': {
    title: 'ARIA Patterns',
    desc: 'ARIA attributes for component roles and states.',
    sections: [
      { title: 'Patterns', content: 'All interactive components include appropriate ARIA roles, states, and properties. Modals use role="dialog" with aria-modal="true", tabs use role="tab" and role="tabpanel", accordions manage aria-expanded and aria-hidden.' },
    ]
  },
  'a11y-keyboard': {
    title: 'Keyboard Navigation',
    desc: 'Keyboard accessibility for all components.',
    sections: [
      { title: 'Focus Management', content: 'All interactive elements receive visible focus indicators. Components manage focus trapping (modals), arrow key navigation (tabs, dropdown menus), and Escape key handling (modals, dropdowns).', code: ':focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }' },
    ]
  },
  'a11y-reduced-motion': {
    title: 'Reduced Motion',
    desc: 'Respecting user motion preferences.',
    sections: [
      { title: 'prefers-reduced-motion', content: 'All animations respect prefers-reduced-motion by disabling non-essential movement:', code: '@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}' },
    ]
  },
  'a11y-contrast': {
    title: 'High Contrast',
    desc: 'Ensuring sufficient color contrast.',
    sections: [
      { title: 'Contrast Ratios', content: 'All text/background color combinations meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text). Components remain readable in forced-colors mode (Windows High Contrast).' },
    ]
  },
}

export default function Docs() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') || 'installation'

  useEffect(() => {
    const el = document.getElementById('doc-section')
    if (el) el.scrollTop = 0
    window.scrollTo(0, 0)
  }, [id])

  const doc = docs[id]

  if (!doc) {
    return (
      <div className="page-content">
        <h1>Documentation</h1>
        <p>Select a topic from the sidebar.</p>
      </div>
    )
  }

  return (
    <div className="page-content" id="doc-section">
      <div className="page-section">
        <h2>{doc.title}</h2>
        <p className="desc">{doc.desc}</p>
        {doc.sections.map((section, i) => (
          <div key={i}>
            {section.title && <h3>{section.title}</h3>}
            {section.content && <p className="desc" dangerouslySetInnerHTML={{ __html: section.content }} />}
            {section.code && <CodeBlock code={section.code} />}
            {section.preview && (
              <div className="live-preview">
                {section.previewContent}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
