export default {
  props: {
    color: {
      type: String,
      default: 'stroke-black-500'
    },
    fill: {
      type: String,
      default: 'fill-none'
    },
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 10
    }
  },
  computed: {
    styleTranslate () {
      return { top: `${this.top}px`, left: `${this.left}px` }
    }
  }
}
