import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '../router'
import modal from './plugins/index'
import context from './plugins/context'

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(context)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
