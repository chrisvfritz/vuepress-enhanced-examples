<script>
import lebab from 'lebab'
// import recast from 'recast'
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
      return this.prettifyJs(this.code)
    },
    modernCode() {
      return this.prettifyJs(this.modernizeEs5(this.code))
    },
    transformedCode() {
      return this[`${store.jsStyle}Code`]
    },
  },
  methods: {
    modernizeEs5(code) {
      return lebab.transform(code, [
        'let',
        'arrow',
        'for-of',
        'for-each',
        'arg-rest',
        'arg-spread',
        'obj-method',
        'obj-shorthand',
        'no-strict',
        'exponent',
        'multi-var',
      ]).code
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
