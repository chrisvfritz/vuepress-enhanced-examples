<template>
  <CodeTransformer
    :html="processedHtml"
    :js="processedJs"
    :css="css"
  >
    <div slot-scope="transformedCode">
      <template v-if="!linkOnly">
        <CodeBlock
          v-for="(code, lang) in transformedCode"
          v-if="code"
          :key="lang"
          :lang="lang"
          :code="code"
          :disabled="$props[`${lang}Disabled`]"
        />
        <ExampleResult
          v-if="!resultDisabled"
          :html="processedHtml"
          :js="processedJs"
          :css="css"
        />
      </template>
      <PlaygroundButton
        v-if="!resultDisabled"
        v-bind="transformedCode"
      />
    </div>
  </CodeTransformer>
</template>

<script>
import CodeTransformer from './code-transformer'
import CodeBlock from './code-block'
import ExampleResult from './example-result'
import PlaygroundButton from './playground-button'

export default {
  components: {
    CodeTransformer,
    CodeBlock,
    ExampleResult,
    PlaygroundButton,
  },
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
    htmlDisabled: {
      type: Boolean,
      default: false,
    },
    jsDisabled: {
      type: Boolean,
      default: false,
    },
    cssDisabled: {
      type: Boolean,
      default: false,
    },
    resultDisabled: {
      type: Boolean,
      default: false,
    },
    linkOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    processedHtml() {
      return this.fixAttributeQuotes(this.fixInterpolations(this.html))
    },
    processedJs() {
      return this.fixAttributeQuotes(this.fixInterpolations(this.js))
    },
  },
  methods: {
    fixAttributeQuotes(code) {
      return code.replace(/=~/g, '="').replace(/~([>\s])/g, '"$1')
    },
    fixInterpolations(code) {
      return code.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}')
    },
  },
}
</script>
