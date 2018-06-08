<script>
import store from '@store'

export default {
  props: {
    html: {
      type: String,
      required: true,
    },
    js: {
      type: String,
      required: true,
    },
    css: {
      type: String,
      required: true,
    },
  },
  methods: {
    openPlayground() {
      if (this.resultDisabled) return

      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://codepen.io/pen/define'
      form.target = '_blank'

      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = 'data'

      // https://blog.codepen.io/documentation/api/prefill/
      input.value = JSON.stringify({
        title: 'Vue Example',
        editors: `${this.html ? 1 : 0}${this.css ? 1 : 0}${this.js ? 1 : 0}`,
        private: true,

        // HTML
        html: this.html,

        // JS
        js_external: 'https://unpkg.com/vue',
        js_pre_processor: store.jsStyle === 'modern' ? 'babel' : '',
        js: this.js,

        // CSS
        css: this.css,
        css_starter: 'normalize',
        css_prefix: 'autoprefixer',
        css_external: '',
      })

      form.appendChild(input)
      document.body.appendChild(form)
      form.submit()
      form.parentNode.removeChild(form)
    },
  },
}
</script>

<template>
  <button
    :class="$style.button"
    @click="openPlayground"
  >
    Open Playground
  </button>
</template>

<style lang="scss" module>
.button {
  width: 100%;
}
</style>
