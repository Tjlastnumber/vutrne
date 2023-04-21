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
import rectangle from '@/mixins/rectangle'
export default {
  name: 'RectBox',
  mixins: [ rectangle ]
}
</script>
