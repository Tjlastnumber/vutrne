<template>
  <div
    class="bg-transparent border-dark-primary"
    @wheel.prevent="onMouseWheel"
    @mousedown.middle.prevent="onMouseMiddleDown"
  >
    <!-- must translateStyle first -->
    <div
      class="w-full h-full select-none origin-center zoomer"
      :style="`transform: ${transformStyle}`"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils'

export default {
  name: 'Zoom', // eslint-disable-line
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
      translateX: 0,
      translateY: 0,
      x: 0,
      y: 0,
      cw: 1,
      ch: 1
    }
  },
  computed: {
    transformStyle () {
      return `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scaleProp})`
    },
    transform () {
      return {
        target: this.$el,
        scale: this.scaleProp,
        scalePercent: `${this.scaleProp * 100}%`,
        x: this.translateX,
        y: this.translateY
      }
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

      this.$emit('movearea', this.transform)
    },
    getContainerCenter () {
      return { x: this.cw / 2, y: this.ch / 2 }
    },
    onZoom ({ scaleDelta, clientX, clientY }) {
      this.$emit('startScale', this.transform)

      let newScale = this.scaleProp * scaleDelta
      newScale = Math.max(newScale, this.minScale)
      scaleDelta = newScale / this.scaleProp
      // 归一化处理
      const pointerXDelta = clientX / this.cw
      const pointerYDelta = clientY / this.ch
      // 中心点移动到指针焦点的偏移量
      const fx = 0.5 - pointerXDelta
      const fy = 0.5 - pointerYDelta
      // 计算缩放目标的单位偏移量
      this.scaleProp = newScale
      this.x = (fx + this.x) * scaleDelta - fx
      this.y = (fy + this.y) * scaleDelta - fy
      this.translateX = this.x * this.cw
      this.translateY = this.y * this.ch
      this.$emit('scale', this.transform)
    },
    onMove (x, y) {
      this.translateX += x / this.scale
      this.translateY += y / this.scale
      this.$emit('movearea', this.transform)
    },
    onMouseWheel (ev) {
      if (ev.ctrlKey || ev.metaKey) {
        const scaleDelta = (Math.pow(1.1, Math.sign(ev.wheelDelta)))
        const scale = debounce(() => this.onZoom({
          scaleDelta,
          clientX: ev.clientX,
          clientY: ev.clientY
        }))
        scale()
      } else {
        const movearea = debounce(() => this.onMove(-ev.deltaX, -ev.deltaY))
        movearea()
      }
    },
    onMouseMiddleDown () {
      const move = (moveEvent) => {
        const { movementX, movementY } = moveEvent
        const movearea = debounce(() => this.onMove(movementX, movementY))
        movearea()
      }

      const up = () => {
        window.removeEventListener('mousemove', move)
        window.removeEventListener('mouseup', up)
      }

      window.addEventListener('mousemove', move)
      window.addEventListener('mouseup', up)
    }
  }
}
</script>

<style scoped></style>
