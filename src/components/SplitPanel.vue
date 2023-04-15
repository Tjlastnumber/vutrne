<template>
  <div
    class="absolute inset-y-0 z-10"
    :class="{
      'right-0': right,
      'left-0': left && !right
    }"
    :style="{width: `${width}px`}"
  >
    <div
      class="w-full h-full overflow-auto"
    >
      <slot />
    </div>
    <div
      class="absolute top-0 z-20 w-1 h-full border-light-disabled dark:border-dark-disabled"
      :class="{
        'left-0': right,
        'border-l': right,
        'right-0': !right && left,
        'border-r': !right && left,
        'cursor-col-resize': canChangeSize
      }"
      @mousedown="startDrag"
    />
  </div>
</template>

<script>
export default {
  name: 'SplitPanel',
  props: {
    minWidth: {
      type: Number,
      default: 200
    },
    maxWidth: {
      type: Number,
      default: 500
    },
    left: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: false
    },
    canChangeSize: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      width: 240
    }
  },
  methods: {
    /**
     * @param {MouseEvent} ev
     */
    startDrag (ev) {
      if (!this.canChangeSize) return

      const sp = ev.movementX

      const onDrag = (e) => {
        const translateX = e.movementX - sp
        const posX = this.width + (this.right ? -translateX : translateX)
        this.width = Math.max(Math.min(posX, this.maxWidth), this.minWidth)
      }

      const endDrag = () => {
        document.documentElement.removeEventListener('mousemove', onDrag)
        document.documentElement.removeEventListener('mouseup', endDrag)
      }

      document.documentElement.addEventListener('mousemove', onDrag)
      document.documentElement.addEventListener('mouseup', endDrag)
    }
  }
}
</script>

<style>

</style>
