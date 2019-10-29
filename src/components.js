
const { listComponents, readComponent } = require('./utils/fs')
const { compile } = require('./utils/templating')

const components = {}
listComponents().forEach((name) => {
  const html = readComponent(name)
  components[name] = compile(html)
})

module.exports = components