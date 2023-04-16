<template>
  <div
    class="absolute pointer-events-none stroke"
    :style="styleTranslate"
  >
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
import Rect from './mixins/Rect'
export default {
  name: 'RectBox',
  mixins: [ Rect ]
}
</script>
