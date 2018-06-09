<template>
  <div id="app">
    <blog-posts></blog-posts>
  </div>
</template>

<script>
Vue.component('blog-posts', {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.posts = posts
      })
  },
  template: `
    <div class="test">
      [[ posts ]]
    </div>
  `,
})

new Vue({
  el: '#app',
})
</script>
