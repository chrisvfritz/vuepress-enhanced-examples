<script>
import Prism from 'prismjs'
import CodeLabel from './code-label'

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
  },
}
</script>

<template>
  <div
    v-if="!disabled && code"
    :class="$style.preWrapper"
  >
    <pre
      :class="[$style.pre, `language-${prismLang}`]"
    ><code
      v-html="highlightedCode"
    /><CodeLabel
      :lang="lang"
    /></pre>
  </div>
</template>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style lang="scss" module>
.preWrapper {
  position: relative;
}

.pre {
  margin: 0;
}
</style>
