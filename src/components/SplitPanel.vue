<template>
  <div
    class="absolute inset-y-0 z-10"
    :class="dock"
    :style="{width: `${width}px`}"
  >
    <div
      class="w-full h-full overflow-auto"
    >
      <slot />
    </div>
    <div
      class="absolute top-0 z-20 w-1 h-full cursor-col-resize border-light-disabled dark:border-dark-disabled"
      :class="right ? 'left-0' : 'right-0'"
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
    }
  },
  data () {
    return {
      width: 240
    }
  },
  computed: {
    dock () {
      return this.right
        ? 'right-0'
        : this.left
          ? 'left-0'
          : ''
    }
  },
  methods: {
    /**
     * @param {MouseEvent} ev
     */
    startDrag (ev) {
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
