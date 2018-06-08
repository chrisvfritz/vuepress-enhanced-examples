<script>
import Prism from 'prismjs'
import CodeLabel from './code-label'
import store from '@store'

export default {
  components: {
    CodeLabel,
  },
  props: {
    lang: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    prismLang() {
      return (
        {
          js: 'javascript',
        }[this.lang] || this.lang
      )
    },
    highlightedCode() {
      return Prism.highlight(
        this.code,
        Prism.languages[this.prismLang],
        this.prismLang
      )
    },
    jsStyle() {
      return store.jsStyle
    },
  },
}
</script>

<template>
  <div
    v-if="!disabled && code"
    :class="[
      $style.preWrapper,
      { [$style[`${jsStyle}Code`]]: lang === 'js' }
    ]"
  >
    <pre
      :class="[$style.pre, `language-${prismLang}`]"
    ><code
      ref="code"
      v-html="highlightedCode"
    /><CodeLabel
      :lang="lang"
    /></pre>
  </div>
</template>

<style src="prismjs/themes/prism-tomorrow.css">
</style>

<style lang="scss" module>
.preWrapper {
  position: relative;
}

.pre {
  margin: 0;
}

.es5Code {
  // stylelint-disable-next-line selector-class-pattern
  :global(.token.template-string) {
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      left: 100%;
      min-width: 500px;
      margin-left: 2em;
      color: yellow;
      white-space: initial;
      pointer-events: none;
      content: 'NOTE: We use template literals to improve readability, but in older browsers you should use multiline strings or string concatenation instead.';
      background: #2d2d2d;
      box-shadow: 0 0 2em 1em #2d2d2d;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:hover::after {
      pointer-events: all;
      opacity: 1;
    }
  }
}
</style>
