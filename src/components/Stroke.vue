<template>
  <RectBox
    class="stroke"
    color="stroke-sky-400"
    :width="width"
    :height="height"
    :top="top"
    :left="left"
    :stroke-width="4"
  />
</template>

<script>
import RectMixins from './mixins/Rect'
import RectBox from './RectBox.vue'

export default {
  name: 'Stroke', // eslint-disable-line
  components: { RectBox },
  mixins: [ RectMixins ],
  props: {
    ignore: {
      type: [ Element, HTMLElement, Object ],
      default: undefined
    }
  },
  data () {
    return {
      target: undefined
    }
  },
  watch: {
    /**
     * @param {Element} nv
     */
    target (nv) {
      if (!nv) {
        this.width = 0
        this.height = 0
        this.top = 0
        this.left = 0
      }
      if (nv.getBoundingClientRect) {
        const rect = nv.getBoundingClientRect()
        this.width = rect.width
        this.height = rect.height
        this.top = rect.top
        this.left = rect.left
      }
    }
  },
  methods: {
    refreshTarget () {
      const cache = this.target
      this.target = {}
      this.target = cache
    },
    setTarget (el) {
      this.target = el
    }
  }
}
</script>

<style scoped>
.stroke {
  z-index: 9999
}
</style>
