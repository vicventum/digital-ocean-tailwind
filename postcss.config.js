export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // ? Agrega configuración de CSS Nano para minificar el CSS para producción
    // eslint-disable-next-line no-undef
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
