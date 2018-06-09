const customBlock = require('markdown-it-custom-block')
const buildExampleComponent = require('./build-example-component')

module.exports = function useMarkdownItVueExample(md) {
  md.use(customBlock, {
    example(args) {
      return buildExampleComponent(args)
    },
  })
}
