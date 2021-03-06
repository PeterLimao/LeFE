import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRender from '@lefe-1/vue2-render'
import VueRouter from 'vue-router'
import routes from './pages/routes'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRender, {
  UILibrary: 'Element',
  http: axios.create()
})
Vue.use(VueRouter)
const router = new VueRouter({ routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
