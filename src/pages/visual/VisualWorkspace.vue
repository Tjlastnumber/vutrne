<template>
  <div
    v-stroke="hoverElement"
    v-selection-box
    class="top-0 left-0 w-full h-full bg-light-disabled dark:bg-dark/80"
    @mousemove="onMouseMove"
  >
    <Zoom
      class="top-0 left-0 w-full h-full overflow-hidden border-dark-primary"
      @scale="onScale"
      @movearea="refreshTarget()"
    >
      <Container
        @mousedown.left.native="onSelectedElement"
      >
        <img
          ref="img"
          vv-component
          src="https://picsum.photos/1024/800"
          width="500"
          height="300"
        >
      </Container>
    </Zoom>
    <ResizeBox
      ref="resizeBox"
      :target="activeElement"
    />
  </div>
</template>

<script>
import Zoom from '@/components/Zoom.vue'
import ResizeBox from '@/components/ResizeBox.vue'
import Container from '@/components/Container.vue'
import { isComponent, isNone } from '@/utils'

export default {
  name: 'Workspace', /* eslint-disable-line */
  components: {
    Zoom,
    ResizeBox,
    Container
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
      hoverElement: undefined,
      activeElement: []
    }
  },
  watch: {
    hoverElement (nv) {
      if (isNone(nv)) {
        this.$stroke.hide()
      } else {
        this.$stroke.setTarget([ nv ])
      }
    },
    activeElement () {
      this.$stroke.hide()
    }
  },
  methods: {
    refreshTarget () {
      this.$stroke.refreshTarget()
      this.$refs.resizeBox.refreshTarget()
    },
    onSelectedElement (e) {
      const activeElement = e.target
      this.activeElement = isComponent(activeElement) ? [ activeElement ] : undefined
    },
    onScale (e) {
      this.refreshTarget()
      window.globalScale = e.scale
    },
    onMouseMove (e) {
      const hoverElement = e.composedpath ? e.composedpath()[0] : e.target
      if (isComponent(hoverElement)) {
        this.hoverElement = hoverElement
      }
    }
  }
}
</script>

<style>

</style>
