<template>
  <Stroke
    v-show="show"
    ref="stroke"
    class="pointer-events-auto select-none resize-container"
    :stroke-width="3"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  >
    <div
      class="absolute w-full h-2 bg-red-500 pointer-events-auto -top-2 hover:cursor-n-resize"
      @click="onMove"
    />
    <div class="absolute inset-y-0 w-2 bg-red-500 pointer-events-auto -left-2 hover:cursor-w-resize" />
    <div class="absolute inset-y-0 w-2 bg-red-500 pointer-events-auto -right-2 hover:cursor-e-resize" />
    <div class="absolute w-full h-2 bg-red-500 pointer-events-auto -bottom-2 hover:cursor-s-resize" />
  </Stroke>
</template>

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

.c {
  pointer-events: none;
}

</style>
