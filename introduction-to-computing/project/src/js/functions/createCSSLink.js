const createCSSLink = href => {
  const styles = document.createElement('link')
  styles.setAttribute('rel', 'stylesheet')
  styles.setAttribute('href', href)
  document.head.append(styles)
  return styles
}

export default createCSSLink
