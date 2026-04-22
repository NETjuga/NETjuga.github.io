/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: '#f7f4ef',
        ink: '#1a1714',
        stone: '#8a857e',
        warm: '#e8e2d9',
        rust: '#c4622d',
      },
    },
  },
  plugins: [],
}
