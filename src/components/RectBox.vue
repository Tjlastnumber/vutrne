<template>
  <div
    class="absolute pointer-events-none"
    :style="styleTranslate"
  >
    <slot />
    <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      :class="[ color, fill ]"
      :style="`stroke-width: ${strokeWidth}`"
    >
      <rect
        width="100%"
        height="100%"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'RectBox',
  props: {
    color: {
      type: String,
      default: 'stroke-black-500'
    },
    fill: {
      type: String,
      default: 'fill-none'
    },
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    right: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 10
    }
  },
  computed: {
    styleTranslate() {
      return { top: `${this.top}px`, left: `${this.left}px` }
    }
  }
}
</script>
