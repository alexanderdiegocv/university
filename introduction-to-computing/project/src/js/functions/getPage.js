import createCSSLink from './createCSSLink.js'
import createJSLink from './createJSLink.js'

const getPage = async page => {
  const readPage = await fetch(`./pages/html/${page.slice(1)}.html`)
  if (!readPage.ok) throw new Error('There was an error reading the file')
  return {
    name: page,
    html: await readPage.text(),
    styleLink: createCSSLink(`./pages/styles/${page.slice(1)}.css`),
    scriptLink: createJSLink(`./pages/js/${page.slice(1)}.js`)
  }
}

export default getPage
