const flow = require('lodash/flow')
const sanitizeAttrValue = require('./sanitize-attr-value')
const modernToEs5 = require('./modern-to-es5')
const prettifyJs = require('./prettify-js')

module.exports = function buildExampleAttrs(
  fileBaseName,
  { html, js, css },
  attrs
) {
  return `
    name="${fileBaseName}"
    html="${sanitizeAttrValue(html)}"
    es5-js="${flow(
      modernToEs5,
      prettifyJs,
      sanitizeAttrValue
    )(js)}"
    modern-js="${flow(
      prettifyJs,
      sanitizeAttrValue
    )(js)}"
    css="${sanitizeAttrValue(css)}"
    ${attrs.replace(/,/g, ' ')}
  `
}
