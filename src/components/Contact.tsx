import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #ddd8d0',
    padding: '0.75rem 0',
    fontSize: '0.9rem',
    color: '#1a1714',
    outline: 'none',
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 300,
    transition: 'border-color 0.2s',
  } as const

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '7rem 0 5rem', maxWidth: '1100px', margin: '0 auto' }}
    >
      <div className="divider" style={{ marginBottom: '5rem' }} />

      <div className="two-column-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
        <div>
          <p className="fade-up section-label" style={{ marginBottom: '0.75rem' }}>
            Contact
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
            Let&apos;s build
            <br />
            <em style={{ color: '#8a857e' }}>something.</em>
          </h2>
          <p
            className="fade-up"
            style={{
              color: '#8a857e',
              lineHeight: 1.8,
              fontWeight: 300,
              fontSize: '0.95rem',
              marginBottom: '2.5rem',
            }}
          >
            Open to freelance projects, collaborations, and interesting conversations. Response
            time under 24 hours.
          </p>

          <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Email', value: 'arslaanjuga00@gmail.com' },
              { label: 'Phone', value: '07888108887' },
              { label: 'GitHub', value: 'github.com/Netjuga' },
            ].map((contact) => (
              <div key={contact.label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                <span className="section-label" style={{ minWidth: '60px' }}>
                  {contact.label}
                </span>
                <span style={{ fontSize: '0.88rem', color: '#1a1714', fontWeight: 300 }}>
                  {contact.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up">
          {sent ? (
            <div
              style={{
                padding: '3rem',
                border: '1px solid #ddd8d0',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: '1.5rem',
                  color: '#1a1714',
                  marginBottom: '0.5rem',
                }}
              >
                Message sent.
              </p>
              <p style={{ color: '#8a857e', fontSize: '0.85rem', fontWeight: 300 }}>
                I&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label className="section-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderBottomColor = '#1a1714')}
                  onBlur={(e) => (e.target.style.borderBottomColor = '#ddd8d0')}
                />
              </div>
              <div>
                <label className="section-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderBottomColor = '#1a1714')}
                  onBlur={(e) => (e.target.style.borderBottomColor = '#ddd8d0')}
                />
              </div>
              <div>
                <label className="section-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => (e.target.style.borderBottomColor = '#1a1714')}
                  onBlur={(e) => (e.target.style.borderBottomColor = '#ddd8d0')}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
