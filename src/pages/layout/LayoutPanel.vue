<script>
import SplitPanel from '@/components/SplitPanel.vue'
export default {
  name: 'LayoutPanel',
  components: {
    SplitPanel,
  },
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    left: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: true,
    },
    fixLeft: {
      type: Boolean,
      default: false,
    },
    fixRight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    haveHeader() {
      return this.header ? 'top-14' : 'top-0'
    },
  },
}
</script>

<template>
  <div>
    <header v-show="header">
      <slot name="header" />
    </header>
    <main>
      <!-- defualt -->
      <div
        class="fixed inset-y-0 flex flex-row w-full overflow-auto dark:bg-light-secondary"
        :class="haveHeader"
      >
        <!-- left -->
        <SplitPanel
          v-show="left"
          class="relative inset-y-0 z-40 flex flex-col flex-none h-full overflow-hidden bg-light dark:bg-dark"
          left
          :can-change-size="fixLeft"
        >
          <slot name="left" />
        </SplitPanel>
        <!-- content -->
        <div
          class="relative z-10 flex-1 basis-full dark:bg-light-secondary"
        >
          <slot name="content" />
        </div>
        <div class="fixed inset-0 z-20 w-full">
          <slot />
        </div>
        <!-- right -->
        <SplitPanel
          v-show="right"
          class="relative z-40 flex-none bg-light dark:bg-dark"
          right
          :can-change-size="fixRight"
          :min-width="250"
        >
          <slot name="right" />
        </SplitPanel>
      </div>
    </main>
    <footer />
  </div>
</template>
<style></style>
