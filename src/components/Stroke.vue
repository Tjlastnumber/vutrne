<template>
  <div
    class="absolute pointer-events-none stroke"
    :style="styleTranslate"
  >
    <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <rect
        width="100%"
        height="100%"
        :stroke="color"
        :fill="fill"
        :stroke-width="strokeWidth"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Stroke', // eslint-disable-line
  props: {
    color: {
      type: String,
      default: 'black'
    },
    target: {
      type: [ Element, HTMLElement, Object ],
      default: undefined
    },
    space: {
      type: [ Element, HTMLElement, Object ],
      default: undefined
    }
  },
  data () {
    return {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      strokeWidth: 1,
      fill: 'none'
    }
  },
  computed: {
    styleTranslate () {
      return { top: `${this.top}px`, left: `${this.left}px` }
    }
  },
  watch: {
    /**
     * @param {Element} nv
     */
    target (nv) {
      if (nv) {
        const rect = nv.getBoundingClientRect()
        this.width = rect.width
        this.height = rect.height
        this.top = rect.top
        this.left = rect.left
      }
      console.log('stroke target change')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.stroke {
  z-index: 9999
}
</style>
