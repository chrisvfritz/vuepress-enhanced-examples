<script>
import { transform } from 'buble/dist/buble-browser.es'
import prettier from 'prettier/standalone'
import prettierParserBabylon from 'prettier/parser-babylon'
import store from '@store'

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  computed: {
    es5Code() {
      return this.prettifyJs(this.modernToEs5(this.code))
    },
    modernCode() {
      return this.prettifyJs(this.code)
    },
    transformedCode() {
      return this[`${store.jsStyle}Code`]
    },
  },
  methods: {
    modernToEs5(code) {
      return transform(code, {
        target: { ie: 9 },
        transforms: {
          templateString: false,
        },
        namedFunctionExpressions: false,
      }).code.replace(/this\$1/g, 'vm')
    },
    prettifyJs(code) {
      return prettier.format(code, {
        parser: 'babylon',
        plugins: [prettierParserBabylon],
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        proseWrap: 'never',
      })
    },
  },
  render() {
    return this.$scopedSlots.default(this.transformedCode)
  },
}
</script>
