import Stroke from '../components/Stroke.vue'

const _props = Stroke.props || Stroke.mixins[0].props
let _instance
const _options = {}

Object.keys(_props).forEach((k) => {
  const prop = _props[k]
  const dv = _props.default
  if (prop && prop.default !== null) {
    _options[k] = typeof dv === 'function' ? dv() : dv
  }
})
function strokeInstance (Vue, options) { /* eslint-disable-line */
  options = options || {}
  if (_instance && _instance.$el.parentNode) {
    Object.assign(_instance, _options, options)
  } else {
    _instance = new (Vue.extend(Stroke))({
      propsData: options
    }).$mount()
  }
  return _instance
}

export default {
  install (Vue) {
    Vue.directive('stroke', {
      /**
       * @param {Element} el
       */
      bind (el) {
        el.$stroke = strokeInstance(Vue, {})
        el.appendChild(el.$stroke.$el)
      },
      componentUpdated (el, { value: target }) {
        el.$stroke.target = target
      },
      update (el, binding) {
        el.$stroke.target = binding.target
      }
    })
  }
}
