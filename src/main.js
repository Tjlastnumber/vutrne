import Vue from 'vue'
import App from './App.vue'
import Plugin from '@/core/plugin'
import plugins from '@/plugins/index'
import router from '@/router'
import './floating-vue'
import './directive'
import './style/main.css'
import store from './store'

Vue.config.productionTip = false

Plugin.use(plugins)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
