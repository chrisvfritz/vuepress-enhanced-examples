const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')

module.exports = {
  title: 'VuePress Enhanced Examples',
  configureWebpack: {
    resolve: {
      alias: require('../aliases.config').webpack,
    },
  },
  markdown: {
    extendMarkdown: useMarkdownItVueExample,
  },
  themeConfig: {
    sidebar: [
      ['/', 'Guide'],
      ['/demos/intro', 'DEMO: Introduction'],
    ],
  },
}
