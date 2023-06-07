<script>
import RectBox from './RectBox.vue'
import { calcArea } from '@/utils/transform'

const inital = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

export default {
  name: 'Stroke', // eslint-disable-line
  components: { RectBox },
  props: {
    ignore: {
      type: Array,
      default: () => [],
    },
    strokeWidth: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      target: [],
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    }
  },
  watch: {
    /**
     * @param {Array} nv
     */
    target(nv) {
      if (!nv || nv.lenght === 0) {
        this.width = inital.width
        this.height = inital.height
        this.top = inital.top
        this.left = inital.left
      }
      const rect = calcArea(nv)
      this.width = rect.width
      this.height = rect.height
      this.top = rect.top
      this.left = rect.left
    },
  },
  methods: {
    refreshTarget() {
      if (!this.target || this.target.length > 0) {
        const cache = this.target
        this.target = []
        this.target = cache
      }
    },
    setTarget(el) {
      this.target = el instanceof Array ? el : [ el ]
    },
    hide() {
      this.target = undefined
    },
  },
}
</script>

<template>
  <RectBox
    class="pointer-events-none stroke"
    color="stroke-sky-500"
    :width="width"
    :height="height"
    :top="top"
    :left="left"
    :stroke-width="strokeWidth"
  >
    <slot />
  </RectBox>
</template>

<style scoped>
.stroke {
  z-index: 9999
}
</style>
