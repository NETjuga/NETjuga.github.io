import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.25rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s ease, border-bottom 0.3s ease',
        background: scrolled ? 'rgba(247,244,239,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #ddd8d0' : '1px solid transparent',
      }}
    >
      <button
        onClick={() => scroll('home')}
        style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: '1.1rem',
          color: '#1a1714',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '-0.01em',
        }}
      >
        Arslaan Juga
      </button>

      <div className="navbar-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { label: 'About', id: 'about' },
          { label: 'Projects', id: 'projects' },
          { label: 'Skills', id: 'skills' },
          { label: 'Contact', id: 'contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scroll(item.id)}
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
