const parseExampleArgs = require('./parse-example-args')
const parseExample = require('./parse-example')
const buildExampleAttrs = require('./build-example-attrs')

module.exports = function buildExampleComponent(args) {
  const { fileBaseName, attrs } = parseExampleArgs(args)
  const example = parseExample(fileBaseName)
  const exampleArgs = buildExampleAttrs(fileBaseName, example, attrs)
  return `<vue-example-simple ${exampleArgs}></vue-example-simple>`
}
