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
      <div id=&quot;app&quot;>
        <blog-posts></blog-posts>
      </div>
    "
    js="
      Vue.component('blog-posts', {
        data: function () {
          return {
            posts: []
          }
        },
        created: function () {
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
              return response.json()
            })
            .then(function (posts) {
              this.posts = posts
            }.bind(this))
        },
        template: '<div>[[ posts ]]</div>'
      })

      new Vue({
        el: '#app'
      })
    "
  />
</template>
