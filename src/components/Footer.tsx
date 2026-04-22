export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #ddd8d0',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: '1rem',
          color: '#1a1714',
        }}
      >
        Arslaan Juga
      </span>
      <span
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.68rem',
          color: '#8a857e',
          letterSpacing: '0.06em',
        }}
      >
        © {new Date().getFullYear()} · Built by Arslaan
      </span>
    </footer>
  )
}
