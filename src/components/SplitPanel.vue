<script>
export default {
  name: 'SplitPanel',
  props: {
    minWidth: {
      type: Number,
      default: 240
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
      default: false
    }
  },
  data() {
    return {
      width: 240,
      dragging: false,
      movement: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    styleWidth() {
      return typeof this.width === 'number' ? `${Math.max(this.width, this.minWidth)}px` : this.width
    }
  },
  methods: {
    /**
     * @param {MouseEvent} ev
     */
    dragStart(ev) {
      if (this.canChangeSize) return

      const dragEnd = () => {
        window.removeEventListener('mousemove', dragMove)
        window.removeEventListener('mouseup', dragEnd)
      }

      const dragMove = (e) => {
        const offsetX = e.movementX - ev.movementX
        const posX = this.width + (this.right ? -offsetX : offsetX)
        this.width = Math.max(Math.min(posX, this.maxWidth), this.minWidth)
      }

      window.addEventListener('mousemove', dragMove)
      window.addEventListener('mouseup', dragEnd)
    }
  }
}
</script>

<template>
  <div
    class="inset-y-0 z-10"
    :class="{
      'right-0': right,
      'left-0': left && !right
    }"
    :style="{width: styleWidth}"
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
        'cursor-col-resize': !canChangeSize
      }"
      @mousedown="dragStart"
    />
  </div>
</template>

<style>

</style>
