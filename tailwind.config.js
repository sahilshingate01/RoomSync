/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-void': 'var(--bg-void)',
        'bg-deep': 'var(--bg-deep)',
        'bg-card': 'var(--bg-card)',
        'border-glass': 'var(--border-glass)',
        'blue-primary': 'var(--blue-primary)',
        'blue-vivid': 'var(--blue-vivid)',
        'blue-electric': 'var(--blue-electric)',
        'violet-primary': 'var(--violet)',
        'teal-primary': 'var(--teal)',
        'gray-400': 'var(--gray-400)',
        'gray-600': 'var(--gray-600)',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
