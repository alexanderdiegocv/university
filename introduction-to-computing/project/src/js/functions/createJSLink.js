const createJSLink = src => {
  const script = document.createElement('script')
  script.setAttribute('type', 'module')
  script.setAttribute('src', src)
  return script
}

export default createJSLink
