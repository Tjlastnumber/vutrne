<template>
  <Stroke
    ref="stroke"
    class="pointer-events-auto select-none resize-container will-change-transform"
    :class="show ? '' : 'opacity-0'"
    :show="show"
    :stroke-width="3"
    @mousedown.native.left.stop.exact="onDrag"
    @mousedown.native.right="onMouseRightDown"
    @keydown.native="onKeyDown"
    @keyup.native="onKeyUp"
  >
    <div
      v-for="stroke in resizeStroke"
      :key="stroke.index"
      :class="stroke.class"
      @mousedown.left.stop="resize($event, stroke)"
    />

    <div class="absolute w-[8px] h-[8px] bg-white border-[1px] -top-[3px] -left-[3px] border-sky-500" />
    <div class="absolute w-[8px] h-[8px] bg-white border-[1px] -top-[3px] -right-[3px] border-sky-500" />
    <div class="absolute w-[8px] h-[8px] bg-white border-[1px] -bottom-[3px] -left-[3px] border-sky-500" />
    <div class="absolute w-[8px] h-[8px] bg-white border-[1px] -bottom-[3px] -right-[3px] border-sky-500" />

    <div class="absolute top-0 left-0 w-3 h-3 hover:cursor-nwse-resize" />
    <div class="absolute top-0 right-0 w-3 h-3 hover:cursor-nesw-resize" />
    <div class="absolute bottom-0 left-0 w-3 h-3 hover:cursor-nesw-resize" />
    <div class="absolute bottom-0 right-0 w-3 h-3 hover:cursor-nwse-resize" />
  </Stroke>
</template>

<script>

import Stroke from './Stroke.vue'
import Rect from '@/types/rect'
import { toRadians, calcOffset } from '@/utils/transform'

const handleResize = function (e, rects) {
  console.log(e)
  const { movementX, movementY } = e

  const radian = toRadians(this.angle)
  const { sin, cos, nx, ny } = calcOffset({ x: movementX, y: movementY, radian })
  const ssin = ~~(sin)
  const scos = ~~(cos)
  const x = nx * scos
  const y = ny * ssin
  rects.forEach(rect => rect.resize({ x, y }))
}

const resizeStroke = [
  {
    index: 0,
    position: 'top',
    class: 'absolute w-full h-4 pointer-events-auto -top-2 hover:cursor-ns-resize will-change-transform',
    angle: 90,
    handleResize
  },
  {
    index: 1,
    position: 'right',
    class: 'absolute inset-y-0 w-4 pointer-events-auto -right-2 hover:cursor-ew-resize will-change-transform',
    angle: 0,
    handleResize
  },
  {
    index: 2,
    position: 'bottom',
    class: 'absolute w-full h-4 pointer-events-auto -bottom-2 hover:cursor-ns-resize will-change-transform',
    angle: -90,
    handleResize
  },
  {
    index: 3,
    position: 'left',
    class: 'absolute inset-y-0 w-4 pointer-events-auto -left-2 hover:cursor-ew-resize will-change-transform',
    angle: 180,
    handleResize
  }
]

export default {
  components: { Stroke },
  props: {
    target: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: false,
      isPenetrate: false,
      dragging: false,
      resizing: false,
      resizeStroke,
      rects: []
    }
  },
  computed: {
  },
  watch: {
    target(nv) {
      this.show = true
      this.$refs.stroke.setTarget(nv)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$parent.$el.addEventListener('keydown', this.onKeyDown)
      this.$parent.$el.addEventListener('keyup', this.onKeyUp)
    })
  },
  methods: {
    onKeyDown(e) {
      this.isPenetrate = e.ctrlKey || e.metaKey
    },
    onKeyUp() {
      this.isPenetrate = false
    },
    colliding(e) {
    },
    refreshTarget() {
      this.$refs.stroke.refreshTarget()
    },
    onDrag() {
      this.dragging = true
      this.show = false
      this.rects = this.target.map(el => new Rect(el, window.globalScale))

      const onMouseMove = (ev) => {
        const { movementX, movementY } = ev
        for (const rect of this.rects) {
          rect.translate(movementX, movementY)
        }
      }
      const onMouseUp = () => {
        this.rects.forEach(r => r.translateToPosition())
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('mouseleave', onMouseUp)
        this.show = true
        this.dragging = false
      }
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mouseleave', onMouseUp)
    },
    onMouseRightDown() {
    },
    resize(e, stroke) {
      this.resizing = true
      this.rects = this.target.map(el => new Rect(el, window.globalScale))

      const onMouseMove = (ev) => {
        stroke.handleResize(ev, this.rects)
      }

      const onMouseUp = () => {
        this.rects.forEach(r => r.translateToPosition())
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('mouseleave', onMouseUp)
        this.resizing = false
      }

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mouseleave', onMouseUp)
    }
  }
}
</script>

<style>
.resize-container {
  z-index: 99999;
}

</style>
