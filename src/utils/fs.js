
const fs = require('fs')
const path = require('path')

const { COMPONENTS, VIEWS, DIST } = global

function listComponents () {
  return fs.readdirSync(COMPONENTS)
}

function listViews () {
  return fs.readdirSync(VIEWS).map((name) => {
    return name.replace('.html', '')
  })
}

function readView (name) {
  const file = path.join(VIEWS, `${name}.html`)
  return fs.readFileSync(file, 'utf-8')
}

function readComponent (name) {
  const file = path.join(COMPONENTS, name, `${name}.html`)
  return fs.readFileSync(file, 'utf-8')
}

function writeView (name, content) {
  const file = path.join(DIST, `${name}.html`)
  return fs.writeFileSync(file, content, 'utf-8')
}

module.exports = {
  listComponents,
  listViews,
  readView,
  readComponent,
  writeView,
}
