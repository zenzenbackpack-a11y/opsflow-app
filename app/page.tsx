"use client"

import { useState } from "react"

type Client = { name: string; initials: string; tone: string; company: string; status: string; revenue: string; progress: number }

const clients: Client[] = [
  { name: "Olivia Rhye", initials: "OR", tone: "rose", company: "Layers", status: "On track", revenue: "$12,400", progress: 82 },
  { name: "Phoenix Baker", initials: "PB", tone: "violet", company: "Catalog", status: "On track", revenue: "$8,950", progress: 74 },
  { name: "Lana Steiner", initials: "LS", tone: "amber", company: "Quotient", status: "At risk", revenue: "$6,240", progress: 48 },
  { name: "Demi Wilkinson", initials: "DW", tone: "sky", company: "Circooles", status: "On track", revenue: "$5,800", progress: 91 },
  { name: "Candice Wu", initials: "CW", tone: "emerald", company: "Hourglass", status: "On hold", revenue: "$4,100", progress: 36 },
]

const navItems = ["Overview", "Clients", "Projects", "Tasks", "Reports"]

export default function Dashboard() {
  const [active, setActive] = useState("Overview")
  const [period, setPeriod] = useState("This month")
  const [showAll, setShowAll] = useState(false)
  const visibleClients = showAll ? clients : clients.slice(0, 4)

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">O</span><span>opsflow</span></div>
        <div className="workspace"><span className="workspace-avatar">A</span><span>Acme Studio</span><span className="chevron">⌄</span></div>
        <nav aria-label="Primary navigation" className="nav-list">
          <p className="nav-label">Workspace</p>
          {navItems.map((item) => <button key={item} className={`nav-item ${active === item ? "active" : ""}`} onClick={() => setActive(item)}><span className={`nav-icon icon-${item.toLowerCase()}`} aria-hidden="true" />{item}{item === "Tasks" && <span className="nav-count">8</span>}</button>)}
          <p className="nav-label nav-label-spaced">Manage</p>
          {['Settings', 'Help center'].map((item) => <button key={item} className="nav-item" onClick={() => setActive(item)}><span className={`nav-icon icon-${item === 'Settings' ? 'settings' : 'help'}`} aria-hidden="true" />{item}</button>)}
        </nav>
        <div className="sidebar-bottom"><div className="upgrade-card"><span className="spark">✦</span><strong>Unlock more with Pro</strong><p>Get unlimited clients and advanced reports.</p><button>Upgrade plan</button></div><div className="user-row"><span className="avatar avatar-indigo">AM</span><div><strong>Alex Morgan</strong><span>admin@acme.co</span></div><span className="more">•••</span></div></div>
      </aside>

      <section className="main-content">
        <header className="topbar"><div className="mobile-brand"><span className="brand-mark">O</span> opsflow</div><div className="breadcrumbs"><span>Workspace</span><b>/</b><strong>{active}</strong></div><div className="top-actions"><button className="icon-button" aria-label="Search">⌕</button><button className="icon-button notification" aria-label="Notifications">♧<i /></button><button className="avatar avatar-indigo top-avatar">AM</button></div></header>
        <div className="content-wrap">
          <div className="page-heading"><div><p className="eyebrow">Thursday, October 9, 2026</p><h1>Good morning, Alex <span>✦</span></h1><p className="muted">Here&apos;s what&apos;s happening across your workspace.</p></div><div className="heading-actions"><button className="secondary-button">↗ <span>Export report</span></button><button className="primary-button">+ <span>New project</span></button></div></div>
          <div className="metrics-grid">
            <Metric title="Active clients" value="24" change="+12.5%" detail="vs. last month" icon="clients" />
            <Metric title="Monthly revenue" value="$48,290" change="+8.2%" detail="vs. last month" icon="revenue" />
            <Metric title="Tasks completed" value="186" change="+18.7%" detail="vs. last month" icon="tasks" />
            <Metric title="Avg. completion" value="92.4%" change="+4.1%" detail="vs. last month" icon="completion" />
          </div>
          <div className="dashboard-grid"><section className="panel revenue-panel"><div className="panel-header"><div><h2>Revenue overview</h2><p className="muted">Your income over the last 6 months</p></div><select value={period} onChange={(e) => setPeriod(e.target.value)} aria-label="Revenue period"><option>This month</option><option>Last 6 months</option><option>This year</option></select></div><div className="chart-wrap"><div className="y-axis"><span>$60k</span><span>$40k</span><span>$20k</span><span>$0</span></div><div className="chart"><div className="grid-lines"><i /><i /><i /><i /></div><svg viewBox="0 0 650 180" preserveAspectRatio="none" role="img" aria-label="Revenue trend rising from January to June"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8b5cf6" stopOpacity=".26"/><stop offset="1" stopColor="#8b5cf6" stopOpacity="0"/></linearGradient></defs><path d="M0 145 C50 130 70 138 110 110 S170 118 215 94 S260 103 305 74 S360 91 405 61 S470 78 515 44 S575 53 650 18 L650 180 L0 180 Z" fill="url(#area)"/><path d="M0 145 C50 130 70 138 110 110 S170 118 215 94 S260 103 305 74 S360 91 405 61 S470 78 515 44 S575 53 650 18" fill="none" stroke="#8b5cf6" strokeWidth="3" vectorEffect="non-scaling-stroke"/></svg><div className="x-axis"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div></div></div></section><section className="panel tasks-panel"><div className="panel-header"><div><h2>Task completion</h2><p className="muted">This month</p></div><button className="dots" aria-label="Task options">•••</button></div><div className="task-content"><div className="donut"><div><strong>82%</strong><span>completed</span></div></div><div className="task-legend"><div><span className="legend-dot purple" />Completed <b>186</b></div><div><span className="legend-dot lavender" />In progress <b>34</b></div><div><span className="legend-dot pale" />Not started <b>27</b></div></div></div><div className="task-footer"><span>247 total tasks</span><button onClick={() => setActive("Tasks")}>View tasks <b>→</b></button></div></section></div>
          <section className="panel clients-panel"><div className="panel-header"><div><h2>Client overview</h2><p className="muted">Keep track of your most valuable relationships.</p></div><button className="view-all" onClick={() => setShowAll(!showAll)}>{showAll ? "Show less" : "View all clients"} <b>→</b></button></div><div className="table-wrap"><table><thead><tr><th>Client</th><th>Status</th><th>Revenue</th><th>Progress</th><th aria-label="Actions" /></tr></thead><tbody>{visibleClients.map((client) => <tr key={client.name}><td><div className="client-cell"><span className={`avatar avatar-${client.tone}`}>{client.initials}</span><div><strong>{client.name}</strong><span>{client.company}</span></div></div></td><td><span className={`status status-${client.status.toLowerCase().replace(' ', '-')}`}><i />{client.status}</span></td><td className="revenue-cell">{client.revenue}</td><td><div className="progress-cell"><div className="progress"><i style={{ width: `${client.progress}%` }} /></div><span>{client.progress}%</span></div></td><td><button className="row-more" aria-label={`More options for ${client.name}`}>•••</button></td></tr>)}</tbody></table></div></section>
        </div>
      </section>
    </main>
  )
}

function Metric({ title, value, change, detail, icon }: { title: string; value: string; change: string; detail: string; icon: string }) { return <section className="metric-card"><div className={`metric-icon metric-${icon}`} aria-hidden="true">{icon === 'clients' ? '♧' : icon === 'revenue' ? '$' : icon === 'tasks' ? '✓' : '↗'}</div><p>{title}<span className="info">i</span></p><strong>{value}</strong><div className="metric-change"><span>{change}</span> {detail}</div></section> }
