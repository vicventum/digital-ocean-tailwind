/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  // 1-5.4 - Especificando los archivos que usarán las clases de Tailwind
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 2-2.3 - Agregando una clase de espaciado personalizada
      spacing: {
        'custom-size': '1.6rem'
      },
      fontFamily: {
        sans: "'Work Sans', sans-serif",
        cascadia: '"CascadiaCode"'
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-medium': '#1456ff',
        'do-blue-light': '#0069ff',
        'do-blue-lighter': '#f9fafe'
      }
    }
  },
  plugins: []
}
