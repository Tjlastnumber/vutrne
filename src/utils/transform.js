
export function resize () {

}

export function scale () {

}

export function rotation () {

}

export function translate () {

}

export function colliding (r1, r2) {

}

/**
 * 获取元素集合的矩形累加大小
 *
 * @param {Array} els
 **/
export function computeArea (els) {
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
          bottom
        }
      })
      .reduce((pre, cur) => {
        const top = Math.min(pre.top, cur.top)
        const left = Math.min(pre.left, cur.left)
        const right = Math.max(pre.right, cur.right)
        const bottom = Math.max(pre.bottom, cur.bottom)
        return {
          width: Math.abs(right - left),
          height: Math.abs(bottom - top),
          top,
          left,
          right,
          bottom
        }
      })
  } catch {
  }
  return rect
}

/**
 * @param {HTMLElement, Array} els
 **/
export function elementsPosition (els) {
  els = els instanceof Array ? els : [ els ]
  els.map((el) => { return { offsetTop: el.offsetTop, offsetLeft: el.offsetLeft } })
    .reduce((prev, current) => {
      const offsetTop = Math.min(prev.offsetTop, current.offsetTop)
      const offsetLeft = Math.min(prev.offsetLeft, current.offsetLeft)
      return { offsetTop, offsetLeft }
    })
}
