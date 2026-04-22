import { useEffect, useRef } from 'react'

const hobbies = [
  {
    title: 'Muay Thai',
    description: 'The discipline, repetition, and sharpness of training keeps me fit, grounded and competitive.',
  },
  {
    title: 'Making music',
    description: 'I enjoy producing and experimenting with sound with friends as a creative outlet.',
  },
  {
    title: 'Running',
    description: 'Long runs help me reset, think clearly, and build consistency outside of work.',
  },
  {
    title: 'Electrical projects',
    description: 'I like building hands-on circuits and systems that turn theory into something tangible, such as radars, robotic hands, LI-dar visualisation softwares and more',
  },
  {
    title: 'Reading',
    description: 'Books sharpen how I think, whether its a book about technology, business, philosophy, or psychology, i always make sure to read at least 2 books a month.',
  },
]

export default function Hobbies() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
      id="hobbies"
      ref={ref}
      style={{
        padding: '7rem 0',
        maxWidth: '1100px',
        margin: '0 auto',
        scrollMarginTop: '6rem',
      }}
    >
      <div className="divider" style={{ marginBottom: '5rem' }} />

      <div
        className="two-column-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '5rem', alignItems: 'start' }}
      >
        <div>
          <p className="fade-up section-label" style={{ marginBottom: '0.75rem' }}>
            Hobbies
          </p>
          <h2
            className="fade-up"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1a1714',
              marginBottom: '1.5rem',
            }}
          >
            What I do
            <br />
            <em style={{ color: '#8a857e' }}>outside engineering.</em>
          </h2>
          <p
            className="fade-up"
            style={{
              color: '#8a857e',
              lineHeight: 1.8,
              fontWeight: 300,
              fontSize: '0.95rem',
              maxWidth: '440px',
            }}
          >
            Outside building software and systems, I like staying active, creating, and working on
            hands-on ideas that keep me curious.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="fade-up"
              style={{
                border: '1px solid #ddd8d0',
                background: 'rgba(255,255,255,0.35)',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: '1.4rem',
                  color: '#1a1714',
                  marginBottom: '0.55rem',
                }}
              >
                {hobby.title}
              </div>
              <p
                style={{
                  margin: 0,
                  color: '#8a857e',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                  fontWeight: 300,
                }}
              >
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}