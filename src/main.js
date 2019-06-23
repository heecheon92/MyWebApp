import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.vue = new Vue({
  router,
  render: h => h(App),
  data:
  {
    today: new Date().toLocaleString()
  }
}).$mount('#app')
