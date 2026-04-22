import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projectsBySlug } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = slug ? projectsBySlug[slug] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#8a857e', marginBottom: '1rem' }}>Project not found.</p>
          <button className="btn-ghost" onClick={() => navigate('/')}>
            Back to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#f7f4ef', minHeight: '100vh' }}>
      <div
        style={{
          padding: '1.5rem 2.5rem',
          borderBottom: '1px solid #ddd8d0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          background: 'rgba(247,244,239,0.92)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
          gap: '1rem',
        }}
      >
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#8a857e',
            fontSize: '0.85rem',
            fontFamily: '"DM Sans", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          ← Back
        </button>
        <span
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: '1rem',
            color: '#1a1714',
          }}
        >
          Arslaan Juga
        </span>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 2.5rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: project.statusColor,
              }}
            />
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                color: project.statusColor,
              }}
            >
              {project.status}
            </span>
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                color: '#ddd8d0',
              }}
            >
              ·
            </span>
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                color: '#8a857e',
              }}
            >
              {project.type} · {project.year}
            </span>
          </div>

          <h1
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: '#1a1714',
              marginBottom: '1.5rem',
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#8a857e',
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: '560px',
            }}
          >
            {project.longDescription ?? project.description}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none' }}
            >
              Visit live site →
            </a>
          )}
        </div>

        <div style={{ height: '1px', background: '#ddd8d0', marginBottom: '4rem' }} />

        <div className="two-column-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <p
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8a857e',
                marginBottom: '1.25rem',
              }}
            >
              Tech stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8a857e',
                marginBottom: '1.25rem',
              }}
            >
              Features
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {(project.features ?? ['Project details coming soon']).map((feature, index) => (
                <div
                  key={feature}
                  style={{
                    padding: '0.7rem 0',
                    borderBottom: '1px solid #ddd8d0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.88rem',
                    color: '#1a1714',
                    fontWeight: 300,
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.62rem',
                      color: '#ddd8d0',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <div style={{ height: '1px', background: '#ddd8d0', marginBottom: '4rem' }} />
          <div
            style={{
              aspectRatio: '16 / 9',
              background: '#f0ece5',
              border: '1px solid #ddd8d0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                color: '#c8c2b8',
                letterSpacing: '0.08em',
              }}
            >
              SCREENSHOT / DEMO
            </span>
            <span style={{ fontSize: '0.78rem', color: '#c8c2b8', fontWeight: 300 }}>
              Add your media here
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
