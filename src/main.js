import Vue from 'vue'
import App from './app'

window.Vue = Vue

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production'

const app = new Vue({
  render: h => h(App),
}).$mount('#app')

// If running inside Cypress...
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands.
  window.__app__ = app
}
