/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'uc-dark': '#1a0a2e',
        'uc-purple': '#2d0a4e',
        'uc-purple-light': '#4a1270',
        'uc-green': '#39ff14',
        'uc-cream': '#fdf8f0',
        'uc-lavender': '#f0e8ff',
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
