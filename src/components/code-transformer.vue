<script>
import stripIndent from 'strip-indent'

const CodeTransformerHtml = getCodeTransformerForLang('html')
const CodeTransformerJs = getCodeTransformerForLang('js')
const CodeTransformerCss = getCodeTransformerForLang('css')

export default {
  props: {
    html: {
      type: String,
      default: '',
    },
    js: {
      type: String,
      default: '',
    },
    css: {
      type: String,
      default: '',
    },
  },
  methods: {
    normalizeIndentation(code) {
      return stripIndent(code).trim()
    },
  },
  render(h) {
    return h(CodeTransformerHtml, {
      props: {
        code: this.normalizeIndentation(this.html),
      },
      scopedSlots: {
        default: transformedHtml =>
          h(CodeTransformerJs, {
            props: {
              code: this.normalizeIndentation(this.js),
            },
            scopedSlots: {
              default: transformedJs =>
                h(CodeTransformerCss, {
                  props: {
                    code: this.normalizeIndentation(this.css),
                  },
                  scopedSlots: {
                    default: transformedCss =>
                      this.$scopedSlots.default({
                        html: transformedHtml,
                        js: transformedJs,
                        css: transformedCss,
                      }),
                  },
                }),
            },
          }),
      },
    })
  },
}

function getCodeTransformerForLang(lang) {
  try {
    return require(`./code-transformer-${lang}`).default
  } catch (error) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error
    }
    return {
      name: `code-transformer-${lang}`,
      props: {
        code: {
          type: String,
          required: true,
        },
      },
      render() {
        return this.$scopedSlots.default(this.code)
      },
    }
  }
}
</script>
