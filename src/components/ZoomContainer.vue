<template>
  <div
    class="overflow-hidden bg-transparent"
    @wheel="onZoom"
  >
    <!-- must translateStyle first -->
    <div
      class="w-full h-full select-none origin-center zoomer transition-transform"
      :style="`transform: ${translateStyle} ${scaleStyle}`"
    >
      >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZoomContainer',
  data () {
    return {
      scale: 1,
      minScale: 0.1,
      containerLeft: 0,
      containerTop: 0,
      x: 0,
      y: 0,
      cw: 1,
      ch: 1
    }
  },
  computed: {
    translateStyle () {
      const x = this.x * this.cw
      const y = this.y * this.ch
      return `translate(${x}px, ${y}px)`
    },
    scaleStyle () {
      return `scale(${this.scale})`
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
      console.log(this.cw, this.ch)
    },
    getContainerCenter () {
      return { x: this.cw / 2, y: this.ch / 2 }
    },
    onZoom (event) {
      event.preventDefault()
      let scaleDelta = (Math.pow(1.1, Math.sign(event.wheelDelta)))
      let newScale = this.scale * scaleDelta
      newScale = Math.max(newScale, this.minScale)
      scaleDelta = newScale / this.scale
      this.scale = newScale
      // translate
      const pointerXDelta = event.clientX / this.cw
      const pointerYDelta = event.clientY / this.ch
      const centerX = 0.5 - pointerXDelta
      const centerY = 0.5 - pointerYDelta
      this.x = (centerX + this.x) * scaleDelta - centerX
      this.y = (centerY + this.y) * scaleDelta - centerY
    }
  }
}
</script>

<style scoped></style>
