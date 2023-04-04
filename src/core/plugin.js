import Vue from 'vue'

class Plugin {
  constructor (plugin) {
    const { name, components } = plugin.plugin
    this.name = name
    this.components = components
    this.plugin = plugin
    this.install(Vue)
  }

  install (Vue) {
    const plugins = Vue.prototype.$plugins || []
    if (plugins.includes(this)) return plugins
    plugins.push(this)

    Vue.use(this.plugin)
    Vue.prototype.$plugins = plugins
    return plugins
  }
}

Plugin.use = (plugins) => {
  plugins = plugins || []

  if (!Array.isArray(plugins)) plugins = [ plugins ]

  plugins.forEach((plugin) => {
    const p = new Plugin(plugin)
    p.install(Vue)
  })
}

export default Plugin
