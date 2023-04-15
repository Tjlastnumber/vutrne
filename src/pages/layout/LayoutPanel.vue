<template>
  <div>
    <header v-show="header">
      <slot name="header" />
    </header>
    <main class="w-full h-full">
      <!-- left panel -->
      <SplitPanel
        v-show="left"
        class="fixed inset-y-0 z-20 px-4 bg-light dark:bg-dark"
        left
        :class="haveHeader"
      >
        <slot name="left" />
      </SplitPanel>
      <!-- main panel -->
      <div class="fixed inset-0 w-full h-full">
        <slot />
      </div>
      <!-- right panel -->
      <SplitPanel
        v-show="right"
        class="fixed inset-y-0 z-20 px-4 bg-light dark:bg-dark"
        right
        :can-change-size="false"
        :class="haveHeader"
      >
        <slot name="right" />
      </SplitPanel>
    </main>
    <footer />
  </div>
</template>

<script>
import SplitPanel from '@/components/SplitPanel.vue'
export default {
  name: 'LayoutPanel',
  components: {
    SplitPanel
  },
  props: {
    header: {
      type: Boolean,
      default: true
    },
    left: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    haveHeader () {
      return this.header ? 'top-14' : 'top-0'
    }
  }
}
</script>

<style></style>
