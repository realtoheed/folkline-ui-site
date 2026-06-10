export default function Dashboard() {
  return (
    <main className="main-content-area">
      <div style={{ padding: '32px 48px 0' }}>
        <h1 style={{fontSize:'2.25rem',fontWeight:700,letterSpacing:'-.02em',marginBottom:8}}>Dashboard Demo</h1>
        <p style={{color:'var(--muted-foreground)',fontSize:'1rem',maxWidth:600,marginBottom:24}}>
          A fully functional dashboard demo built entirely with Folkline UI classes.
        </p>
      </div>
      <div className="dashboard-demo">
        <div className="flex" style={{minHeight:480}}>
          <div className="dash-sidebar" style={{width:200}}>
            <div className="dash-logo">✦ Acme Co</div>
            <div className="dash-link active">Dashboard</div>
            <div className="dash-link">Analytics</div>
            <div className="dash-link">Users</div>
            <div className="dash-link">Settings</div>
            <div className="dash-link" style={{marginTop:'auto'}}>Logout</div>
          </div>
          <div className="dash-main flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 style={{fontWeight:600,fontSize:'1.125rem'}}>Dashboard Overview</h2>
              <div className="flex gap-2">
                <select style={{padding:'6px 10px',border:'1px solid var(--border)',borderRadius:'8px',fontSize:'.8125rem',background:'var(--card)',fontFamily:'inherit',color:'inherit',outline:'none'}}>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="stat-card">
                <div style={{fontSize:'.8125rem',color:'var(--muted-foreground)',marginBottom:4}}>Revenue</div>
                <div className="stat-value">$48,290</div>
                <div style={{fontSize:'.75rem',color:'oklch(0.577 0.245 143.34)'}}>↑ 12.5% from last month</div>
              </div>
              <div className="stat-card">
                <div style={{fontSize:'.8125rem',color:'var(--muted-foreground)',marginBottom:4}}>Users</div>
                <div className="stat-value">2,847</div>
                <div style={{fontSize:'.75rem',color:'oklch(0.577 0.245 143.34)'}}>↑ 8.2% from last month</div>
              </div>
              <div className="stat-card">
                <div style={{fontSize:'.8125rem',color:'var(--muted-foreground)',marginBottom:4}}>Active Now</div>
                <div className="stat-value">142</div>
                <div style={{fontSize:'.75rem',color:'var(--muted-foreground)'}}>Real-time visitors</div>
              </div>
              <div className="stat-card">
                <div style={{fontSize:'.8125rem',color:'var(--muted-foreground)',marginBottom:4}}>Conversion</div>
                <div className="stat-value">3.24%</div>
                <div style={{fontSize:'.75rem',color:'oklch(0.577 0.245 143.34)'}}>↑ 0.8% improvement</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card" style={{minHeight:260}}>
                <div style={{fontWeight:600,marginBottom:12}}>Revenue Chart</div>
                <div style={{height:200,display:'flex',alignItems:'flex-end',gap:4,paddingTop:20}}>
                  {[40,65,45,80,55,70,90].map((h,i) => (
                    <div key={i} style={{flex:1,height:`${h}%`,background:'var(--primary)',borderRadius:'4px 4px 0 0',opacity:.7}}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2" style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
              <div className="stat-card" style={{minHeight:260}}>
                <div style={{fontWeight:600,marginBottom:12}}>Recent Activity</div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div style={{width:6,height:6,borderRadius:'50%',background:'var(--primary)',flexShrink:0}}></div>
                    <div className="flex-1"><div style={{fontSize:'.8125rem',fontWeight:500}}>New user registered</div><div style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>2 minutes ago</div></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div style={{width:6,height:6,borderRadius:'50%',background:'var(--primary)',flexShrink:0}}></div>
                    <div className="flex-1"><div style={{fontSize:'.8125rem',fontWeight:500}}>Payment received — $249.00</div><div style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>15 minutes ago</div></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div style={{width:6,height:6,borderRadius:'50%',background:'var(--muted-foreground)',flexShrink:0}}></div>
                    <div className="flex-1"><div style={{fontSize:'.8125rem',fontWeight:500}}>System backup completed</div><div style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>1 hour ago</div></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div style={{width:6,height:6,borderRadius:'50%',background:'var(--muted-foreground)',flexShrink:0}}></div>
                    <div className="flex-1"><div style={{fontSize:'.8125rem',fontWeight:500}}>Report generated</div><div style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>3 hours ago</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
