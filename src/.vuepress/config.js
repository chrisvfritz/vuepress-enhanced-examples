const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')

module.exports = {
  title: 'VuePress Example Demo',
  configureWebpack: {
    resolve: {
      alias: require('../../aliases.config').webpack,
    },
  },
  markdown: {
    config: useMarkdownItVueExample,
  },
}
