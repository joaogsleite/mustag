
const { JSDOM } = require('jsdom')

function createDom (html) {
  return new JSDOM(html).window.document
}

function getAttributes(elem) {
  const attributes = {}
  for (i=0; i<elem.attributes.length; i++) {
    attributes[elem.attributes[i].name] = elem.attributes[i].value
  }
  attributes.children = elem.innerHTML
  attributes.class = elem.class
  return attributes
}

function htmlToElement(html) {
  var template = new JSDOM().window.document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}

function copyStyleAndClasses (element, newElement) {
  const attributes = getAttributes(element)
  if (attributes.style) {
    newElement.style = attributes.style
  }
  element.classList.forEach((className) => {
    newElement.classList.add(className)
  })
}

module.exports = {
  createDom,
  getAttributes,
  htmlToElement,
  copyStyleAndClasses
}