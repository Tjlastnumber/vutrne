import { isNone, isUndef } from '.'

export function resize() {

}

export function scale() {

}

export function rotation() {

}

export function translate() {

}

export function colliding(r1, r2) {

}

/**
 * 获取元素集合的矩形累加大小
 *
 * @param {Array} els
 * @returns {object} {widht, height, top, left, right, bottom}
 **/
export function calcArea(els) {
  let rect = {}
  try {
    rect = els.filter(el => el.getBoundingClientRect)
      .map(el => {
        const { width, height, top, left, right, bottom } = el.getBoundingClientRect()
        return {
          width,
          height,
          top,
          left,
          right,
          bottom,
        }
      })
      .reduce((pre, cur) => {
        const top = Math.min(pre.top, cur.top)
        const left = Math.min(pre.left, cur.left)
        const right = Math.max(pre.right, cur.right)
        const bottom = Math.max(pre.bottom, cur.bottom)
        const width = Math.abs(right - left)
        const height = Math.abs(bottom - top)
        return {
          width,
          height,
          top,
          left,
          right,
          bottom,
        }
      })
  } catch {
  }
  return rect
}

/**
 * @param {HTMLElement, Array} els
 **/
export function elementsPosition(els) {
  els = els instanceof Array ? els : [ els ]
  els.map((el) => { return { offsetTop: el.offsetTop, offsetLeft: el.offsetLeft } })
    .reduce((prev, current) => {
      const offsetTop = Math.min(prev.offsetTop, current.offsetTop)
      const offsetLeft = Math.min(prev.offsetLeft, current.offsetLeft)
      return { offsetTop, offsetLeft }
    })
}

/**
 *
 * @param {Element} el
 * @returns
 */
export function parseMatrix(el) {
  const def = {
    scale: 1,
    rotate: 0,
    translateX: 0,
    translateY: 0,
  }
  if (isUndef(el)) return def
  const style = window.getComputedStyle(el, null)
  const transform = style.transform
  if (isNone(transform)) return def
  const matrix = new DOMMatrix(style.transform)
  return {
    translateX: matrix.m41,
    translateY: matrix.m42,
    scale: Math.hypot(matrix.m11, matrix.m12),
    rotation: -Math.atan2(-matrix.m21, matrix.m11) * (180 / Math.PI),
  }
}

/**
 *
 * @param {*} transform
 */
export function toMatrix({ scale, rotate, translateX, translateY }) {
  DOMMatrix.fromMatrix({ is2D: true, m41: translateX, m42: translateY })
}
