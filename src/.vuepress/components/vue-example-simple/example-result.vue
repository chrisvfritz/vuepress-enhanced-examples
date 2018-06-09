<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
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
      iframe.srcdoc = `
        <!DOCTYPE html>
        <body>
          ${this.html}
          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>
          <script>${this.js}<\/script>
          <script>
            (function(){
              var appNum = 1
              if (app instanceof Vue) {
                while(window.parent.window['app' + appNum] != null) {
                  appNum += 1
                }
                window.parent.window['app' + appNum] = app
                var appNoticeEl = document.createElement('div')
                appNoticeEl.style = 'position:fixed;top:0;right:0'
                appNoticeEl.textContent = 'app' + appNum
                document.body.appendChild(appNoticeEl)
              }
            })()
          <\/script>
          <style>
            ${this.css}
          </style>
        </body>
      `
      iframe.name = this.name
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
