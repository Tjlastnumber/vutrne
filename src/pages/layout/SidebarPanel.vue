
<script>
import SplitPanel from '@/components/SplitPanel.vue'
export default {
  name: 'SidebarPanel',
  components: { SplitPanel },
  props: {
    left: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: false
    },
    canChangeSize: {
      type: Boolean,
      default: true
    },
    maxWidth: {
      type: Number,
      default: 360
    },
    minWidth: {
      type: Number,
      default: 240
    }
  },
  computed: {
    dock() {
      return this.right
        ? 'right-0'
        : this.left
          ? 'left-0'
          : ''
    }
  }
}
</script>

<template>
  <SplitPanel
    :class="dock"
    :left="left"
    :right="right"
    :min-width="minWidth"
    :max-width="maxWidth"
    class="fixed inset-y-0 z-20 h-full duration-500 bg-light dark:bg-dark"
  >
    <slot />
  </SplitPanel>
</template>

<style></style>
