<script>
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
      input.value = JSON.stringify({
        title: 'Vue Example',
        html: this.html,
        js_external: 'https://unpkg.com/vue',
        js_pre_processor: 'babel',
        js: this.js,
        // css_pre_processor: 'scss',
        css: this.css,
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
