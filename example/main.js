import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ComputedQuery from "../src"

import HelloWorld from "./components/HelloWorld"

Vue.use(VueRouter)
Vue.use(ComputedQuery, { prefix: 'fucking_', suffix: '_world' })

const routes = [
  { path: '/index', component: HelloWorld },
  { path: '*', redirect: '/index' }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
