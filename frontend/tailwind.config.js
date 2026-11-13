/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mars: {
          900: '#0c0c10',
          800: '#15151e',
          700: '#1f1f2e',
          600: '#2d2d42',
          500: '#e05315', // Vibrant Mars rust
          400: '#ff7733',
          300: '#ffa173',
          accent: '#00d2ff',
          hazard: '#ef4444',
          caution: '#f59e0b',
          safe: '#10b981',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
