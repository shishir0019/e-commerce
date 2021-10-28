import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/tailwind.css'
import '@/assets/css/custom.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
    store.dispatch('initialization');
  },
  render: h => h(App)
}).$mount('#app')
