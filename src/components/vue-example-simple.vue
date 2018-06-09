<template>
  <div>
    <template v-if="!linkOnly">
      <CodeBlock
        v-for="(code, lang) in langs"
        v-if="code"
        :key="lang"
        :lang="lang"
        :code="code"
        :disabled="codeBlockDisabled(lang)"
      />
      <ExampleResult
        v-if="shouldRenderResult"
        v-bind="langs"
      />
    </template>
    <PlaygroundButton
      v-if="shouldRenderResult"
      v-bind="langs"
    />
  </div>
</template>

<script>
import CodeBlock from './code-block'
import ExampleResult from './example-result'
import PlaygroundButton from './playground-button'
import store from '@store'

export default {
  components: {
    CodeBlock,
    ExampleResult,
    PlaygroundButton,
  },
  props: {
    html: {
      type: String,
      default: '',
    },
    es5Js: {
      type: String,
      default: '',
    },
    modernJs: {
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
    htmlOnly: {
      type: Boolean,
      default: false,
    },
    jsOnly: {
      type: Boolean,
      default: false,
    },
    cssOnly: {
      type: Boolean,
      default: false,
    },
    resultDisabled: {
      type: Boolean,
      default: false,
    },
    resultOnly: {
      type: Boolean,
      default: false,
    },
    linkOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    js() {
      return this[`${store.jsStyle}Js`]
    },
    langs() {
      return {
        html: this.unmangle(this.html),
        js: this.unmangle(this.js),
        css: this.unmangle(this.css),
      }
    },
    shouldRenderResult() {
      return (
        !this.resultDisabled && !this.htmlOnly && !this.jsOnly && !this.cssOnly
      )
    },
  },
  methods: {
    unmangle(code) {
      return code
        .replace(/&quot;/g, '"')
        .replace(/\[\[/g, '{{')
        .replace(/\]\]/g, '}}')
    },
    codeBlockDisabled(lang) {
      return (
        this[`${lang}Disabled`] ||
        (this.htmlOnly && lang !== 'html') ||
        (this.jsOnly && lang !== 'js') ||
        (this.cssOnly && lang !== 'css') ||
        this.resultOnly
      )
    },
  },
}
</script>
