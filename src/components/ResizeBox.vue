<template>
  <Stroke
    v-show="show"
    ref="stroke"
    class="pointer-events-auto select-none resize-container will-change-transform"
    :stroke-width="3"
    @mousedown.native.left.stop.exact="onDrag"
    @mousedown.native.right="onMouseRightDown"
    @keydown.native="onKeyDown"
    @keyup.native="onKeyUp"
  >
    <div class="absolute w-full h-4 pointer-events-auto -top-2 hover:cursor-ns-resize will-change-transform" />
    <div class="absolute inset-y-0 w-4 pointer-events-auto -left-2 hover:cursor-ew-resize will-change-transform" />
    <div class="absolute inset-y-0 w-4 pointer-events-auto -right-2 hover:cursor-ew-resize will-change-transform" />
    <div class="absolute w-full h-4 pointer-events-auto -bottom-2 hover:cursor-ns-resize will-change-transform" />
    <div class="absolute top-0 left-0 w-3 h-3 hover:cursor-nwse-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -top-1/4 -left-1/4 border-sky-500" />
    </div>
    <div class="absolute top-0 right-0 w-3 h-3 hover:cursor-nesw-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -top-1/4 -right-1/4 border-sky-500" />
    </div>
    <div class="absolute bottom-0 left-0 w-3 h-3 hover:cursor-nesw-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -bottom-1/4 -left-1/4 border-sky-500" />
    </div>
    <div class="absolute bottom-0 right-0 w-3 h-3 hover:cursor-nwse-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -bottom-1/4 -right-1/4 border-sky-500" />
    </div>
  </Stroke>
</template>
<script>
import Stroke from './Stroke.vue'
import Rect from '@/types/rect.js'

export default {
  components: { Stroke },
  props: {
    target: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      show: false,
      isPenetrate: false
    }
  },
  computed: {
  },
  watch: {
    target (nv) {
      this.show = true
      this.$refs.stroke.setTarget(nv)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$parent.$el.addEventListener('keydown', this.onKeyDown)
      this.$parent.$el.addEventListener('keyup', this.onKeyUp)
    })
  },
  methods: {
    onKeyDown (e) {
      this.isPenetrate = e.ctrlKey || e.metaKey
    },
    onKeyUp () {
      this.isPenetrate = false
    },
    colliding (e) {
    },
    refreshTarget () {
      this.$refs.stroke.refreshTarget()
    },
    onDrag () {
      const rects = this.target.map(el => new Rect(el, window.globalScale))

      const onMouseMove = (ev) => {
        const { movementX, movementY } = ev
        for (const rect of rects) {
          rect.translate(movementX, movementY)
        }
        this.refreshTarget()
      }
      const onMouseUp = () => {
        rects.forEach(r => r.translateToPosition())
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('mouseleave', onMouseUp)
      }
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mouseleave', onMouseUp)
    },
    onMouseRightDown () {
    }
  }
}
</script>

<style>
.resize-container {
  z-index: 99999;
}

</style>
