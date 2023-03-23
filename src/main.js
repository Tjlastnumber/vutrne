import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import './style/main.css'

Vue.config.productionTip = false
Vue.use(FloatingVue, {
  themes: {
    'sub-menu': {
      $extend: 'menu',
      placement: 'right-start'
    }
  }
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
