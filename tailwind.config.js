/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#000000',
          card: '#0c0c0e',
          cardBorder: '#1c1c22',
          cardHover: '#16161c',
          textMain: '#f5f5f7',
          textMuted: '#86868b',
          blue: '#0071e3',
          blueHover: '#0077ed',
          gold: '#e2b714',
          cyan: '#2997ff',
          emerald: '#30d158',
          crimson: '#ff453a',
          purple: '#bf5af2'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace']
      },
      boxShadow: {
        'apple-glow': '0 0 50px -10px rgba(0, 113, 227, 0.25)',
        'apple-card': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'gold-glow': '0 0 30px -5px rgba(226, 183, 20, 0.3)'
      }
    },
  },
  plugins: [],
}
