<template>
  <div id="app">
    {{ message }}
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
