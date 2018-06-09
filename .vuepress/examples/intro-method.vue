<template>
  <div id="app">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    },
  },
})
</script>
