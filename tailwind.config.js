/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'rgb(var(--neon-blue) / <alpha-value>)',
        'neon-purple': 'rgb(var(--neon-purple) / <alpha-value>)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'particle': 'particle 2s linear forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(var(--neon-blue), 0.3)',
        'neon-strong': '0 0 30px rgba(var(--neon-blue), 0.5)',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform',
      },
    },
  },
  plugins: [],
}