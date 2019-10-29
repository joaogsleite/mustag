
const args = process.argv

function getOption(...options) {
  const argIndex = args.findIndex((arg) => {
    return options.includes(arg)
  })
  return args[argIndex + 1]
}

function getArg (index) {
  if (index < 0) {
    return args[args.length + index]
  } else {
    return args[index]
  }
}

module.exports = {
  getOption,
  getArg,
}