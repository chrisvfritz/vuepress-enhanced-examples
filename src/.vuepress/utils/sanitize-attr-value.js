const stripIndent = require('strip-indent')

module.exports = function sanitizeAttrValue(text) {
  return stripIndent(text)
    .replace(/"/g, '&quot;')
    .replace(/\{\{/g, '[[')
    .replace(/\}\}/g, ']]')
    .replace(/\/\/\n/g, '')
    .trim()
}
