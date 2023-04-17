export default class Rect {
  constructor (rect) {
    this.width = rect.width
    this.height = rect.height
    this.top = rect.top
    this.left = rect.left
    this.right = rect.right
    this.bottom = rect.bottom
  }

  colliding (other) {
    return !(
      other.top > this.bottom ||
      other.left > this.right ||
      other.right < this.left ||
      other.bottom < this.top
    )
  }
}
