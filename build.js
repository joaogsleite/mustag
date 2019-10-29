const fs = require('fs')
const { JSDOM } = require('jsdom')
const handlebars = require('handlebars')

const TEMPLATE = path.join(__dirname, 'mainView.html')
const VIEWS = path.join(__dirname, 'views')
const COMPONENTS = path.join(__dirname, 'components')
const DIST = path.join(__dirname, 'dist')

function htmlToElement(html) {
  var template = new JSDOM().window.document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
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

const components = {}
fs.readdirSync(COMPONENTS).forEach((name) => {
  const htmlFile = fs.readFileSync(path.join(COMPONENTS, name, `${name}.html`), 'utf-8')
  components[name] = handlebars.compile(htmlFile)
})

const template = handlebars.compile(fs.readFileSync(TEMPLATE, 'utf-8'))

fs.readdirSync(VIEWS).forEach((name) => {
  let html = fs.readFileSync(path.join(VIEWS, name), 'utf-8')
  let replacedHtml
  while(replacedHtml !== html) {
    html = replacedHtml || html
    const document = new JSDOM(html).window.document
    for (const tag in components) {
      const elements = document.getElementsByTagName(tag)
      for (const element of elements) {
        const attributes = getAttributes(element)
        const resultHtml = components[tag](attributes)
        const newElement = htmlToElement(resultHtml)
        if (attributes.style) {
          newElement.style = attributes.style
        }
        element.classList.forEach((className) => {
          newElement.classList.add(className)
        })
        element.replaceWith(newElement)
      }
      replacedHtml = document.documentElement.innerHTML
    }
  }
  fs.writeFileSync(path.join(DIST, name), template({children: html}))
})
