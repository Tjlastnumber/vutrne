import Vue from 'vue'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

Vue.use(FloatingVue, {
  instanceMove: true,
  themes: {
    'sub-menu': {
      $extend: 'dropdown',
      triggers: [ 'hover', 'focus' ],
      popperTriggers: [ 'hover', 'focus' ],
      placement: 'right-start',
    },
  },
})
