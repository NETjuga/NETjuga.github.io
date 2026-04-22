import { useEffect, useRef } from 'react'

const stats = [
  { value: '3+', label: 'Years coding' },
  { value: '7+', label: 'Projects shipped' },
  { value: '2', label: 'Live startups' },
  { value: '10k+', label: 'Users reached' },
  { value: '£10k+', label: 'Revenue generated' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.15 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '7rem 0', maxWidth: '1100px', margin: '0 auto' }}
    >
      <div className="divider" style={{ marginBottom: '5rem' }} />

      <div
        className="two-column-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}
      >
        <div>
          <p className="fade-up section-label" style={{ marginBottom: '1rem' }}>
            About
          </p>
          <h2
            className="fade-up"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#1a1714',
              marginBottom: '1.75rem',
            }}
          >
            Aspiring engineer
            <br />
            <em style={{ color: '#8a857e' }}>and builder.</em>
          </h2>

          <p
            className="fade-up"
            style={{
              color: '#8a857e',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
              fontWeight: 300,
              fontSize: '0.97rem',
            }}
          >
            I&apos;m Arslaan Ahmed — a software engineer with 3+ years of hands-on experience
            building full-stack systems, shipping products, and building apps people use.
          </p>
          <p
            className="fade-up"
            style={{
              color: '#8a857e',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
              fontWeight: 300,
              fontSize: '0.97rem',
            }}
          >
            I&apos;ve built e-commerce ventures, developed and deployed web apps used by real
            people, and written everything from Swift iOS apps to C++ network intrusion tools.
            I like making things that actually work.
          </p>
          <p
            className="fade-up"
            style={{
              color: '#8a857e',
              lineHeight: 1.8,
              fontWeight: 300,
              fontSize: '0.97rem',
            }}
          >
            Outside the code editor: I run, train Muay Thai, produce house and techno music,
            attend Hackathons, and read — from Dostoyevsky to electrical engineering manuals, many things spark my curiosity. 
          </p>
        </div>

        <div style={{ paddingTop: '3.5rem' }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="fade-up"
              style={{
                padding: '1.5rem 0',
                borderBottom: '1px solid #ddd8d0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <span
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: '2.8rem',
                  color: '#1a1714',
                  letterSpacing: '-0.03em',
                }}
              >
                {s.value}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#8a857e', fontWeight: 300 }}>
                {s.label}
              </span>
            </div>
          ))}

          <div
            className="fade-up"
            style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#4a7c59',
                animation: 'blink 2s ease-in-out infinite',
              }}
            />
            <span className="section-label">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}