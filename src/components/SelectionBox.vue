<template>
  <RectBox
    ref="rect"
    class="static"
    :width="width"
    :height="height"
    :top="top"
    :left="left"
    :stroke-width="2"
    color="stroke-sky-500"
    fill="fill-sky-400/50"
  />
</template>

<script>
import RectMixin from './mixins/Rect'
import RectBox from './RectBox.vue'

export default {
  components: { RectBox },
  mixins: [ RectMixin ],
  methods: {
    dragging (op, np) {
      this.top = Math.min(np.y, op.y)
      this.left = Math.min(np.x, op.x)
      this.width = Math.abs(np.x - op.x)
      this.height = Math.abs(np.y - op.y)
    },
    clear () {
      this.top = 0
      this.left = 0
      this.width = 0
      this.height = 0
    },
    startDrag (clientX, clientY) {
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
    },
    selected () {

    }
  }
}
</script>

<style>

</style>
