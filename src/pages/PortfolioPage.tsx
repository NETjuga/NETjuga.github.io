import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import BackHome from '../components/BackHome';

export default function PortfolioPage() {
  return (
    <div className="desktop">
      <div className="window">
        <div className="title-bar">
          <span className="title-bar-text">portfolio.exe</span>
          <div className="title-bar-controls">
            <button>_</button><button>□</button><button>✕</button>
          </div>
        </div>
        <div className="window-content">
          <BackHome />
          <h1>Portfolio</h1>
          <p style={{ marginBottom: '1.5rem' }}>// selected work</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {projects.map(project => (
              <div key={project.slug} style={{ borderBottom: '1px solid #c0c0c0', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '1rem', margin: 0 }}>{project.title}</h2>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px' }}>{project.type} · {project.year}</span>
                </div>
                <p style={{ fontSize: '11px', margin: '0.5rem 0' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  {project.tags.map(tag => <span key={tag} style={{ fontSize: '9px', background: '#ece9d8', padding: '2px 4px' }}>{tag}</span>)}
                </div>
                {project.action !== 'none' && (
                  <Link to={`/project/${project.slug}`} style={{ fontSize: '10px' }}>🔍 Details →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="taskbar">
        <button className="start-button" onClick={() => window.location.href='/'}>Start</button>
        <span>Portfolio</span>
        <span className="taskbar-time">12:00 PM</span>
      </div>
    </div>
  );
}