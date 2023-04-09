<template>
  <div>
    <header v-show="header">
      <slot name="header" />
    </header>
    <main class="w-full h-full">
      <SidebarPanel
        v-show="left"
        left
        :class="header ? 'top-14' : 'top-0'"
      >
        <slot name="left" />
      </SidebarPanel>
      <div class="fixed inset-0 w-full h-full">
        <slot />
      </div>
      <SidebarPanel
        v-show="right"
        right
        :class="header ? 'top-14' : 'top-0'"
      >
        <slot name="right" />
      </SidebarPanel>
    </main>
    <footer />
  </div>
</template>

<script>
import SidebarPanel from './SidebarPanel.vue'
export default {
  name: 'LayoutPanel',
  components: { SidebarPanel },
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
  }
}
</script>

<style></style>
