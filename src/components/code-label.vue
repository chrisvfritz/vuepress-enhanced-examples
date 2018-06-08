<script>
import store from '@store'

export default {
  props: {
    lang: {
      type: String,
      required: true,
    },
  },
  computed: {
    languageHandlers() {
      return {
        js: `js (${store.jsStyle})`,
      }
    },
    text() {
      return this.languageHandlers[this.lang] || this.lang
    },
  },
  methods: {
    toggleLangStyle() {
      if (this.lang === 'js') {
        event.stopPropagation()
        store.jsStyle = store.jsStyle === 'es5' ? 'modern' : 'es5'
      }
    },
  },
}
</script>

<template>
  <span
    :class="[
      $style.label,
      { [$style.canToggle]: languageHandlers[lang] }
    ]"
    @click="toggleLangStyle"
  >{{ text }}</span>
</template>

<style lang="scss" module>
.label {
  position: absolute;
  top: 0.4em;
  right: 0.4em;
  font-size: 0.8em;
  line-height: 1;
  color: #aaa;
  text-transform: uppercase;

  &.canToggle {
    cursor: pointer;

    &:hover {
      color: #eee;
    }
  }
}
</style>
