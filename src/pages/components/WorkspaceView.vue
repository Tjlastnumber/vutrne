<template>
  <div
    v-stroke="canvas"
    class="top-0 left-0 w-full h-full bg-light-disabled dark:bg-dark/80"
  >
    <Zoom
      class="top-0 left-0 w-full h-full overflow-hidden border-dark-primary"
      @startScale="onStartScale"
      @scale="onScale"
      @movearea="onMoveArea"
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
        <TextBox text="Label" />
      </div>
    </Zoom>
  </div>
</template>

<script>
import Zoom from '@/components/Zoom.vue'
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'WorkspaceView',
  components: {
    Zoom,
    TextBox
  },
  model: {
    prop: 'scale',
    event: 'change'
  },
  props: {
    scale: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      canvas: {},
      hoverEl: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.canvas = this.$refs.canvas
    })
  },
  methods: {
    onScale () {
      this.canvas = {}
      this.canvas = this.$refs.canvas
    },
    onStartScale () {
    },
    onMoveArea () {
      this.canvas = {}
      this.canvas = this.$refs.canvas
    },
    onHover () {
    }
  }
}
</script>

<style>

</style>
