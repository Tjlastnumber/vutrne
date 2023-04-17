
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
 * @param {Array} els
 **/
export function selection (els) {
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
