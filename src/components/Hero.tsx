import { useEffect, useRef } from 'react'

const cards = [
  'Full-Stack Dev',
  'Entrepreneur',
  'Builder',
  'Open to Work',
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up')
    if (!els) return
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 120)
    })
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '8.5rem 2.5rem 5rem',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        scrollMarginTop: '6rem',
      }}
    >
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'linear-gradient(#ddd8d0 1px, transparent 1px), linear-gradient(90deg, #ddd8d0 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative' }}>
        <p className="fade-up section-label" style={{ marginBottom: '1.5rem' }}>
          Software Engineer · Entrepreneur
        </p>
        <h1
          className="fade-up"
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: '#1a1714',
            marginBottom: '2rem',
          }}
        >
          Arslaan
          <br />
          <em style={{ color: '#8a857e' }}>Ahmed.</em>
        </h1>

        <div
          className="fade-up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {cards.map((card) => (
            <span
              key={card}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8a857e',
                border: '1px solid #ddd8d0',
                padding: '0.5rem 1rem',
              }}
            >
              {card}
            </span>
          ))}
        </div>

        <div className="fade-up" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View my work
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch
          </button>
        </div>
      </div>

      <div
        className="fade-up hero-scroll-hint"
        style={{
          marginTop: '4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          alignSelf: 'flex-end',
        }}
      >
        <span className="section-label">scroll</span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: '#ddd8d0',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}