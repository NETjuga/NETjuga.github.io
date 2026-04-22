import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project } from '../types/project'

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60)
            })
          }
        })
      },
      { threshold: 0.05 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleClick = (project: Project) => {
    if (project.action === 'external' && project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer')
    } else if (project.action === 'internal') {
      navigate(`/project/${project.slug}`)
    }
  }

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '7rem 0', maxWidth: '1100px', margin: '0 auto' }}
    >
      <div className="divider" style={{ marginBottom: '5rem' }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3.5rem',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p className="fade-up section-label" style={{ marginBottom: '0.75rem' }}>
            Projects
          </p>
          <h2
            className="fade-up"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1a1714',
            }}
          >
            Selected work
          </h2>
        </div>
        <p className="fade-up section-label">{projects.length} projects</p>
      </div>

      <div
        className="projects-table-head fade-up"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr auto',
          gap: '1rem',
          padding: '0.75rem 1.25rem',
          borderBottom: '1px solid #ddd8d0',
          borderTop: '1px solid #ddd8d0',
        }}
      >
        {['Project', 'Type', 'Year', 'Stack', 'Status'].map((heading) => (
          <span key={heading} className="section-label">
            {heading}
          </span>
        ))}
      </div>

      {projects.map((project) => (
        <div
          key={project.slug}
          className="fade-up project-card"
          onClick={() => handleClick(project)}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr auto',
            gap: '1rem',
            padding: '1.4rem 1.25rem',
            borderBottom: '1px solid #ddd8d0',
            alignItems: 'center',
            cursor: project.action === 'none' ? 'default' : 'pointer',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: '1.15rem',
                color: '#1a1714',
                letterSpacing: '-0.01em',
                marginBottom: '0.2rem',
              }}
            >
              {project.title}
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                color: '#8a857e',
                fontWeight: 300,
                maxWidth: '320px',
                lineHeight: 1.5,
              }}
            >
              {project.description}
            </div>
          </div>

          <span style={{ fontSize: '0.82rem', color: '#8a857e', fontWeight: 300 }}>
            {project.type}
          </span>

          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.75rem',
              color: '#8a857e',
            }}
          >
            {project.year}
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: project.statusColor,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                color: project.statusColor,
                whiteSpace: 'nowrap',
              }}
            >
              {project.status}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}
