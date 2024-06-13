export function utilSrc(image) {
  const imgFiles = import.meta.glob('@/assets/img/**', {
    eager: true,
    import: 'default'
  })
  return imgFiles[`/src/assets/img/${image}`]
}
