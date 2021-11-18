const renderPage = (page, pageContainer) => {
  pageContainer.innerHTML = page.html
  document.body.append(page.scriptLink)
}

export default renderPage
