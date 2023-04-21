<template>
  <Stroke
    v-show="show"
    ref="stroke"
    class="pointer-events-auto select-none resize-container"
    :stroke-width="3"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  >
    <div class="absolute w-full h-4 pointer-events-auto -top-2 hover:cursor-ns-resize" />
    <div class="absolute inset-y-0 w-4 pointer-events-auto -left-2 hover:cursor-ew-resize" />
    <div class="absolute inset-y-0 w-4 pointer-events-auto -right-2 hover:cursor-ew-resize" />
    <div class="absolute w-full h-4 pointer-events-auto -bottom-2 hover:cursor-ns-resize" />
    <div class="absolute top-0 left-0 w-3 h-3 hover:cursor-nw-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -top-1/4 -left-1/4 border-sky-500" />
    </div>
    <div class="absolute top-0 right-0 w-3 h-3 hover:cursor-ne-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -top-1/4 -right-1/4 border-sky-500" />
    </div>
    <div class="absolute bottom-0 left-0 w-3 h-3 hover:cursor-sw-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -bottom-1/4 -left-1/4 border-sky-500" />
    </div>
    <div class="absolute bottom-0 right-0 w-3 h-3 hover:cursor-se-resize">
      <div class="absolute w-[9px] h-[9px] bg-white border-[1.5px] -bottom-1/4 -right-1/4 border-sky-500" />
    </div>
  </Stroke>
</template>
left
<script>
import Stroke from './Stroke.vue'
import Rect from '@/types/rect.js'

export default {
  components: { Stroke },
  props: {
    activeElement: {
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
    rect () {
      return new Rect(this.$el.getBoundingClientRect())
    }
  },
  watch: {
    activeElement (nv) {
      this.show = true
      this.$refs.stroke.setTarget(nv)
    }
  },
  mounted () {
    window.addEventListener('mousemove', this.colliding)
    this.$nextTick(() => {
      console.log(this.$parent)
      this.$parent.$el.addEventListener('keydown', this.onKeyDown)
      this.$parent.$el.addEventListener('keyup', this.onKeyUp)
    })
  },
  methods: {
    onKeyDown (e) {
      console.log(e.ctrlKey)
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
    onMove (e) {
      console.log('move')
    }
  }
}
</script>

<style>
.resize-container {
  z-index: 99999;
}

</style>
