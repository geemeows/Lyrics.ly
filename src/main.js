import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import socialShare from 'vue-social-sharing'

// Font Awesome Dependancies
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Antd)
Vue.use(socialShare)

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
