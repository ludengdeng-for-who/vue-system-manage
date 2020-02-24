import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.scss'
import http from '@/api/config'
import './mock'
Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(ELementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
