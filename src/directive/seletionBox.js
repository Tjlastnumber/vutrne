import SelectionBox from '../components/SelectionBox.vue'

const _props = SelectionBox.props || SelectionBox.mixins[0].props
let _instance
const _options = {}

Object.keys(_props).forEach((k) => {
  const prop = _props[k]
  const dv = _props.default
  if (prop && prop.default !== null) {
    _options[k] = typeof dv === 'function' ? dv() : dv
  }
})

function getInstance (Vue, options) { /* eslint-disable-line */
  options = options || {}
  if (_instance && _instance.$el.parentNode) {
    Object.assign(_instance, _options, options)
  } else {
    _instance = new (Vue.extend(SelectionBox))({
      propsData: options
    }).$mount()
  }
  return _instance
}

export default {

  install (Vue) {
    Vue.directive('selection-box', {
      /**
       * @param {Element} el
       */
      bind (el, _, vnode) {
        vnode.context.$selectionBox = getInstance(Vue, {})
        el.appendChild(_instance.$el)
      },
      componentUpdated (_, { value: target }) {
        _instance.target = target
      },
      update (_, binding) {
        _instance.target = binding.target
      }
    })
  }
}
