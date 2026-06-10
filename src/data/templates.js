export const categories = [
  { id: 'all', label: 'All' },
  { id: 'landing', label: 'Landing' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'form', label: 'Form' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'blog', label: 'Blog' },
  { id: 'admin', label: 'Admin' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'component', label: 'Component' },
  { id: 'marketing', label: 'Marketing' },
]

export const templates = [
  // ========== LANDING (8) ==========
  {
    id: 'landing-saas', category: 'landing', title: 'SaaS Landing', description: 'Modern SaaS product landing page with hero, features, pricing, and CTA.',
    tags: ['hero', 'features', 'pricing', 'cta'],
    html: '<header class="flex items-center justify-between p-4 border-b"><div class="fw-700 fs-lg">SaaSPro</div><nav class="flex gap-4"><a href="#" class="text-muted">Features</a><a href="#" class="text-muted">Pricing</a><a href="#" class="text-muted">About</a></nav><button class="bg-primary text-white px-4 py-2 rounded-lg fw-600">Get Started</button></header><section class="flex flex-col items-center text-center p-8"><h1 class="fs-3xl fw-700 mb-3" style="max-width:600px">Build Products Faster with SaaSPro</h1><p class="text-muted fs-lg mb-4" style="max-width:500px">The all-in-one platform for modern teams. Ship features 10x faster.</p><div class="flex gap-3"><button class="bg-primary text-white px-6 py-3 rounded-lg fw-600">Start Free Trial</button><button class="border px-6 py-3 rounded-lg fw-600">Watch Demo</button></div></section><section class="grid grid-cols-3 gap-4 p-8"><div class="p-4 border rounded-lg"><h3 class="fw-600 mb-1">Fast</h3><p class="text-muted fs-sm">Lightning-fast performance out of the box.</p></div><div class="p-4 border rounded-lg"><h3 class="fw-600 mb-1">Secure</h3><p class="text-muted fs-sm">Enterprise-grade security built in.</p></div><div class="p-4 border rounded-lg"><h3 class="fw-600 mb-1">Scalable</h3><p class="text-muted fs-sm">Grows with your business needs.</p></div></section>'
  },
  {
    id: 'landing-app', category: 'landing', title: 'App Landing', description: 'Mobile app landing page with app store buttons and feature showcase.',
    tags: ['app', 'mobile', 'download', 'showcase'],
    html: '<section class="flex flex-col md-flex-row items-center p-8 gap-8"><div class="flex-1"><span class="badge badge-primary mb-2">New App</span><h1 class="fs-3xl fw-700 mb-3">Your Perfect Companion App</h1><p class="text-muted fs-lg mb-4">Organize your life with the app that millions trust.</p><div class="flex gap-2"><button class="bg-primary text-white px-6 py-3 rounded-lg fw-600">App Store</button><button class="border px-6 py-3 rounded-lg fw-600">Google Play</button></div></div><div class="flex-1 flex justify-center"><div class="w-48 h-80 bg-muted rounded-2xl flex items-center justify-center text-muted">App Screen</div></div></section>'
  },
  {
    id: 'landing-startup', category: 'landing', title: 'Startup Landing', description: 'Bold startup landing page with big typography and stats.',
    tags: ['startup', 'hero', 'stats', 'cta'],
    html: '<section class="p-8 text-center"><div class="flex items-center justify-between mb-8"><div class="fw-700 fs-lg">StartupX</div><div class="flex gap-4"><a href="#" class="text-muted">Product</a><a href="#" class="text-muted">Blog</a><a href="#" class="text-muted">Contact</a></div></div><h1 class="fs-3xl fw-700 mb-2" style="max-width:700px;margin:0 auto">We\'re Building the Future of Work</h1><p class="text-muted fs-lg mb-6" style="max-width:500px;margin:0 auto">Join 10,000+ teams already using StartupX to collaborate better.</p><button class="bg-primary text-white px-8 py-3 rounded-lg fw-600 fs-lg">Get Early Access</button><div class="flex justify-center gap-8 mt-8"><div class="text-center"><div class="fw-700 fs-2xl">10K+</div><div class="text-muted fs-sm">Teams</div></div><div class="text-center"><div class="fw-700 fs-2xl">99.9%</div><div class="text-muted fs-sm">Uptime</div></div><div class="text-center"><div class="fw-700 fs-2xl">4.9★</div><div class="text-muted fs-sm">Rating</div></div></div></section>'
  },
  {
    id: 'landing-ai', category: 'landing', title: 'AI Product Landing', description: 'AI-powered product landing with gradient hero.',
    tags: ['ai', 'gradient', 'hero', 'features'],
    html: '<section class="p-8"><div class="flex items-center justify-between gap-8" style="min-height:400px"><div class="flex-1"><h1 class="fs-3xl fw-700 mb-3" style="line-height:1.1">Supercharge Your Work with <span class="text-primary">AI</span></h1><p class="text-muted fs-lg mb-4">Intelligent automation for your daily tasks.</p><div class="flex gap-2"><button class="bg-primary text-white px-6 py-3 rounded-lg fw-600">Try Free</button><button class="border px-6 py-3 rounded-lg fw-600">Learn More</button></div></div><div class="flex-1 bg-gradient-to-br from-primary to-purple-500 text-white p-8 rounded-2xl flex items-center justify-center fs-lg fw-600">AI Demo</div></div></section>'
  },
  {
    id: 'landing-saas-dark', category: 'landing', title: 'Dark SaaS Landing', description: 'Dark-themed SaaS landing page with gradient accents.',
    tags: ['dark', 'saas', 'gradient', 'hero'],
    html: '<div class="bg-dark text-white p-8 rounded-2xl"><header class="flex items-center justify-between mb-8"><div class="fw-700 fs-lg">DarkFlow</div><nav class="flex gap-4 text-muted"><a href="#">Why</a><a href="#">Product</a><a href="#">Pricing</a></nav></header><section class="text-center"><h1 class="fs-3xl fw-700 mb-3">Dark Mode Done Right</h1><p class="text-muted fs-lg mb-4">Beautiful dark UI for your next project.</p><button class="bg-white text-dark px-6 py-3 rounded-lg fw-600">Get Started</button></section></div>'
  },
  {
    id: 'landing-product-hunt', category: 'landing', title: 'Product Hunt Launch', description: 'Product Hunt launch style landing page.',
    tags: ['product-hunt', 'launch', 'badge', 'cta'],
    html: '<section class="p-8 text-center"><div class="badge badge-primary mb-3 fs-sm">🚀 Launches Jan 2026</div><h1 class="fs-3xl fw-700 mb-3">Meet Folkline UI</h1><p class="text-muted fs-lg mb-4" style="max-width:500px;margin:0 auto">The utility-first CSS framework you\'ve been waiting for.</p><div class="flex justify-center gap-2 mb-6"><button class="bg-primary text-white px-6 py-3 rounded-lg fw-600">Upvote on Product Hunt</button></div><div class="flex justify-center gap-8"><div class="text-center"><div class="fw-700 fs-2xl">2,734</div><div class="text-muted fs-sm">Utilities</div></div><div class="text-center"><div class="fw-700 fs-2xl">30+</div><div class="text-muted fs-sm">Components</div></div><div class="text-center"><div class="fw-700 fs-2xl">3.5KB</div><div class="text-muted fs-sm">Gzipped</div></div></div></section>'
  },
  {
    id: 'landing-waitlist', category: 'landing', title: 'Waitlist Landing', description: 'Email capture waitlist landing page.',
    tags: ['waitlist', 'email', 'capture', 'form'],
    html: '<section class="p-8 text-center" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="text-primary fs-xl fw-700 mb-2">✦ Beta</div><h1 class="fs-3xl fw-700 mb-3">Join the Waitlist</h1><p class="text-muted fs-lg mb-6" style="max-width:450px">Be the first to know when we launch. No spam, ever.</p><div class="flex gap-2" style="max-width:400px;width:100%"><input type="email" placeholder="you@email.com" class="flex-1 border px-4 py-3 rounded-lg" style="flex:1" /><button class="bg-primary text-white px-6 py-3 rounded-lg fw-600">Notify Me</button></div></section>'
  },
  {
    id: 'landing-saas-pricing', category: 'landing', title: 'SaaS Pricing Page', description: 'Three-tier SaaS pricing with feature comparison.',
    tags: ['pricing', 'saas', 'tiers', 'comparison'],
    html: '<section class="p-8"><h1 class="fs-2xl fw-700 text-center mb-2">Simple Pricing</h1><p class="text-muted text-center mb-6">No hidden fees. No surprises.</p><div class="grid grid-cols-3 gap-4" style="max-width:900px;margin:0 auto"><div class="p-6 border rounded-lg"><h3 class="fw-600 mb-2">Starter</h3><div class="fs-2xl fw-700 mb-4">$19<span class="text-muted fs-sm fw-400">/mo</span></div><ul class="flex flex-col gap-2 mb-4"><li class="flex items-center gap-2">✓ 5 Projects</li><li class="flex items-center gap-2">✓ 10GB Storage</li><li class="flex items-center gap-2">✓ Basic Support</li></ul><button class="w-full border py-2 rounded-lg fw-600">Get Started</button></div><div class="p-6 border rounded-lg" style="border-color:var(--primary)"><div class="text-primary fw-600 fs-sm mb-1">Most Popular</div><h3 class="fw-600 mb-2">Pro</h3><div class="fs-2xl fw-700 mb-4">$49<span class="text-muted fs-sm fw-400">/mo</span></div><ul class="flex flex-col gap-2 mb-4"><li class="flex items-center gap-2">✓ Unlimited Projects</li><li class="flex items-center gap-2">✓ 100GB Storage</li><li class="flex items-center gap-2">✓ Priority Support</li></ul><button class="w-full bg-primary text-white py-2 rounded-lg fw-600">Get Started</button></div><div class="p-6 border rounded-lg"><h3 class="fw-600 mb-2">Enterprise</h3><div class="fs-2xl fw-700 mb-4">$99<span class="text-muted fs-sm fw-400">/mo</span></div><ul class="flex flex-col gap-2 mb-4"><li class="flex items-center gap-2">✓ Everything in Pro</li><li class="flex items-center gap-2">✓ Custom Storage</li><li class="flex items-center gap-2">✓ 24/7 Support</li></ul><button class="w-full border py-2 rounded-lg fw-600">Contact Sales</button></div></div></section>'
  },
  // ========== DASHBOARD (8) ==========
  {
    id: 'dashboard-analytics', category: 'dashboard', title: 'Analytics Dashboard', description: 'Full analytics dashboard with stat cards and chart area.',
    tags: ['analytics', 'stats', 'charts', 'metrics'],
    html: '<div class="flex" style="background:var(--card)"><div class="w-48 p-4 border-r" style="background:var(--muted)"><div class="fw-700 mb-4">Acme Co</div><div class="flex flex-col gap-1"><a href="#" class="p-2 rounded bg-primary text-white fw-500 fs-sm">Dashboard</a><a href="#" class="p-2 rounded fs-sm text-muted">Analytics</a><a href="#" class="p-2 rounded fs-sm text-muted">Settings</a><a href="#" class="p-2 rounded fs-sm text-muted">Users</a></div></div><div class="flex-1 p-6"><div class="grid grid-cols-4 gap-4 mb-6"><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Revenue</div><div class="fw-700 fs-2xl">$48,290</div><div class="text-success fs-sm">↑ 12.5%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Users</div><div class="fw-700 fs-2xl">2,847</div><div class="text-success fs-sm">↑ 8.2%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Orders</div><div class="fw-700 fs-2xl">1,294</div><div class="text-destructive fs-sm">↓ 3.1%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Conversion</div><div class="fw-700 fs-2xl">3.24%</div><div class="text-success fs-sm">↑ 0.8%</div></div></div><div class="border rounded-lg p-6" style="height:300px;display:flex;align-items:center;justify-content:center"><div class="text-muted">📊 Chart Area</div></div></div></div>'
  },
  {
    id: 'dashboard-ecommerce', category: 'dashboard', title: 'E-Commerce Dashboard', description: 'E-commerce dashboard with sales data and recent orders.',
    tags: ['ecommerce', 'sales', 'orders', 'stats'],
    html: '<div class="p-6"><h2 class="fw-700 fs-xl mb-4">Sales Overview</h2><div class="grid grid-cols-3 gap-4 mb-6"><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Total Sales</div><div class="fw-700 fs-2xl">$124,592</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Orders Today</div><div class="fw-700 fs-2xl">342</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Avg Order</div><div class="fw-700 fs-2xl">$89.50</div></div></div><h3 class="fw-600 mb-3">Recent Orders</h3><table class="table w-full"><thead><tr><th>Order</th><th>Customer</th><th>Amount</th><th>Status</th></tr></thead><tbody><tr><td>#1023</td><td>John Doe</td><td>$129.00</td><td><span class="badge badge-primary">Paid</span></td></tr><tr><td>#1024</td><td>Jane Smith</td><td>$84.50</td><td><span class="badge badge-primary">Paid</span></td></tr><tr><td>#1025</td><td>Bob Wilson</td><td>$249.99</td><td><span class="badge">Pending</span></td></tr></tbody></table></div>'
  },
  {
    id: 'dashboard-social', category: 'dashboard', title: 'Social Media Dashboard', description: 'Social media analytics with follower counts and engagement.',
    tags: ['social', 'analytics', 'followers', 'engagement'],
    html: '<div class="p-6"><h2 class="fw-700 fs-xl mb-4">Social Analytics</h2><div class="grid grid-cols-3 gap-4 mb-6"><div class="p-4 border rounded-lg text-center"><div class="fs-2xl mb-1">📘</div><div class="fw-700 fs-2xl">12,847</div><div class="text-muted fs-sm">Facebook Followers</div></div><div class="p-4 border rounded-lg text-center"><div class="fs-2xl mb-1">📸</div><div class="fw-700 fs-2xl">24,592</div><div class="text-muted fs-sm">Instagram Followers</div></div><div class="p-4 border rounded-lg text-center"><div class="fs-2xl mb-1">🐦</div><div class="fw-700 fs-2xl">8,341</div><div class="text-muted fs-sm">Twitter Followers</div></div></div><div class="border rounded-lg p-4"><div class="flex items-center justify-between mb-3"><span class="fw-600">Recent Posts</span><button class="text-primary fs-sm">View All</button></div><div class="flex flex-col gap-2"><div class="flex items-center justify-between p-2 border-b"><div>Product launch announcement</div><div class="text-muted fs-sm">2.4K likes</div></div><div class="flex items-center justify-between p-2 border-b"><div>Behind the scenes video</div><div class="text-muted fs-sm">1.8K likes</div></div></div></div></div>'
  },
  {
    id: 'dashboard-project', category: 'dashboard', title: 'Project Management', description: 'Project management dashboard with tasks and progress.',
    tags: ['project', 'tasks', 'progress', 'management'],
    html: '<div class="p-6"><div class="flex items-center justify-between mb-4"><h2 class="fw-700 fs-xl">Project Board</h2><button class="bg-primary text-white px-4 py-2 rounded-lg fw-600 fs-sm">+ New Task</button></div><div class="grid grid-cols-4 gap-4"><div class="p-3 border rounded-lg bg-muted"><div class="fw-600 fs-sm mb-2">To Do <span class="badge">4</span></div><div class="flex flex-col gap-2"><div class="p-3 bg-card border rounded-lg fs-sm">Design homepage</div><div class="p-3 bg-card border rounded-lg fs-sm">Write API docs</div></div></div><div class="p-3 border rounded-lg bg-muted"><div class="fw-600 fs-sm mb-2">In Progress <span class="badge">3</span></div><div class="flex flex-col gap-2"><div class="p-3 bg-card border rounded-lg fs-sm">Implement auth</div></div></div><div class="p-3 border rounded-lg bg-muted"><div class="fw-600 fs-sm mb-2">Review <span class="badge">2</span></div></div><div class="p-3 border rounded-lg bg-muted"><div class="fw-600 fs-sm mb-2">Done <span class="badge">5</span></div></div></div></div>'
  },
  {
    id: 'dashboard-crypto', category: 'dashboard', title: 'Crypto Dashboard', description: 'Cryptocurrency dashboard with prices and portfolio.',
    tags: ['crypto', 'bitcoin', 'prices', 'portfolio'],
    html: '<div class="p-6"><h2 class="fw-700 fs-xl mb-4">Portfolio</h2><div class="grid grid-cols-3 gap-4 mb-6"><div class="p-4 border rounded-lg"><div class="flex items-center gap-2 mb-1"><span>₿</span><span class="fw-600">Bitcoin</span></div><div class="fw-700 fs-lg">$63,241</div><div class="text-success fs-sm">↑ 2.4%</div></div><div class="p-4 border rounded-lg"><div class="flex items-center gap-2 mb-1"><span>Ξ</span><span class="fw-600">Ethereum</span></div><div class="fw-700 fs-lg">$3,412</div><div class="text-success fs-sm">↑ 1.8%</div></div><div class="p-4 border rounded-lg"><div class="flex items-center gap-2 mb-1"><span>◎</span><span class="fw-600">Solana</span></div><div class="fw-700 fs-lg">$142</div><div class="text-destructive fs-sm">↓ 0.5%</div></div></div><div class="border rounded-lg p-6 flex items-center justify-center" style="height:200px"><div class="text-muted">📈 Price Chart</div></div></div>'
  },
  {
    id: 'dashboard-support', category: 'dashboard', title: 'Support Dashboard', description: 'Customer support dashboard with tickets and metrics.',
    tags: ['support', 'tickets', 'metrics', 'customer'],
    html: '<div class="p-6"><h2 class="fw-700 fs-xl mb-4">Support Dashboard</h2><div class="grid grid-cols-4 gap-4 mb-6"><div class="p-4 border rounded-lg text-center"><div class="fw-700 fs-2xl">24</div><div class="text-muted fs-sm">Open Tickets</div></div><div class="p-4 border rounded-lg text-center"><div class="fw-700 fs-2xl">89</div><div class="text-muted fs-sm">Resolved Today</div></div><div class="p-4 border rounded-lg text-center"><div class="fw-700 fs-2xl">4.8</div><div class="text-muted fs-sm">Avg Rating</div></div><div class="p-4 border rounded-lg text-center"><div class="fw-700 fs-2xl">12m</div><div class="text-muted fs-sm">Avg Response</div></div></div><div class="border rounded-lg"><div class="flex items-center justify-between p-3 border-b"><div class="flex items-center gap-3"><span class="badge badge-primary">Open</span><span>Login issue</span></div><div class="text-muted fs-sm">2 hours ago</div></div><div class="flex items-center justify-between p-3 border-b"><div class="flex items-center gap-3"><span class="badge">Pending</span><span>Payment failed</span></div><div class="text-muted fs-sm">4 hours ago</div></div></div></div>'
  },
  {
    id: 'dashboard-marketing', category: 'dashboard', title: 'Marketing Dashboard', description: 'Marketing analytics with campaign performance.',
    tags: ['marketing', 'campaigns', 'analytics', 'roi'],
    html: '<div class="p-6"><h2 class="fw-700 fs-xl mb-4">Marketing Overview</h2><div class="grid grid-cols-2 gap-4 mb-6"><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Campaign Spend</div><div class="fw-700 fs-2xl">$12,480</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">ROI</div><div class="fw-700 fs-2xl text-success">324%</div></div></div><div class="border rounded-lg"><div class="p-3 border-b fw-600 fs-sm">Active Campaigns</div><div class="flex items-center justify-between p-3 border-b"><span>Summer Sale</span><div class="progress" style="flex:1;margin:0 12px"><div class="progress-bar" style="width:70%"></div></div><span class="fw-600 fs-sm">$4,200</span></div><div class="flex items-center justify-between p-3"><span>New Launch</span><div class="progress" style="flex:1;margin:0 12px"><div class="progress-bar" style="width:45%"></div></div><span class="fw-600 fs-sm">$2,800</span></div></div></div>'
  },
  {
    id: 'dashboard-fitness', category: 'dashboard', title: 'Fitness Dashboard', description: 'Fitness tracking dashboard with stats and goals.',
    tags: ['fitness', 'health', 'goals', 'stats'],
    html: '<div class="p-6"><h2 class="fw-700 fs-xl mb-4">Fitness Overview</h2><div class="grid grid-cols-3 gap-4 mb-6"><div class="p-4 border rounded-lg text-center"><div class="fw-700 fs-2xl">8,432</div><div class="text-muted fs-sm">Steps Today</div><div class="progress mt-2"><div class="progress-bar" style="width:60%"></div></div></div><div class="p-4 border rounded-lg text-center"><div class="fw-700 fs-2xl">487</div><div class="text-muted fs-sm">Calories Burned</div></div><div class="p-4 border rounded-lg text-center"><div class="fw-700 fs-2xl">45m</div><div class="text-muted fs-sm">Active Minutes</div></div></div><div class="border rounded-lg p-6 flex items-center justify-center" style="height:200px"><div class="text-muted">📊 Activity Chart</div></div></div>'
  },
  // ========== FORM (7) ==========
  {
    id: 'form-login', category: 'form', title: 'Login Form', description: 'Clean login form with email, password, and social options.',
    tags: ['login', 'auth', 'form', 'sign-in'],
    html: '<div class="flex items-center justify-center p-8" style="min-height:60vh"><div class="w-full" style="max-width:380px"><h2 class="fw-700 fs-xl mb-1 text-center">Welcome back</h2><p class="text-muted fs-sm text-center mb-6">Sign in to your account</p><div class="flex flex-col gap-4"><div><label class="fs-sm fw-500 mb-1 d-block">Email</label><input type="email" placeholder="m@example.com" class="w-full border px-3 py-2 rounded-lg" /></div><div><label class="fs-sm fw-500 mb-1 d-block">Password</label><input type="password" placeholder="••••••••" class="w-full border px-3 py-2 rounded-lg" /></div><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Sign In</button><div class="flex items-center gap-3 text-muted fs-sm"><div class="flex-1 border-t"></div><span>or continue with</span><div class="flex-1 border-t"></div></div><div class="grid grid-cols-2 gap-2"><button class="border py-2 rounded-lg fs-sm">GitHub</button><button class="border py-2 rounded-lg fs-sm">Google</button></div></div></div></div>'
  },
  {
    id: 'form-register', category: 'form', title: 'Registration Form', description: 'User registration form with validation-ready fields.',
    tags: ['register', 'sign-up', 'form', 'auth'],
    html: '<div class="flex items-center justify-center p-8"><div class="w-full" style="max-width:420px"><h2 class="fw-700 fs-xl mb-1 text-center">Create account</h2><p class="text-muted fs-sm text-center mb-6">Get started for free</p><div class="flex flex-col gap-4"><div class="grid grid-cols-2 gap-3"><div><label class="fs-sm fw-500 mb-1 d-block">First name</label><input type="text" class="w-full border px-3 py-2 rounded-lg" /></div><div><label class="fs-sm fw-500 mb-1 d-block">Last name</label><input type="text" class="w-full border px-3 py-2 rounded-lg" /></div></div><div><label class="fs-sm fw-500 mb-1 d-block">Email</label><input type="email" placeholder="m@example.com" class="w-full border px-3 py-2 rounded-lg" /></div><div><label class="fs-sm fw-500 mb-1 d-block">Password</label><input type="password" class="w-full border px-3 py-2 rounded-lg" /></div><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Create Account</button><p class="text-center text-muted fs-sm">Already have an account? <a href="#" class="text-primary fw-500">Sign in</a></p></div></div></div>'
  },
  {
    id: 'form-contact', category: 'form', title: 'Contact Form', description: 'Clean contact form with name, email, subject, message.',
    tags: ['contact', 'form', 'message', 'email'],
    html: '<div class="p-8" style="max-width:500px;margin:0 auto"><h2 class="fw-700 fs-xl mb-1">Contact us</h2><p class="text-muted fs-sm mb-6">We\'d love to hear from you</p><div class="flex flex-col gap-4"><div class="grid grid-cols-2 gap-3"><div><label class="fs-sm fw-500 mb-1 d-block">Name</label><input type="text" class="w-full border px-3 py-2 rounded-lg" /></div><div><label class="fs-sm fw-500 mb-1 d-block">Email</label><input type="email" class="w-full border px-3 py-2 rounded-lg" /></div></div><div><label class="fs-sm fw-500 mb-1 d-block">Subject</label><input type="text" class="w-full border px-3 py-2 rounded-lg" /></div><div><label class="fs-sm fw-500 mb-1 d-block">Message</label><textarea rows="5" class="w-full border px-3 py-2 rounded-lg"></textarea></div><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Send Message</button></div></div>'
  },
  {
    id: 'form-newsletter', category: 'form', title: 'Newsletter Subscribe', description: 'Email newsletter subscription card.',
    tags: ['newsletter', 'subscribe', 'email', 'form'],
    html: '<div class="flex items-center justify-center p-8"><div class="p-8 border rounded-2xl text-center" style="max-width:450px"><span class="fs-2xl mb-2 d-block">✉️</span><h3 class="fw-700 fs-lg mb-2">Stay in the loop</h3><p class="text-muted fs-sm mb-4">Get the latest updates delivered to your inbox.</p><div class="flex gap-2"><input type="email" placeholder="your@email.com" class="flex-1 border px-4 py-2 rounded-lg" /><button class="bg-primary text-white px-5 py-2 rounded-lg fw-600">Subscribe</button></div></div></div>'
  },
  {
    id: 'form-search', category: 'form', title: 'Search Form', description: 'Search bar with filters and autocomplete style.',
    tags: ['search', 'form', 'filter', 'autocomplete'],
    html: '<div class="p-8"><div class="flex items-center gap-2 p-3 border rounded-xl" style="max-width:600px;margin:0 auto"><span class="text-muted">🔍</span><input type="search" placeholder="Search anything..." class="flex-1 border-0 outline-0" style="outline:none;border:none" /><div class="flex gap-1"><button class="px-3 py-1 border rounded-lg fs-sm">All</button><button class="px-3 py-1 border rounded-lg fs-sm bg-primary text-white">Docs</button></div></div></div>'
  },
  {
    id: 'form-payment', category: 'form', title: 'Payment Form', description: 'Payment checkout form with card input.',
    tags: ['payment', 'checkout', 'card', 'form'],
    html: '<div class="p-8" style="max-width:460px;margin:0 auto"><h2 class="fw-700 fs-xl mb-4">Payment Details</h2><div class="flex flex-col gap-4"><div><label class="fs-sm fw-500 mb-1 d-block">Card number</label><input type="text" placeholder="4242 4242 4242 4242" class="w-full border px-3 py-2 rounded-lg" /></div><div class="grid grid-cols-2 gap-3"><div><label class="fs-sm fw-500 mb-1 d-block">Expiry</label><input type="text" placeholder="MM/YY" class="w-full border px-3 py-2 rounded-lg" /></div><div><label class="fs-sm fw-500 mb-1 d-block">CVC</label><input type="text" placeholder="123" class="w-full border px-3 py-2 rounded-lg" /></div></div><div><label class="fs-sm fw-500 mb-1 d-block">Name on card</label><input type="text" class="w-full border px-3 py-2 rounded-lg" /></div><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Pay $49.00</button></div></div>'
  },
  {
    id: 'form-feedback', category: 'form', title: 'Feedback Form', description: 'User feedback form with rating stars.',
    tags: ['feedback', 'rating', 'form', 'review'],
    html: '<div class="flex items-center justify-center p-8"><div class="p-6 border rounded-xl" style="max-width:400px;width:100%"><h3 class="fw-600 fs-lg mb-1">Share your feedback</h3><p class="text-muted fs-sm mb-4">Help us improve</p><div class="flex flex-col gap-4"><div class="flex gap-1 fs-lg">★★★★★</div><div><textarea rows="4" placeholder="Tell us more..." class="w-full border px-3 py-2 rounded-lg"></textarea></div><button class="w-full bg-primary text-white py-2 rounded-lg fw-600">Submit</button></div></div></div>'
  },
  // ========== E-COMMERCE (7) ==========
  {
    id: 'ecom-product-card', category: 'ecommerce', title: 'Product Card', description: 'Product card with image, price, and add to cart.',
    tags: ['product', 'card', 'shop', 'cart'],
    html: '<div class="p-4 border rounded-lg" style="max-width:280px"><div class="bg-muted h-40 rounded-lg mb-3 flex items-center justify-center text-muted">Product Image</div><span class="badge badge-primary mb-1">New</span><h3 class="fw-600 fs-sm">Wireless Headphones</h3><div class="flex items-center gap-1 fs-sm mb-2">★★★★★ <span class="text-muted">(124)</span></div><div class="flex items-center justify-between"><span class="fw-700 fs-lg">$79.99</span><button class="bg-primary text-white px-4 py-2 rounded-lg fs-sm fw-500">Add to Cart</button></div></div>'
  },
  {
    id: 'ecom-product-grid', category: 'ecommerce', title: 'Product Grid', description: '4-column product grid layout.',
    tags: ['grid', 'products', 'shop', 'listing'],
    html: '<div class="p-6"><div class="flex items-center justify-between mb-4"><h2 class="fw-700 fs-lg">Featured Products</h2><div class="flex gap-2"><button class="border px-3 py-1 rounded-lg fs-sm">Filter</button><button class="border px-3 py-1 rounded-lg fs-sm">Sort</button></div></div><div class="grid grid-cols-4 gap-4"><div class="p-3 border rounded-lg"><div class="bg-muted h-32 rounded mb-2 flex items-center justify-center text-muted fs-sm">📷</div><div class="fw-600 fs-sm">Product 1</div><div class="fw-700 fs-sm">$24.99</div></div><div class="p-3 border rounded-lg"><div class="bg-muted h-32 rounded mb-2 flex items-center justify-center text-muted fs-sm">📷</div><div class="fw-600 fs-sm">Product 2</div><div class="fw-700 fs-sm">$34.99</div></div><div class="p-3 border rounded-lg"><div class="bg-muted h-32 rounded mb-2 flex items-center justify-center text-muted fs-sm">📷</div><div class="fw-600 fs-sm">Product 3</div><div class="fw-700 fs-sm">$49.99</div></div><div class="p-3 border rounded-lg"><div class="bg-muted h-32 rounded mb-2 flex items-center justify-center text-muted fs-sm">📷</div><div class="fw-600 fs-sm">Product 4</div><div class="fw-700 fs-sm">$19.99</div></div></div></div>'
  },
  {
    id: 'ecom-cart', category: 'ecommerce', title: 'Shopping Cart', description: 'Shopping cart with items, quantities, and totals.',
    tags: ['cart', 'shopping', 'checkout', 'items'],
    html: '<div class="p-6"><h2 class="fw-700 fs-xl mb-4">Shopping Cart (3)</h2><div class="flex flex-col gap-3 mb-4"><div class="flex items-center gap-4 p-3 border rounded-lg"><div class="bg-muted w-16 h-16 rounded flex items-center justify-center text-muted fs-sm">📷</div><div class="flex-1"><div class="fw-600">Product Name</div><div class="text-muted fs-sm">$29.99 x 1</div></div><div class="fw-600">$29.99</div></div><div class="flex items-center gap-4 p-3 border rounded-lg"><div class="bg-muted w-16 h-16 rounded flex items-center justify-center text-muted fs-sm">📷</div><div class="flex-1"><div class="fw-600">Another Product</div><div class="text-muted fs-sm">$49.99 x 2</div></div><div class="fw-600">$99.98</div></div></div><div class="border-t pt-4"><div class="flex items-center justify-between mb-2"><span>Subtotal</span><span class="fw-600">$129.97</span></div><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Checkout</button></div></div>'
  },
  {
    id: 'ecom-checkout', category: 'ecommerce', title: 'Checkout Page', description: 'Full checkout flow with order summary.',
    tags: ['checkout', 'order', 'payment', 'summary'],
    html: '<div class="p-6 grid grid-cols-2 gap-6"><div><h2 class="fw-700 fs-lg mb-4">Shipping Details</h2><div class="flex flex-col gap-3"><input type="text" placeholder="Full name" class="w-full border px-3 py-2 rounded-lg" /><input type="text" placeholder="Address" class="w-full border px-3 py-2 rounded-lg" /><div class="grid grid-cols-2 gap-2"><input type="text" placeholder="City" class="border px-3 py-2 rounded-lg" /><input type="text" placeholder="ZIP" class="border px-3 py-2 rounded-lg" /></div></div></div><div><h2 class="fw-700 fs-lg mb-4">Order Summary</h2><div class="p-4 border rounded-lg"><div class="flex items-center justify-between mb-2"><span>Subtotal</span><span>$129.97</span></div><div class="flex items-center justify-between mb-2"><span>Shipping</span><span class="text-success">Free</span></div><div class="border-t pt-2 flex items-center justify-between fw-700"><span>Total</span><span>$129.97</span></div></div></div></div>'
  },
  {
    id: 'ecom-product-detail', category: 'ecommerce', title: 'Product Detail', description: 'Product detail page with image gallery and info.',
    tags: ['product', 'detail', 'gallery', 'info'],
    html: '<div class="p-6 grid grid-cols-2 gap-8"><div><div class="bg-muted h-64 rounded-xl flex items-center justify-center text-muted mb-3">📷 Main Image</div><div class="flex gap-2"><div class="bg-muted w-16 h-16 rounded-lg flex items-center justify-center text-muted fs-sm">📷</div><div class="bg-muted w-16 h-16 rounded-lg flex items-center justify-center text-muted fs-sm">📷</div><div class="bg-muted w-16 h-16 rounded-lg flex items-center justify-center text-muted fs-sm">📷</div></div></div><div><h1 class="fw-700 fs-2xl mb-2">Premium Headphones</h1><div class="flex items-center gap-1 mb-3">★★★★★ <span class="text-muted fs-sm">(256 reviews)</span></div><div class="fw-700 fs-2xl text-primary mb-4">$149.99</div><p class="text-muted fs-sm mb-4">High-quality wireless headphones with noise cancellation.</p><div class="flex gap-2 mb-4"><span class="badge border">Black</span><span class="badge border">White</span><span class="badge border">Blue</span></div><button class="bg-primary text-white px-8 py-3 rounded-lg fw-600 w-full">Add to Cart</button></div></div>'
  },
  {
    id: 'ecom-category', category: 'ecommerce', title: 'Category Page', description: 'Product category listing with sidebar filters.',
    tags: ['category', 'filter', 'listing', 'sidebar'],
    html: '<div class="p-6 flex gap-6"><div class="w-48"><h3 class="fw-600 fs-sm mb-3">Filters</h3><div class="flex flex-col gap-2"><span class="fs-sm">Price Range</span><div class="flex gap-2"><input type="text" placeholder="Min" class="w-full border px-2 py-1 rounded fs-sm" /><input type="text" placeholder="Max" class="w-full border px-2 py-1 rounded fs-sm" /></div><span class="fs-sm mt-2">Category</span><label class="flex items-center gap-2 fs-sm"><input type="checkbox" /> Electronics</label><label class="flex items-center gap-2 fs-sm"><input type="checkbox" /> Clothing</label></div></div><div class="flex-1"><div class="grid grid-cols-3 gap-4"><div class="p-3 border rounded-lg"><div class="bg-muted h-24 rounded mb-2"></div><div class="fw-600 fs-sm">Product</div><div class="fw-700 fs-sm">$29.99</div></div><div class="p-3 border rounded-lg"><div class="bg-muted h-24 rounded mb-2"></div><div class="fw-600 fs-sm">Product</div><div class="fw-700 fs-sm">$39.99</div></div><div class="p-3 border rounded-lg"><div class="bg-muted h-24 rounded mb-2"></div><div class="fw-600 fs-sm">Product</div><div class="fw-700 fs-sm">$49.99</div></div></div></div></div>'
  },
  {
    id: 'ecom-review', category: 'ecommerce', title: 'Product Reviews', description: 'Product reviews with star ratings and user feedback.',
    tags: ['reviews', 'ratings', 'feedback', 'comments'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg mb-4">Customer Reviews</h2><div class="flex flex-col gap-4"><div class="p-4 border rounded-lg"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><div class="avatar avatar-sm">JD</div><span class="fw-600 fs-sm">John D.</span></div><div class="rating">★★★★★</div></div><p class="text-muted fs-sm">Amazing product! Exceeded my expectations. The quality is fantastic.</p></div><div class="p-4 border rounded-lg"><div class="flex items-center justify-between mb-2"><div class="flex items-center gap-2"><div class="avatar avatar-sm">AS</div><span class="fw-600 fs-sm">Alice S.</span></div><div class="rating">★★★★☆</div></div><p class="text-muted fs-sm">Great product for the price. Would recommend.</p></div></div></div>'
  },
  // ========== BLOG (6) ==========
  {
    id: 'blog-card', category: 'blog', title: 'Blog Card', description: 'Blog post card with image, category, and excerpt.',
    tags: ['blog', 'card', 'post', 'article'],
    html: '<div class="p-4 border rounded-lg" style="max-width:320px"><div class="bg-muted h-40 rounded-lg mb-3 flex items-center justify-center text-muted">Featured Image</div><span class="badge mb-2">Technology</span><h3 class="fw-600 mb-1">Getting Started with CSS Utilities</h3><p class="text-muted fs-sm mb-3">Learn how to build beautiful interfaces with utility-first CSS...</p><div class="flex items-center gap-2"><div class="avatar avatar-sm">TH</div><div><div class="fw-500 fs-sm">Toheed</div><div class="text-muted fs-xs">Jan 15, 2026</div></div></div></div>'
  },
  {
    id: 'blog-list', category: 'blog', title: 'Blog Post List', description: 'Blog listing with horizontal post cards.',
    tags: ['blog', 'list', 'posts', 'articles'],
    html: '<div class="p-6"><div class="flex items-center justify-between mb-4"><h2 class="fw-700 fs-xl">Latest Posts</h2><a href="#" class="text-primary fs-sm">View all</a></div><div class="flex flex-col gap-4"><div class="flex gap-4 p-4 border rounded-lg"><div class="bg-muted w-32 h-24 rounded-lg flex-shrink-0 flex items-center justify-center text-muted fs-sm">📷</div><div><span class="badge mb-1">Design</span><h3 class="fw-600">UI Design Trends for 2026</h3><p class="text-muted fs-sm">Exploring the latest trends in user interface design...</p><div class="text-muted fs-xs mt-1">Jan 10, 2026 · 5 min read</div></div></div><div class="flex gap-4 p-4 border rounded-lg"><div class="bg-muted w-32 h-24 rounded-lg flex-shrink-0 flex items-center justify-center text-muted fs-sm">📷</div><div><span class="badge mb-1">CSS</span><h3 class="fw-600">Mastering OKLCH Colors</h3><p class="text-muted fs-sm">A deep dive into the OKLCH color space...</p><div class="text-muted fs-xs mt-1">Jan 8, 2026 · 8 min read</div></div></div></div></div>'
  },
  {
    id: 'blog-article', category: 'blog', title: 'Blog Article', description: 'Full blog article with typographic layout.',
    tags: ['article', 'blog', 'content', 'reading'],
    html: '<article class="p-8" style="max-width:700px;margin:0 auto"><h1 class="fw-700 fs-2xl mb-2">The Future of CSS Frameworks</h1><div class="flex items-center gap-2 text-muted fs-sm mb-6"><span>Jan 12, 2026</span><span>·</span><span>12 min read</span></div><p class="fs-lg mb-4" style="line-height:1.8">CSS frameworks have evolved significantly over the past decade. From monolithic frameworks like Bootstrap to utility-first approaches like Tailwind, the landscape continues to shift toward more flexible solutions.</p><p class="mb-4" style="line-height:1.8">Folkline UI represents a new generation of CSS frameworks that combine the best aspects of both approaches — the convenience of pre-built components with the flexibility of utility classes.</p><blockquote class="p-4 border-l-4 border-primary bg-muted mb-4" style="font-style:italic">The best framework is the one you don\'t notice. — Unknown</blockquote><p style="line-height:1.8">With OKLCH color support, built-in accessibility, and a tiny footprint, Folkline UI is built for modern web development.</p></article>'
  },
  {
    id: 'blog-sidebar', category: 'blog', title: 'Blog with Sidebar', description: 'Blog layout with sidebar for categories and tags.',
    tags: ['blog', 'sidebar', 'categories', 'tags'],
    html: '<div class="p-6 flex gap-8"><div class="flex-1"><h2 class="fw-700 fs-xl mb-4">Recent Posts</h2><div class="flex flex-col gap-4"><div class="p-4 border rounded-lg"><h3 class="fw-600">Post Title One</h3><p class="text-muted fs-sm">Brief excerpt goes here...</p></div><div class="p-4 border rounded-lg"><h3 class="fw-600">Post Title Two</h3><p class="text-muted fs-sm">Brief excerpt goes here...</p></div></div></div><div class="w-56"><div class="mb-4"><h3 class="fw-600 fs-sm mb-2">Categories</h3><div class="flex flex-col gap-1"><a href="#" class="fs-sm text-muted">Design (12)</a><a href="#" class="fs-sm text-muted">CSS (8)</a><a href="#" class="fs-sm text-muted">JavaScript (6)</a></div></div><div><h3 class="fw-600 fs-sm mb-2">Tags</h3><div class="flex flex-wrap gap-1"><span class="badge">css</span><span class="badge">design</span><span class="badge">ui</span></div></div></div></div>'
  },
  {
    id: 'blog-featured', category: 'blog', title: 'Featured Post Hero', description: 'Large featured blog post hero section.',
    tags: ['blog', 'hero', 'featured', 'highlight'],
    html: '<section class="p-8"><div class="bg-muted rounded-2xl p-8" style="min-height:300px;display:flex;flex-direction:column;justify-content:flex-end"><span class="badge mb-2">Featured</span><h2 class="fw-700 fs-2xl mb-2" style="max-width:500px">The Complete Guide to Utility-First CSS</h2><p class="text-muted fs-sm mb-3">Everything you need to know about building with utility classes.</p><div class="flex items-center gap-2 text-muted fs-sm"><span>Toheed</span><span>·</span><span>Jan 5, 2026</span></div></div></section>'
  },
  {
    id: 'blog-author', category: 'blog', title: 'Author Card', description: 'Blog author profile card with bio and social links.',
    tags: ['author', 'profile', 'bio', 'card'],
    html: '<div class="flex items-center gap-4 p-6 border rounded-lg" style="max-width:450px"><div class="avatar avatar-lg">TH</div><div><h3 class="fw-600">Toheed</h3><p class="text-muted fs-sm mb-2">Frontend developer and CSS enthusiast. Building Folkline UI.</p><div class="flex gap-2 fs-sm"><a href="#" class="text-primary">Twitter</a><a href="#" class="text-primary">GitHub</a></div></div></div>'
  },
  // ========== ADMIN (7) ==========
  {
    id: 'admin-users', category: 'admin', title: 'User Management', description: 'Admin user list with search, filter, and actions.',
    tags: ['admin', 'users', 'management', 'table'],
    html: '<div class="p-6"><div class="flex items-center justify-between mb-4"><h2 class="fw-700 fs-lg">Users</h2><button class="bg-primary text-white px-4 py-2 rounded-lg fs-sm fw-500">+ Add User</button></div><div class="mb-3"><input type="search" placeholder="Search users..." class="w-full border px-3 py-2 rounded-lg" /></div><table class="table w-full"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th></th></tr></thead><tbody><tr><td>John Doe</td><td>john@example.com</td><td>Admin</td><td><span class="badge badge-primary">Active</span></td><td><a href="#" class="text-primary fs-sm">Edit</a></td></tr><tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td><td><span class="badge">Inactive</span></td><td><a href="#" class="text-primary fs-sm">Edit</a></td></tr><tr><td>Bob Wilson</td><td>bob@example.com</td><td>Viewer</td><td><span class="badge badge-primary">Active</span></td><td><a href="#" class="text-primary fs-sm">Edit</a></td></tr></tbody></table></div>'
  },
  {
    id: 'admin-settings', category: 'admin', title: 'Settings Page', description: 'Admin settings with tabs and form sections.',
    tags: ['admin', 'settings', 'config', 'tabs'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg mb-4">Settings</h2><div class="tabs mb-6"><button class="tab active" role="tab">General</button><button class="tab" role="tab">Security</button><button class="tab" role="tab">Notifications</button></div><div class="flex flex-col gap-4" style="max-width:500px"><div><label class="fs-sm fw-500 mb-1 d-block">Site Name</label><input type="text" value="My App" class="w-full border px-3 py-2 rounded-lg" /></div><div><label class="fs-sm fw-500 mb-1 d-block">Description</label><textarea rows="3" class="w-full border px-3 py-2 rounded-lg">A short description</textarea></div><div class="flex items-center justify-between"><span class="fs-sm">Enable dark mode</span><label class="switch"><input type="checkbox" checked /><span class="switch-slider"></span></label></div><button class="bg-primary text-white px-6 py-2 rounded-lg fw-600 fs-sm" style="width:fit-content">Save Changes</button></div></div>'
  },
  {
    id: 'admin-analytics', category: 'admin', title: 'Admin Analytics', description: 'Admin analytics with charts and data summaries.',
    tags: ['admin', 'analytics', 'charts', 'data'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg mb-4">Analytics</h2><div class="grid grid-cols-4 gap-4 mb-6"><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Page Views</div><div class="fw-700 fs-xl">284K</div><div class="text-success fs-sm">↑ 12%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Visitors</div><div class="fw-700 fs-xl">142K</div><div class="text-success fs-sm">↑ 8%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Bounce Rate</div><div class="fw-700 fs-xl">32%</div><div class="text-destructive fs-sm">↑ 2%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Avg Session</div><div class="fw-700 fs-xl">4m 23s</div><div class="text-success fs-sm">↑ 5%</div></div></div><div class="border rounded-lg p-6 flex items-center justify-center" style="height:240px"><div class="text-muted">📊 Traffic Chart</div></div></div>'
  },
  {
    id: 'admin-roles', category: 'admin', title: 'Roles & Permissions', description: 'Admin role management with permissions matrix.',
    tags: ['admin', 'roles', 'permissions', 'access'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg mb-4">Roles & Permissions</h2><table class="table w-full"><thead><tr><th>Role</th><th>Users</th><th>Permissions</th><th></th></tr></thead><tbody><tr><td class="fw-600">Admin</td><td>3</td><td class="fs-sm">Read, Write, Delete, Manage</td><td><button class="text-primary fs-sm">Edit</button></td></tr><tr><td class="fw-600">Editor</td><td>12</td><td class="fs-sm">Read, Write</td><td><button class="text-primary fs-sm">Edit</button></td></tr><tr><td class="fw-600">Viewer</td><td>45</td><td class="fs-sm">Read</td><td><button class="text-primary fs-sm">Edit</button></td></tr></tbody></table></div>'
  },
  {
    id: 'admin-invoices', category: 'admin', title: 'Invoices', description: 'Invoice list with status and amounts.',
    tags: ['admin', 'invoices', 'billing', 'payments'],
    html: '<div class="p-6"><div class="flex items-center justify-between mb-4"><h2 class="fw-700 fs-lg">Invoices</h2><button class="border px-4 py-2 rounded-lg fs-sm fw-500">Export</button></div><table class="table w-full"><thead><tr><th>Invoice</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead><tbody><tr><td>INV-001</td><td>Jan 1, 2026</td><td>$499.00</td><td><span class="badge badge-primary">Paid</span></td></tr><tr><td>INV-002</td><td>Jan 15, 2026</td><td>$249.00</td><td><span class="badge">Pending</span></td></tr><tr><td>INV-003</td><td>Feb 1, 2026</td><td>$499.00</td><td><span class="badge badge-destructive">Overdue</span></td></tr></tbody></table></div>'
  },
  {
    id: 'admin-audit', category: 'admin', title: 'Audit Log', description: 'Activity audit log with timestamps and actions.',
    tags: ['admin', 'audit', 'log', 'activity'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg mb-4">Audit Log</h2><div class="flex flex-col"><div class="flex items-center gap-3 p-3 border-b"><div class="flex-1"><span class="fw-500 fs-sm">John Doe</span><span class="text-muted fs-sm"> created a new project</span></div><div class="text-muted fs-xs">2 min ago</div></div><div class="flex items-center gap-3 p-3 border-b"><div class="flex-1"><span class="fw-500 fs-sm">Jane Smith</span><span class="text-muted fs-sm"> updated settings</span></div><div class="text-muted fs-xs">15 min ago</div></div><div class="flex items-center gap-3 p-3"><div class="flex-1"><span class="fw-500 fs-sm">System</span><span class="text-muted fs-sm"> backup completed</span></div><div class="text-muted fs-xs">1 hour ago</div></div></div></div>'
  },
  {
    id: 'admin-login-history', category: 'admin', title: 'Login History', description: 'User login history with device and location info.',
    tags: ['admin', 'login', 'history', 'security'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg mb-4">Login History</h2><table class="table w-full"><thead><tr><th>User</th><th>Device</th><th>IP</th><th>Time</th></tr></thead><tbody><tr><td>john@example.com</td><td>Chrome / macOS</td><td>192.168.1.1</td><td class="text-muted fs-sm">2 min ago</td></tr><tr><td>jane@example.com</td><td>Safari / iOS</td><td>10.0.0.1</td><td class="text-muted fs-sm">1 hour ago</td></tr></tbody></table></div>'
  },
  // ========== PORTFOLIO (6) ==========
  {
    id: 'portfolio-minimal', category: 'portfolio', title: 'Minimal Portfolio', description: 'Clean minimalist portfolio with grid of projects.',
    tags: ['portfolio', 'minimal', 'projects', 'gallery'],
    html: '<div class="p-8"><header class="text-center mb-8"><h1 class="fw-700 fs-3xl mb-1">Alex Morgan</h1><p class="text-muted">Design Engineer</p></header><div class="grid grid-cols-3 gap-4"><div class="bg-muted h-48 rounded-xl flex items-center justify-center text-muted">Project 1</div><div class="bg-muted h-48 rounded-xl flex items-center justify-center text-muted">Project 2</div><div class="bg-muted h-48 rounded-xl flex items-center justify-center text-muted">Project 3</div><div class="bg-muted h-48 rounded-xl flex items-center justify-center text-muted">Project 4</div><div class="bg-muted h-48 rounded-xl flex items-center justify-center text-muted">Project 5</div><div class="bg-muted h-48 rounded-xl flex items-center justify-center text-muted">Project 6</div></div></div>'
  },
  {
    id: 'portfolio-creative', category: 'portfolio', title: 'Creative Portfolio', description: 'Creative portfolio with hero and featured work.',
    tags: ['portfolio', 'creative', 'hero', 'work'],
    html: '<div class="p-8"><section class="mb-8"><div class="flex items-center justify-between mb-6"><span class="fw-700">Portfolio</span><nav class="flex gap-4 text-muted fs-sm"><a href="#">Work</a><a href="#">About</a><a href="#">Contact</a></nav></div><h1 class="fw-700 fs-3xl mb-2">I design & build digital experiences</h1><p class="text-muted fs-lg mb-4">UI/UX designer & frontend developer</p><button class="bg-primary text-white px-6 py-3 rounded-lg fw-600">View My Work</button></section><div class="grid grid-cols-2 gap-4"><div class="bg-muted h-56 rounded-xl"></div><div class="bg-muted h-56 rounded-xl"></div></div></div>'
  },
  {
    id: 'portfolio-photography', category: 'portfolio', title: 'Photography Portfolio', description: 'Photography portfolio with full-bleed image grid.',
    tags: ['portfolio', 'photography', 'gallery', 'images'],
    html: '<div class="p-4"><div class="flex items-center justify-between mb-4"><h1 class="fw-700 fs-lg">Sarah Lens</h1><nav class="flex gap-3 text-muted fs-sm"><a href="#">Portfolio</a><a href="#">About</a><a href="#">Contact</a></nav></div><div class="grid grid-cols-3 gap-2"><div class="bg-muted h-48 rounded-lg"></div><div class="bg-muted h-64 rounded-lg"></div><div class="bg-muted h-48 rounded-lg"></div><div class="bg-muted h-64 rounded-lg"></div><div class="bg-muted h-48 rounded-lg"></div><div class="bg-muted h-64 rounded-lg"></div></div></div>'
  },
  {
    id: 'portfolio-agency', category: 'portfolio', title: 'Agency Portfolio', description: 'Design agency portfolio with services and team.',
    tags: ['portfolio', 'agency', 'services', 'team'],
    html: '<div class="p-8"><header class="text-center mb-8"><span class="badge mb-2">✦ Design Agency</span><h1 class="fw-700 fs-3xl mb-2">We create brands that matter</h1><p class="text-muted fs-lg">Strategy, design, and development for modern businesses.</p></header><div class="grid grid-cols-3 gap-6 mb-8"><div class="text-center p-6 border rounded-lg"><span class="fs-2xl mb-2 d-block">🎨</span><h3 class="fw-600 mb-1">Brand Design</h3><p class="text-muted fs-sm">Logos, identity, and brand guidelines.</p></div><div class="text-center p-6 border rounded-lg"><span class="fs-2xl mb-2 d-block">🌐</span><h3 class="fw-600 mb-1">Web Design</h3><p class="text-muted fs-sm">Responsive websites and web apps.</p></div><div class="text-center p-6 border rounded-lg"><span class="fs-2xl mb-2 d-block">📱</span><h3 class="fw-600 mb-1">App Design</h3><p class="text-muted fs-sm">Mobile app UI/UX design.</p></div></div></div>'
  },
  {
    id: 'portfolio-freelancer', category: 'portfolio', title: 'Freelancer Portfolio', description: 'Freelancer profile with skills, testimonials, and contact.',
    tags: ['portfolio', 'freelancer', 'skills', 'testimonials'],
    html: '<div class="p-8" style="max-width:800px;margin:0 auto"><div class="text-center mb-6"><div class="avatar avatar-lg mb-3" style="width:64px;height:64px;margin:0 auto 12px">JD</div><h1 class="fw-700 fs-2xl">Jane Doe</h1><p class="text-muted">Full-Stack Developer & UI Designer</p></div><div class="flex justify-center gap-2 mb-6"><span class="badge">React</span><span class="badge">Node.js</span><span class="badge">CSS</span><span class="badge">TypeScript</span></div><div class="p-4 border rounded-lg mb-4"><p class="text-muted fs-sm" style="font-style:italic">"Jane delivered exceptional work on our project. Highly recommended!"</p><div class="fw-500 fs-sm mt-2">— Client</div></div><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Hire Me</button></div>'
  },
  {
    id: 'portfolio-showcase', category: 'portfolio', title: 'Project Showcase', description: 'Detailed project showcase with description and results.',
    tags: ['portfolio', 'showcase', 'project', 'case-study'],
    html: '<div class="p-8" style="max-width:700px;margin:0 auto"><div class="bg-muted h-48 rounded-xl mb-6 flex items-center justify-center text-muted">Project Preview</div><span class="badge mb-2">Case Study</span><h1 class="fw-700 fs-2xl mb-2">E-Commerce Redesign</h1><p class="text-muted mb-4">A complete redesign of an e-commerce platform resulting in 40% increase in conversion rate.</p><div class="grid grid-cols-3 gap-4 mb-4"><div class="text-center p-4 border rounded-lg"><div class="fw-700 fs-xl">40%</div><div class="text-muted fs-sm">Conversion ↑</div></div><div class="text-center p-4 border rounded-lg"><div class="fw-700 fs-xl">2.5x</div><div class="text-muted fs-sm">Page Speed</div></div><div class="text-center p-4 border rounded-lg"><div class="fw-700 fs-xl">98%</div><div class="text-muted fs-sm">A11y Score</div></div></div></div>'
  },
  // ========== COMPONENT (7) ==========
  {
    id: 'comp-navbar', category: 'component', title: 'Navigation Bar', description: 'Responsive navigation bar with dropdown.',
    tags: ['nav', 'navbar', 'navigation', 'responsive'],
    html: '<nav class="flex items-center justify-between p-4 border-b"><div class="fw-700">Brand</div><div class="flex items-center gap-4"><a href="#" class="text-muted fs-sm">Home</a><a href="#" class="text-muted fs-sm">About</a><a href="#" class="text-muted fs-sm">Services</a><a href="#" class="text-muted fs-sm">Contact</a></div><button class="bg-primary text-white px-4 py-2 rounded-lg fs-sm fw-500">Get Started</button></nav>'
  },
  {
    id: 'comp-sidebar-nav', category: 'component', title: 'Sidebar Navigation', description: 'Vertical sidebar with grouped navigation links.',
    tags: ['sidebar', 'nav', 'vertical', 'menu'],
    html: '<div class="w-56 p-4 border rounded-lg"><div class="fw-600 fs-sm mb-3">Navigation</div><div class="flex flex-col gap-1"><a href="#" class="flex items-center gap-2 p-2 rounded bg-primary text-white fs-sm">🏠 Dashboard</a><a href="#" class="flex items-center gap-2 p-2 rounded fs-sm text-muted">📊 Analytics</a><a href="#" class="flex items-center gap-2 p-2 rounded fs-sm text-muted">👥 Users</a><a href="#" class="flex items-center gap-2 p-2 rounded fs-sm text-muted">⚙️ Settings</a></div></div>'
  },
  {
    id: 'comp-stats-row', category: 'component', title: 'Stats Row', description: 'Horizontal row of stat cards with icons.',
    tags: ['stats', 'metrics', 'row', 'cards'],
    html: '<div class="grid grid-cols-4 gap-4 p-4"><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Revenue</div><div class="fw-700 fs-2xl">$48K</div><div class="text-success fs-sm">↑ 12%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Orders</div><div class="fw-700 fs-2xl">1,294</div><div class="text-success fs-sm">↑ 8%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Visitors</div><div class="fw-700 fs-2xl">24K</div><div class="text-destructive fs-sm">↓ 3%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Conversion</div><div class="fw-700 fs-2xl">3.2%</div><div class="text-success fs-sm">↑ 0.5%</div></div></div>'
  },
  {
    id: 'comp-testimonial', category: 'component', title: 'Testimonial Card', description: 'Customer testimonial card with avatar and quote.',
    tags: ['testimonial', 'quote', 'card', 'review'],
    html: '<div class="p-6 border rounded-lg" style="max-width:400px"><div class="flex items-center gap-3 mb-4"><div class="avatar">JD</div><div><div class="fw-600 fs-sm">John Doe</div><div class="text-muted fs-xs">CEO at Company</div></div></div><p class="text-muted fs-sm" style="font-style:italic">"This product completely transformed our workflow. The results exceeded our expectations."</p><div class="rating mt-3">★★★★★</div></div>'
  },
  {
    id: 'comp-hero-banner', category: 'component', title: 'Hero Banner', description: 'Full-width hero banner with background image and CTA.',
    tags: ['hero', 'banner', 'cta', 'background'],
    html: '<section class="bg-primary text-white p-12 rounded-2xl text-center"><span class="badge bg-white text-primary mb-2 fw-600 fs-xs">New Release</span><h1 class="fw-700 fs-3xl mb-3">Build Beautiful UIs</h1><p class="fs-lg mb-4" style="opacity:.9">Start building with the most intuitive CSS framework.</p><button class="bg-white text-primary px-6 py-3 rounded-lg fw-600">Get Started Free</button></section>'
  },
  {
    id: 'comp-pricing-card', category: 'component', title: 'Pricing Card', description: 'Single pricing tier card with feature list.',
    tags: ['pricing', 'card', 'tier', 'features'],
    html: '<div class="p-6 border rounded-lg text-center" style="max-width:300px"><span class="badge mb-2">Pro Plan</span><div class="fw-700 fs-3xl mb-2">$49<span class="fs-sm fw-400 text-muted">/mo</span></div><p class="text-muted fs-sm mb-4">For growing teams</p><ul class="flex flex-col gap-2 mb-4 text-left"><li class="flex items-center gap-2 fs-sm">✓ Unlimited projects</li><li class="flex items-center gap-2 fs-sm">✓ 100GB storage</li><li class="flex items-center gap-2 fs-sm">✓ Priority support</li></ul><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Get Started</button></div>'
  },
  {
    id: 'comp-team-grid', category: 'component', title: 'Team Grid', description: 'Team member grid with photos and roles.',
    tags: ['team', 'grid', 'members', 'cards'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg text-center mb-6">Our Team</h2><div class="grid grid-cols-4 gap-6"><div class="text-center"><div class="avatar avatar-lg" style="width:60px;height:60px;margin:0 auto 8px">JD</div><div class="fw-600 fs-sm">John Doe</div><div class="text-muted fs-xs">CEO</div></div><div class="text-center"><div class="avatar avatar-lg" style="width:60px;height:60px;margin:0 auto 8px">JS</div><div class="fw-600 fs-sm">Jane Smith</div><div class="text-muted fs-xs">Designer</div></div><div class="text-center"><div class="avatar avatar-lg" style="width:60px;height:60px;margin:0 auto 8px">BW</div><div class="fw-600 fs-sm">Bob Wilson</div><div class="text-muted fs-xs">Developer</div></div><div class="text-center"><div class="avatar avatar-lg" style="width:60px;height:60px;margin:0 auto 8px">AL</div><div class="fw-600 fs-sm">Alice Lee</div><div class="text-muted fs-xs">Marketing</div></div></div></div>'
  },
  // ========== MARKETING (7) ==========
  {
    id: 'mkt-email', category: 'marketing', title: 'Email Campaign', description: 'Marketing email layout with header and CTA buttons.',
    tags: ['email', 'campaign', 'marketing', 'newsletter'],
    html: '<div class="p-8" style="max-width:600px;margin:0 auto;background:var(--card)"><div class="p-6 border rounded-lg"><div class="text-center mb-4"><div class="fw-700 fs-lg mb-1">Newsletter</div><p class="text-muted fs-sm">Monthly updates from our team</p></div><h2 class="fw-700 fs-xl mb-2">February 2026 Update</h2><p class="text-muted fs-sm mb-4">We\'ve shipped some exciting new features this month. Here\'s what\'s new:</p><div class="flex flex-col gap-3 mb-4"><div class="p-3 bg-muted rounded-lg"><div class="fw-600 fs-sm">✨ New Dashboard</div><div class="text-muted fs-xs">Completely redesigned analytics view</div></div><div class="p-3 bg-muted rounded-lg"><div class="fw-600 fs-sm">🚀 Performance Boost</div><div class="text-muted fs-xs">40% faster page loads</div></div></div><button class="w-full bg-primary text-white py-3 rounded-lg fw-600">Read Full Update</button></div></div>'
  },
  {
    id: 'mkt-landing-page', category: 'marketing', title: 'Marketing Landing', description: 'Full marketing landing with feature sections.',
    tags: ['marketing', 'landing', 'features', 'cta'],
    html: '<section class="p-8"><div class="text-center mb-8"><h1 class="fw-700 fs-3xl mb-2">Grow Your Business</h1><p class="text-muted fs-lg mb-4">The all-in-one platform for modern marketing teams.</p><button class="bg-primary text-white px-6 py-3 rounded-lg fw-600">Start Free Trial</button></div><div class="grid grid-cols-3 gap-6"><div class="p-6 border rounded-lg text-center"><span class="fs-2xl mb-2 d-block">📊</span><h3 class="fw-600 mb-1">Analytics</h3><p class="text-muted fs-sm">Track your performance metrics.</p></div><div class="p-6 border rounded-lg text-center"><span class="fs-2xl mb-2 d-block">📧</span><h3 class="fw-600 mb-1">Email</h3><p class="text-muted fs-sm">Send campaigns to your audience.</p></div><div class="p-6 border rounded-lg text-center"><span class="fs-2xl mb-2 d-block">🔗</span><h3 class="fw-600 mb-1">Social</h3><p class="text-muted fs-sm">Manage all social channels.</p></div></div></section>'
  },
  {
    id: 'mkt-feature', category: 'marketing', title: 'Feature Highlight', description: 'Product feature highlight with screenshot and description.',
    tags: ['marketing', 'feature', 'product', 'highlight'],
    html: '<div class="p-8 grid grid-cols-2 gap-8 items-center"><div><span class="badge mb-2">Feature</span><h2 class="fw-700 fs-2xl mb-2">Real-time Collaboration</h2><p class="text-muted fs-lg mb-4">Work together with your team in real-time. See changes as they happen.</p><ul class="flex flex-col gap-2"><li class="flex items-center gap-2 fs-sm">✓ Live cursors</li><li class="flex items-center gap-2 fs-sm">✓ Instant sync</li><li class="flex items-center gap-2 fs-sm">✓ Version history</li></ul></div><div class="bg-muted h-64 rounded-xl flex items-center justify-center text-muted">Product Screenshot</div></div>'
  },
  {
    id: 'mkt-comparison', category: 'marketing', title: 'Comparison Table', description: 'Product comparison table with checkmarks.',
    tags: ['marketing', 'comparison', 'table', 'features'],
    html: '<div class="p-8" style="max-width:700px;margin:0 auto"><h2 class="fw-700 fs-xl text-center mb-4">Compare Plans</h2><table class="table w-full"><thead><tr><th>Feature</th><th class="text-center">Free</th><th class="text-center">Pro</th><th class="text-center">Enterprise</th></tr></thead><tbody><tr><td>Projects</td><td class="text-center">3</td><td class="text-center">∞</td><td class="text-center">∞</td></tr><tr><td>Storage</td><td class="text-center">5GB</td><td class="text-center">100GB</td><td class="text-center">Custom</td></tr><tr><td>Support</td><td class="text-center">Email</td><td class="text-center">Priority</td><td class="text-center">24/7</td></tr><tr><td>API Access</td><td class="text-center">✗</td><td class="text-center">✓</td><td class="text-center">✓</td></tr></tbody></table></div>'
  },
  {
    id: 'mkt-cta', category: 'marketing', title: 'CTA Section', description: 'Call-to-action section with gradient background.',
    tags: ['marketing', 'cta', 'call-to-action', 'gradient'],
    html: '<section class="bg-primary text-white p-12 rounded-2xl text-center"><h2 class="fw-700 fs-2xl mb-2">Ready to get started?</h2><p class="fs-lg mb-4" style="opacity:.9">Join thousands of happy customers today.</p><div class="flex justify-center gap-3"><button class="bg-white text-primary px-6 py-3 rounded-lg fw-600">Start Free Trial</button><button class="border border-white text-white px-6 py-3 rounded-lg fw-600">Talk to Sales</button></div></section>'
  },
  {
    id: 'mkt-webinar', category: 'marketing', title: 'Webinar Card', description: 'Webinar registration card with date and time.',
    tags: ['marketing', 'webinar', 'event', 'registration'],
    html: '<div class="p-6 border rounded-lg" style="max-width:380px"><div class="flex items-center gap-3 mb-3"><span class="fs-2xl">🎥</span><div><div class="fw-600 fs-sm">Free Webinar</div><div class="text-muted fs-xs">March 15, 2026 · 2PM EST</div></div></div><h3 class="fw-700 mb-2">Mastering CSS Utilities</h3><p class="text-muted fs-sm mb-4">Learn how to build faster with utility-first CSS.</p><button class="w-full bg-primary text-white py-2 rounded-lg fw-600 fs-sm">Register Now</button></div>'
  },
  {
    id: 'mkt-case-study', category: 'marketing', title: 'Case Study Card', description: 'Case study card with results and testimonial.',
    tags: ['marketing', 'case-study', 'results', 'card'],
    html: '<div class="p-6 border rounded-lg" style="max-width:450px"><div class="flex items-center gap-3 mb-3"><div class="avatar">AC</div><div><div class="fw-600 fs-sm">Acme Corp</div><div class="text-muted fs-xs">Tech Industry</div></div></div><h3 class="fw-700 fs-lg mb-2">How Acme Corp Increased Revenue by 200%</h3><p class="text-muted fs-sm mb-3">By implementing our platform, they streamlined operations and doubled their revenue in just 3 months.</p><div class="grid grid-cols-3 gap-2 text-center"><div class="p-2 bg-muted rounded"><div class="fw-700">200%</div><div class="text-muted fs-xs">Revenue</div></div><div class="p-2 bg-muted rounded"><div class="fw-700">60%</div><div class="text-muted fs-xs">Efficiency</div></div><div class="p-2 bg-muted rounded"><div class="fw-700">4.9★</div><div class="text-muted fs-xs">Rating</div></div></div></div>'
  },
  // ========== ADDITIONAL CATEGORY SPREAD (3 more to reach ~65) ==========
  {
    id: 'dashboard-sales', category: 'dashboard', title: 'Sales Dashboard', description: 'Sales performance dashboard with trends.',
    tags: ['sales', 'performance', 'dashboard', 'trends'],
    html: '<div class="p-6"><h2 class="fw-700 fs-lg mb-4">Sales Performance</h2><div class="flex items-center justify-between mb-4"><div class="flex gap-2"><button class="px-3 py-1 border rounded-lg fs-sm bg-primary text-white">7 days</button><button class="px-3 py-1 border rounded-lg fs-sm">30 days</button></div></div><div class="grid grid-cols-3 gap-4 mb-4"><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Revenue</div><div class="fw-700 fs-xl">$128,450</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Growth</div><div class="fw-700 fs-xl text-success">+18%</div></div><div class="p-4 border rounded-lg"><div class="text-muted fs-sm">Forecast</div><div class="fw-700 fs-xl">$152K</div></div></div><div class="border rounded-lg p-6 flex items-center justify-center" style="height:200px"><div class="text-muted">📈 Trend Chart</div></div></div>'
  },
  {
    id: 'landing-features', category: 'landing', title: 'Features Page', description: 'Landing page focused on feature grid layout.',
    tags: ['features', 'grid', 'landing', 'showcase'],
    html: '<section class="p-8"><div class="text-center mb-8"><h1 class="fw-700 fs-2xl mb-2">Everything you need</h1><p class="text-muted fs-lg">Powerful features for modern teams.</p></div><div class="grid grid-cols-2 gap-6" style="max-width:700px;margin:0 auto"><div class="flex gap-3"><span class="fs-xl">⚡</span><div><h3 class="fw-600 fs-sm mb-1">Lightning Fast</h3><p class="text-muted fs-xs">Optimized for speed and performance.</p></div></div><div class="flex gap-3"><span class="fs-xl">🔒</span><div><h3 class="fw-600 fs-sm mb-1">Secure by Default</h3><p class="text-muted fs-xs">Enterprise-grade security built in.</p></div></div><div class="flex gap-3"><span class="fs-xl">📊</span><div><h3 class="fw-600 fs-sm mb-1">Deep Analytics</h3><p class="text-muted fs-xs">Understand your data better.</p></div></div><div class="flex gap-3"><span class="fs-xl">🔌</span><div><h3 class="fw-600 fs-sm mb-1">Integrations</h3><p class="text-muted fs-xs">Connect with your favorite tools.</p></div></div></div></section>'
  },
  {
    id: 'admin-notifications', category: 'admin', title: 'Notifications Center', description: 'Admin notification center with grouped alerts.',
    tags: ['admin', 'notifications', 'alerts', 'center'],
    html: '<div class="p-6" style="max-width:500px"><h2 class="fw-700 fs-lg mb-4">Notifications</h2><div class="flex flex-col gap-1"><div class="flex items-start gap-3 p-3 border-b"><div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div><div><div class="fw-500 fs-sm">New user registered</div><div class="text-muted fs-xs">5 min ago</div></div></div><div class="flex items-start gap-3 p-3 border-b"><div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div><div><div class="fw-500 fs-sm">Payment received</div><div class="text-muted fs-xs">1 hour ago</div></div></div><div class="flex items-start gap-3 p-3"><div class="w-2 h-2 rounded-full bg-muted mt-2 flex-shrink-0"></div><div><div class="fw-500 fs-sm">System update completed</div><div class="text-muted fs-xs">2 hours ago</div></div></div></div></div>'
  },
]
