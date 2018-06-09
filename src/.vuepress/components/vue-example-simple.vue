<template>
  <div>
    <template v-if="!linkOnly">
      <CodeBlock
        v-for="(code, lang) in blocks"
        v-if="code"
        :key="lang"
        :lang="lang"
        :code="code"
        :disabled="codeBlockDisabled(lang)"
      />
      <ExampleResult
        v-if="shouldRenderResult"
        :name="name"
        v-bind="compatBlocks"
      />
    </template>
    <PlaygroundButton
      v-if="shouldRenderResult"
      :name="name"
      v-bind="blocks"
    />
  </div>
</template>

<script>
import CodeBlock from './vue-example-simple/code-block'
import ExampleResult from './vue-example-simple/example-result'
import PlaygroundButton from './vue-example-simple/playground-button'
import store from '@store'

export default {
  components: {
    CodeBlock,
    ExampleResult,
    PlaygroundButton,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
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
    langVariants() {
      return {
        html: {
          default: this.unsanitize(this.html),
        },
        js: {
          es5: this.unsanitize(this.es5Js),
          modern: this.unsanitize(this.modernJs),
        },
        css: {
          default: this.unsanitize(this.css),
        },
      }
    },
    blocks() {
      return {
        html: this.formatDirectives(this.langVariants.html.default),
        js: this.formatDirectives(this.langVariants.js[store.jsStyle]),
        css: this.langVariants.css.default,
      }
    },
    compatBlocks() {
      return {
        html: this.langVariants.html.default,
        js: this.langVariants.js.es5,
        css: this.langVariants.css.default,
      }
    },
    shouldRenderResult() {
      return (
        !this.resultDisabled && !this.htmlOnly && !this.jsOnly && !this.cssOnly
      )
    },
  },
  methods: {
    unsanitize(code) {
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
    formatDirectives(code) {
      return store.useDirectiveShorthands
        ? code.replace(/\bv-bind:\b/g, ':').replace(/\bv-on:\b/g, '@')
        : code
    },
  },
}
</script>
