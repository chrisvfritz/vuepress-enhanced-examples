const { transform } = require('buble')

module.exports = function modernToEs5(code) {
  return transform(code, {
    target: { ie: 9 },
    transforms: {
      templateString: false,
    },
    namedFunctionExpressions: false,
  }).code.replace(/\bthis\$1\b/g, 'vm')
}
