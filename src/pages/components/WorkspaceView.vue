<template>
  <div
    v-stroke="canvas"
    class="top-0 left-0 w-full h-full bg-light-disabled dark:bg-dark/80"
  >
    <Zoom
      class="top-0 left-0 w-full h-full overflow-hidden border-dark-primary"
    >
      <div
        id="canvas"
        ref="canvas"
        class="absolute w-9/12 overflow-hidden bg-white dark:bg-dark translate-x-48 translate-y-20 h-5/6"
      >
        <img
          src="https://picsum.photos/1024/800"
          width="500"
          height="300"
          draggable="false"
        >

        <button class="p-4 text-black bg-white rounded-md ring-1 ring-rose-500">
          Click
        </button>
        <div class="w-20 h-20 bg-zinc-500" />
      </div>
    </Zoom>
  </div>
</template>

<script>
import Zoom from '@/components/Zoom.vue'

export default {
  name: 'WorkspaceView',
  components: {
    Zoom
  },
  data () {
    return {
      canvas: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.canvas = this.$refs.canvas
    })
  }
}
</script>

<style>

</style>
