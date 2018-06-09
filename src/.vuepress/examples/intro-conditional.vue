<template>
  <div id="app">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
const app = new Vue({
  el: '#app',
  data: {
    seen: true,
  },
})
</script>
