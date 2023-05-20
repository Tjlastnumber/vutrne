<template>
  <RectBox
    ref="rect"
    class="static"
    color="stroke-blue-400"
    fill="fill-blue-400/20"
    :style="{ opacity }"
    :width="width"
    :height="height"
    :left="left"
    :top="top"
    :stroke-width="2"
  />
</template>

<script>
import { raf } from '@/utils/raf'
import RectBox from './RectBox.vue'

export default {
  components: { RectBox },
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      opacity: 0,
      show: false,
      hide: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$parent.$el.addEventListener('mousedown', this.startDrag)
    })
  },
  methods: {
    dragging(op, np) {
      this.top = Math.min(np.y, op.y)
      this.left = Math.min(np.x, op.x)
      this.width = Math.abs(np.x - op.x)
      this.height = Math.abs(np.y - op.y)
    },
    reset() {
      this.opacity = 0
      this.top = 0
      this.left = 0
      this.width = 0
      this.height = 0
    },
    clear() {
      // 隐藏动画
      const fadeOut = () => {
        if (this.show) return
        this.opacity -= 0.05
        if (this.opacity < 0) {
          raf(fadeOut)
          this.reset()
          return
        }
        raf(fadeOut)
      }
      this.show = false
      fadeOut()
    },
    startDrag(e) {
      if (e.button !== 0) {
        // 不是左键点击
        return
      }
      if (this.opacity > 0) {
        this.reset()
      }
      this.opacity = 1
      this.show = true

      let { clientX, clientY } = e

      const onMouseMove = (ev) => {
        this.dragging(
          { x: clientX, y: clientY },
          { x: ev.clientX, y: ev.clientY }
        )
      }

      const onWheel = (ev) => {
        this.dragging(
          { x: clientX -= ev.deltaX, y: clientY -= ev.deltaY },
          { x: ev.clientX, y: ev.clientY }
        )
      }

      const onMouseUp = () => {
        this.clear()
        window.removeEventListener('mouseup', onMouseUp)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('wheel', onWheel)
      }

      window.addEventListener('mouseup', onMouseUp)
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('wheel', onWheel)
    }
  }
}
</script>

<style>

</style>
