import BaseButton from './BaseButton.vue'
import BaseTextbox from './BaseTextbox.vue'

const components = [ BaseButton, BaseTextbox ]

export default {
  install(Vue) {
    components.forEach(c => {
      Vue.component(c.name, c)
    })
  },

  plugin: {
    name: 'Base Components',
    components,
  },
}
