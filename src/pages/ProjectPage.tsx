import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsBySlug } from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? projectsBySlug[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="desktop">
        <div className="window"><div className="window-content"><p>404 – project not found</p><button className="back-link" onClick={() => navigate('/portfolio')}>← Back</button></div></div>
      </div>
    );
  }

  return (
    <div className="desktop">
      <div className="window">
        <div className="title-bar"><span className="title-bar-text">{project.title}.exe</span><div><button>_</button><button>□</button><button>✕</button></div></div>
        <div className="window-content">
          <button className="back-link" onClick={() => navigate('/portfolio')}>← Back to portfolio</button>
          <h1>{project.title}</h1>
          <div style={{ fontSize: '11px', marginBottom: '1rem' }}>{project.type} · {project.year} · {project.status}</div>
          <p>{project.longDescription ?? project.description}</p>
          <hr />
          <h2>Tech stack</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tags.map(tag => <span key={tag} style={{ background: '#ece9d8', padding: '2px 6px', fontSize: '10px' }}>{tag}</span>)}
          </div>
          {project.features && (
            <>
              <h2>Features</h2>
              <ul className="skill-list">
                {project.features.map(f => <li key={f}>✔ {f}</li>)}
              </ul>
            </>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="btn-classic" style={{ display: 'inline-block', marginTop: '1rem' }}>Visit live site →</a>
          )}
        </div>
      </div>
      <div className="taskbar"><button className="start-button" onClick={() => window.location.href='/'}>Start</button><span>Project Detail</span></div>
    </div>
  );
}