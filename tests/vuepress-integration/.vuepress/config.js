const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')

module.exports = {
  title: 'Example Doc',
  configureWebpack: {
    resolve: {
      alias: require('../../../aliases.config').webpack,
    },
  },
  markdown: {
    config: useMarkdownItVueExample,
  },
}
