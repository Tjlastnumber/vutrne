<template>
  <RectBox
    :width="width"
    :height="height"
    :top="top"
    :left="left"
    :stroke-width="4"
    fill="fill-sky-500/50"
  />
</template>

<script>
import RectBox from './RectBox.vue'
export default {
  components: { RectBox }
}
</script>

<style>

</style>
