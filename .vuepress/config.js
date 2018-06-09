const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')

module.exports = {
  title: 'VuePress Enhanced Examples',
  configureWebpack: {
    resolve: {
      alias: require('../aliases.config').webpack,
    },
  },
  markdown: {
    config: useMarkdownItVueExample,
  },
  themeConfig: {
    sidebar: [['/', 'Guide'], ['/demos/intro', 'DEMO: Introduction']],
  },
}
