
export function isNumber (v) {
  return typeof v === 'number'
}

export function isNone (o) {
  return o === undefined || o === null || typeof o === 'undefined'
}

export function isUndef (v) {
  return v === undefined
}

export function isObj (o) {
  return o !== null && typeof o === 'object'
}

export function isString (v) {
  return typeof v === 'string'
}

/**
 * @param {String} v
 **/
export function emptyString (v) {
  return isNumber(v) || isNone(v) || v.trim() === ''
}

/**
 * 防抖函数
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 */
export function debounce (func, wait = 300, maxWait = 500, immediate = true) {
  let timeout
  const time = new Date()
  return () => {
    const cxt = this
    const args = arguments
    const now = new Date()
    const later = () => {
      if (!immediate) func.apply(cxt, args)
    }

    if (maxWait && now - time > maxWait) {
      timeout = setTimeout(later, wait)
      func.apply(cxt)
    }

    const callNow = immediate & !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(cxt, args)
  }
}

/**
 * @param {Element} el
 */
export function isComponent (el) {
  return !isNone(el.getAttribute('vv-component'))
}
