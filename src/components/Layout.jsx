import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCalendarDays, faChartLine, faGear, faLightbulb, faMoon, faPlus, faRocket, faSeedling, faSun } from '@fortawesome/free-solid-svg-icons'

const links = [
  ['/', 'Overview', faChartLine],
  ['/diary', 'My diary', faBookOpen],
  ['/calendar', 'Calendar', faCalendarDays],
  ['/progress', 'Progress', faRocket],
  ['/notes', 'Knowledge notes', faLightbulb],
  ['/journey', 'My journey', faSeedling]
]

export default function Layout({ children, dark, onToggleTheme, onNewEntry }) {
  const location = useLocation()
  const title = { '/': 'Your learning overview', '/diary': 'My learning diary', '/calendar': 'Learning calendar', '/progress': 'Your progress', '/notes': 'Knowledge notes', '/journey': 'My learning journey' }[location.pathname] || 'Entry details'
  return <div className="app">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark"><FontAwesomeIcon icon={faSeedling} /></span><span>learn<span className="brand-accent">log</span></span></div>
      <div className="profile"><div className="avatar">JL</div><div><strong>Jordan Lee</strong><small>Curious learner</small></div></div>
      <nav>{links.map(([to, label, icon]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}><FontAwesomeIcon icon={icon} /><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom"><button className="new-button w-100 mb-2" onClick={onNewEntry}><FontAwesomeIcon icon={faPlus} /> New entry</button><button className="theme-toggle" onClick={onToggleTheme}><FontAwesomeIcon icon={dark ? faSun : faMoon} /> {dark ? 'Light mode' : 'Dark mode'}</button><div className="nav-item"><FontAwesomeIcon icon={faGear} /><span>Settings</span></div></div>
    </aside>
    <main className="main-content"><header className="topbar"><div><p className="eyebrow">{new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date())}</p><h1>{title}</h1></div><button className="new-button" onClick={onNewEntry}><FontAwesomeIcon icon={faPlus} /> New entry</button></header>{children}</main>
  </div>
}
