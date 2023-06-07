import { parseMatrix } from '@/utils/transform'

export default class Rect {
  #translateX = 0
  #translateY = 0

  /**
   * @param {HTMLElement} el element元素
   * @param {Number} globalScale 全局缩放比例
   **/
  constructor(el, globalScale) {
    this.el = el
    this.globalScale = globalScale || 1
    this.init()
  }

  init() {
    if (this.el.getBoundingClientRect) {
      const rect = this.el.getBoundingClientRect()
      this.width = rect.width
      this.height = rect.height
      this.top = rect.top
      this.left = rect.left
      this.right = rect.right
      this.bottom = rect.bottom
    }
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight, clientTop, clientLeft, clientWidth, clientHeight } = this.el
    this.offsetTop = offsetTop
    this.offsetLeft = offsetLeft
    this.offsetWidth = offsetWidth
    this.offsetHeight = offsetHeight
    this.clientTop = clientTop
    this.clientLeft = clientLeft
    this.clientWidth = clientWidth
    this.clientHeight = clientHeight
    this.transform = parseMatrix(this.el)
    this.#translateX = this.transform.translateX
    this.#translateY = this.transform.translateY
  }

  /**
   * @param {Rect} other
   **/
  colliding(other) {
    return !(
      other.top > this.bottom ||
      other.left > this.right ||
      other.right < this.left ||
      other.bottom < this.top
    )
  }

  get offset() {
    return {
      x: this.offsetLeft,
      y: this.offsetTop,
      width: this.offsetWidth,
      height: this.offsetHeight,
    }
  }

  get client() {
    return {
      x: this.clientLeft,
      y: this.clientTop,
      width: this.clientWidth,
      height: this.clientHeight,
    }
  }

  move(x, y) {
    this.offsetLeft += x
    this.offsetTop += y
    this.moveTo()
  }

  moveTo(x, y) {
    this.el.style.position = 'relative'
    this.el.style.left = `${x || this.offsetLeft}px`
    this.el.style.top = `${y || this.offsetTop}px`
  }

  translateToPosition() {
    this.transformTo()
    this.moveTo()
  }

  translate(x, y) {
    x = x / this.globalScale
    y = y / this.globalScale
    this.offsetLeft += x
    this.offsetTop += y
    this.#translateX += x
    this.#translateY += y
    this.transformTo(this.#translateX, this.#translateY)
  }

  resize(w, h) {
    this.el.style.width = `${w}px`
    this.el.style.height = `${h}px`
  }

  transformTo(x, y, scale, rotation) {
    this.el.style.willChange = 'transform'
    x = x || this.transform.translateX
    y = y || this.transform.translateY
    scale = scale || this.transform.scale
    rotation = rotation || this.transform.rotation
    this.el.style.transform = `
      translate(${x}px, ${y}px) 
      scale(${scale}) 
      rotate(${rotation}deg)
    `
  }
}
