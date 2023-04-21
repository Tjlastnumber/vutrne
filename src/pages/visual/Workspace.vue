<template>
  <div
    v-stroke="hoverElements"
    v-selection-box
    class="top-0 left-0 w-full h-full bg-light-disabled dark:bg-dark/80"
    @mousemove="onMouseMove"
  >
    <Zoom
      class="top-0 left-0 w-full h-full overflow-hidden border-dark-primary"
      @startScale="refreshTarget"
      @scale="refreshTarget"
      @movearea="refreshTarget"
    >
      <div
        id="canvas"
        ref="canvas"
        class="absolute w-9/12 overflow-hidden bg-white dark:bg-dark translate-x-48 translate-y-20 h-5/6"
        @mousedown.left.prevent.stop="onSelectedElement"
      >
        <img
          ref="img"
          vv-component
          src="https://picsum.photos/1024/800"
          width="500"
          height="300"
          draggable="false"
        >

        <button
          vv-component
          class="p-4 text-black bg-white rounded-md ring-1 ring-rose-500"
        >
          Click
        </button>
        <div
          vv-component
          class="w-20 h-20 bg-zinc-500"
        />
        <TextBox
          vv-component
          text="Label"
        />
      </div>
    </Zoom>
    <ResizeBox
      ref="resizeBox"
      :active-element="selectedElement"
    />
  </div>
</template>

<script>
import Zoom from '@/components/Zoom.vue'
import TextBox from '@/components/TextBox.vue'
import ResizeBox from '@/components/ResizeBox.vue'

export default {
  name: 'Workspace', /* eslint-disable-line */
  components: {
    Zoom,
    TextBox,
    ResizeBox
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
      hoverElements: [],
      selectedElement: []
    }
  },
  methods: {
    onSelectedElement (e) {
      if (e.target.getAttribute('vv-component') === null) return
      this.selectedElement = [ e.target ]
    },
    refreshTarget () {
      this.$stroke.refreshTarget()
      this.$refs.resizeBox.refreshTarget()
    },
    onMouseMove (e) {
      if (e.target.getAttribute('vv-component') === null) return
      this.hoverElements = [ e.composedpath ? e.composedpath()[0] : e.target ]
      this.$stroke.setTarget(this.hoverElements)
    }
  }
}
</script>

<style>

</style>
