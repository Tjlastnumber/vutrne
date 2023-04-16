<template>
  <div
    class="top-0 left-0 w-full h-full bg-light-disabled dark:bg-dark/80"
    @mousemove="onMouseMove"
    @mousedown.left="onMouseDown"
  >
    <Zoom
      v-stroke="hoverElement"
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
        <!-- <img -->
        <!--   vv-component -->
        <!--   src="https://picsum.photos/1024/800" -->
        <!--   width="500" -->
        <!--   height="300" -->
        <!--   draggable="false" -->
        <!-- > -->
        <!---->
        <!-- <button -->
        <!--   vv-component -->
        <!--   class="p-4 text-black bg-white rounded-md ring-1 ring-rose-500" -->
        <!-- > -->
        <!--   Click -->
        <!-- </button> -->
        <!-- <div -->
        <!--   vv-component -->
        <!--   class="w-20 h-20 bg-zinc-500" -->
        <!-- /> -->
        <!-- <TextBox -->
        <!--   vv-component -->
        <!--   text="Label" -->
        <!-- /> -->
      </div>
    </Zoom>
  </div>
</template>

<script>
import Zoom from '@/components/Zoom.vue'
// import TextBox from '@/components/TextBox.vue'

export default {
  name: 'Workspace', /* eslint-disable-line */
  components: {
    Zoom
    // TextBox
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
      hoverElement: {}
    }
  },
  mounted () { },
  methods: {
    refreshHoverElement () {
      const cache = this.hoverElement
      this.hoverElement = {}
      this.hoverElement = cache
    },
    onScale () {
      this.refreshHoverElement()
    },
    onStartScale () {
      this.refreshHoverElement()
    },
    onMoveArea () {
      this.refreshHoverElement()
    },
    onMouseMove (e) {
      this.hoverElement = e.composedPath
        ? e.composedPath()[0]
        : e.target
    },
    onMouseDown (e) {
      const { clientX, clientY } = e

      const onMouseMove = (ev) => {
        this.$stroke.top = Math.min(ev.clientY, clientY)
        this.$stroke.left = Math.min(ev.clientX, clientX)
        this.$stroke.width = Math.abs(ev.clientX - clientX)
        this.$stroke.height = Math.abs(ev.clientY - clientY)
      }

      const onMouseUp = () => {
        this.$stroke.top = 0
        this.$stroke.left = 0
        this.$stroke.width = 0
        this.$stroke.height = 0
        window.removeEventListener('mouseup', onMouseUp)
        window.removeEventListener('mousemove', onMouseMove)
      }

      window.addEventListener('mouseup', onMouseUp)
      window.addEventListener('mousemove', onMouseMove)
    }
  }
}
</script>

<style>

</style>
