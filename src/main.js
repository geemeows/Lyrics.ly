import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(Antd)
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/'

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
