const { createDom, getAttributes, htmlToElement, copyStyleAndClasses } = require('./utils/dom')
const { listViews, readView, writeView } = require('./utils/fs')

const components = require('./components')

function parseView (html) {
  let replacedHtml
  while(replacedHtml !== html) {
    html = replacedHtml || html
    const document = createDom(html)
    for (const tag in components) {
      const compileComponent = components[tag]
      const elements = document.getElementsByTagName(tag)
      for (const element of elements) {
        const attributes = getAttributes(element)
        const result = compileComponent(attributes)
        const newElement = htmlToElement(result)
        copyStyleAndClasses(element, newElement)
        element.replaceWith(newElement)
      }
      replacedHtml = document.documentElement.innerHTML
    }
  }
  return html
}

listViews().forEach((name) => {
  const html = readView(name)
  const result = parseView(html)
  writeView(name, result)
})
