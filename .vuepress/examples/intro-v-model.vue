<template>
  <div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
})
</script>
