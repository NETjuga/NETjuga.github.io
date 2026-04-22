import { useEffect, useRef } from 'react'

const technical = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'React / Node.js', level: 88 },
  { name: 'C++', level: 80 },
  { name: 'Database Systems', level: 82 },
  { name: 'Unreal Engine', level: 75 },
]

const other = [
  'Team Leadership',
  'Project Management',
  'Time Management',
  'Problem Solving',
  'Agile Methodology',
  'Code Review',
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60)
            })
            entry.target.querySelectorAll('.skill-bar-fill').forEach((el: Element, i) => {
              const bar = el as HTMLElement
              const level = bar.dataset.level || '0'
              setTimeout(() => {
                bar.style.width = `${level}%`
              }, 300 + i * 80)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: '7rem 0', maxWidth: '1100px', margin: '0 auto' }}
    >
      <div className="divider" style={{ marginBottom: '5rem' }} />

      <p className="fade-up section-label" style={{ marginBottom: '0.75rem' }}>
        Skills
      </p>
      <h2
        className="fade-up"
        style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: '#1a1714',
          marginBottom: '4rem',
        }}
      >
        What I work with
      </h2>

      <div className="two-column-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
        <div>
          <p className="fade-up section-label" style={{ marginBottom: '2rem' }}>
            Technical
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {technical.map((skill) => (
              <div key={skill.name} className="fade-up">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    gap: '1rem',
                  }}
                >
                  <span style={{ fontSize: '0.88rem', color: '#1a1714' }}>{skill.name}</span>
                  <span
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.72rem',
                      color: '#8a857e',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" data-level={skill.level} style={{ width: '0%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="fade-up section-label" style={{ marginBottom: '2rem' }}>
            Professional
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {other.map((skill, index) => (
              <div
                key={skill}
                className="fade-up"
                style={{
                  padding: '1rem 0',
                  borderBottom: '1px solid #ddd8d0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.65rem',
                    color: '#ddd8d0',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#1a1714', fontWeight: 300 }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
