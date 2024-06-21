/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
import tailwindForm from '@tailwindcss/forms'

export default {
  // Especificando los archivos que usarán las clases de Tailwind
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      // padding: '1.5rem'
      padding: {
        DEFAULT: '1.5rem',
        // ? Agregando padding personalizado para pantallas muy grandes
        '2xl': '6rem'
      }
    },
    extend: {
      // ? Agregando una clase de espaciado personalizada
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
      },
      // ? Agregando clase nueva para el box-shadow
      boxShadow: {
        input: '0 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)'
      },
      // ? Agregando clase nueva para tamaño personalizado
      width: {
        88: '22rem'
      },
      // ? Agregar timing function de transiciones personalizada
      transitionTimingFunction: {
        elastic: 'cubic-bezier(.3,1.03,.82,-0.29)'
      },
      // ? Agregando nueva animación
      animation: {
        fade: 'fade .15s cubic-bezier(0.4, 0, 0.2, 1);',
        'fade-reverse': 'fade .15s cubic-bezier(0.4, 0, 0.2, 1) reverse;',
        'move-left-linear': 'move-x linear infinite',
        'move-right-linear': 'move-x linear infinite reverse'
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        'move-x': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: [tailwindForm]
}
