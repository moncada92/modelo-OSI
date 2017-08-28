import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'

import routes from './routes'

Vue.use(VueRouter)

//en Realidad recibe un objeto que es routes:routes
const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
