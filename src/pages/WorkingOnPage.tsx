import BackHome from '../components/BackHome';
import { projects } from '../data/projects';

const active = projects.filter(p => p.status === 'Live' || p.status === 'Beta' || p.status === 'Building');

export default function WorkingOnPage() {
  return (
    <div className="desktop">
      <div className="window">
        <div className="title-bar"><span className="title-bar-text">active_projects.exe</span><div><button>_</button><button>□</button><button>✕</button></div></div>
        <div className="window-content">
          <BackHome />
          <h1>What I'm working on</h1>
          <ul className="info-list">
            {active.map(p => (
              <li key={p.slug}>
                <strong>{p.title}</strong> – {p.description}<br />
                <span style={{ fontSize: '9px', color: '#555' }}>{p.status} · {p.tags.join(', ')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="taskbar"><button className="start-button" onClick={() => window.location.href='/'}>Start</button><span>Active Projects</span></div>
    </div>
  );
}