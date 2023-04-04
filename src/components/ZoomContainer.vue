<template>
  <div
    class="absolute top-0 left-0 overflow-hidden bg-transparent"
    @wheel.prevent="onMouseWheel"
    @mousedown.middle.prevent="onMouseMiddleDown"
  >
    <!-- must translateStyle first -->
    <div
      class="absolute top-0 left-0 w-full h-full select-none origin-center zoomer"
      :style="`transform: ${translateStyle} ${scaleStyle}`"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZoomContainer',
  props: {
    scale: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      scaleProp: 1,
      minScale: 0.1,
      containerLeft: 0,
      containerTop: 0,
      x: 0,
      y: 0,
      cw: 1,
      ch: 1,
      translateX: 0,
      translateY: 0
    }
  },
  computed: {
    translateStyle () {
      return `translate(${this.translateX}px, ${this.translateY}px)`
    },
    scaleStyle () {
      return `scale(${this.scaleProp})`
    }
  },
  watch: {
    translateX () {
      this.x = this.translateX / this.cw
    },
    translateY () {
      this.y = this.translateY / this.ch
    },
    scale (nv) {
      this.scaleProp = nv
    }
  },
  mounted () {
    window.addEventListener('resize', this.onWindowResize)
    this.onWindowResize()
  },
  methods: {
    onWindowResize () {
      const { width, height } = window.getComputedStyle(this.$el)
      this.cw = parseFloat(width)
      this.ch = parseFloat(height)
    },
    getContainerCenter () {
      return { x: this.cw / 2, y: this.ch / 2 }
    },
    onZoom ({ scaleDelta, clientX, clientY }) {
      let newScale = this.scaleProp * scaleDelta
      newScale = Math.max(newScale, this.minScale)
      scaleDelta = newScale / this.scaleProp
      this.scaleProp = newScale
      // 归一化处理
      const pointerXDelta = clientX / this.cw
      const pointerYDelta = clientY / this.ch
      // 中心点移动到指针焦点的偏移量
      const fx = 0.5 - pointerXDelta
      const fy = 0.5 - pointerYDelta
      // 计算缩放目标的单位偏移量
      this.x = (fx + this.x) * scaleDelta - fx
      this.y = (fy + this.y) * scaleDelta - fy
      this.translateX = this.x * this.cw
      this.translateY = this.y * this.ch
      this.$emit('scale', { scale: this.scaleProp, scalePercent: `${this.scaleProp * 100}%` })
    },
    onMouseWheel (ev) {
      if (ev.ctrlKey || ev.metaKey) {
        const scaleDelta = (Math.pow(1.1, Math.sign(ev.wheelDelta)))
        this.onZoom({ scaleDelta, clientX: ev.clientX, clientY: ev.clientY })
      } else {
        this.translateX -= ev.deltaX / this.scale
        this.translateY -= ev.deltaY / this.scale
      }
    },
    onMouseMiddleDown () {
      const move = (moveEvent) => {
        const { movementX, movementY } = moveEvent
        this.translateX += movementX / this.scale
        this.translateY += movementY / this.scale
      }

      const up = () => {
        window.removeEventListener('mousemove', move)
        window.removeEventListener('mouseup', up)
      }

      window.addEventListener('mousemove', move)
      window.addEventListener('mouseup', up)
    },
    fit () {
      // this.visibleSize = gg
    }
  }
}
</script>

<style scoped></style>
