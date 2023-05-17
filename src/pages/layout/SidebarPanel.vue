<template>
  <nav
    class="fixed inset-y-0 z-20 duration-500"
    :class="dock"
  >
    <SplitPanel
      :left="left"
      :right="right"
      :min-width="minWidth"
      :max-width="maxWidth"
      class="bg-light dark:bg-dark"
    >
      <div class="px-4">
        <slot />
      </div>
    </SplitPanel>
  </nav>
</template>

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
    dock () {
      return this.right
        ? 'right-0'
        : this.left
          ? 'left-0'
          : ''
    }
  }
}
</script>

<style></style>
