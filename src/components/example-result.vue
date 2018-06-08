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
  data() {
    return {
      showResult: false,
    }
  },
  computed: {
    resultIFrameHtml() {
      const iframe = document.createElement('iframe')
      const html = `
        <!DOCTYPE html>
        <body>
          ${this.html}
          <script src="https://cdn.jsdelivr.net/npm/vue"><\/script>
          <script>${this.js}<\/script>
          <style>
            ${this.css}
          </style>
        </body>
      `
      iframe.src =
        'data:text/html;charset=utf-8,' +
        encodeURIComponent(html).replace(/'/g, '%27')
      return iframe.outerHTML
    },
  },
}
</script>

<template>
  <button
    v-if="!showResult"
    :class="$style.button"
    @click.stop="showResult = true"
  >Show Result</button>
  <div
    v-else
    :class="$style.result"
    v-html="resultIFrameHtml"
  />
</template>

<style lang="scss" module>
.result {
  width: 100%;

  iframe {
    width: 100%;
    border: none;
  }
}

.button {
  width: 100%;
}
</style>
