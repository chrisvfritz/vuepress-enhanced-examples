<script>
import VueExampleSimple from './components/vue-example-simple'

export default {
  components: {
    VueExampleSimple,
  },
}
</script>



<template>
  <VueExampleSimple
    html="
      <div id=~app~>
        <blog-posts></blog-posts>
      </div>
    "
    js="
      Vue.component('blog-posts', {
        data() {
          return {
            posts: []
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
          <div class=~test~>
            [[ posts ]]
          </div>
        `
      })

      new Vue({
        el: '#app'
      })
    "
  />
</template>
