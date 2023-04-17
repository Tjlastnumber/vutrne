<template>
  <Stroke
    ref="stroke"
    class="resize-container"
  />
</template>

<script>
import Stroke from './Stroke.vue'
import Rect from '@/types/rect.js'

export default {
  components: { Stroke },
  props: {
    activeElement: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    rect () {
      return new Rect(this.$el.getBoundingClientRect())
    }
  },
  watch: {
    activeElement (nv) {
      this.$refs.stroke.setTarget(nv)
    }
  },
  mounted () {
    window.addEventListener('mousemove', this.colliding)
  },
  methods: {
    colliding (e) {
      if (e.metaKey) {
        console.log(this.rect.colliding(e.target.getBoundingClientRect()))
      }
    },
    refreshTarget () {
      this.$refs.stroke.refreshTarget()
    }
  }
}
</script>

<style>
.resize-container {
  z-index: 99999;
}

</style>
