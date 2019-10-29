
const handlebars = require('handlebars')

function compile (html) {
  return handlebars.compile(html)
}

module.exports = {
  compile,
}