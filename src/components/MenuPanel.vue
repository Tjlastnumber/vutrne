<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'MenuPanel',
  components: { MenuItem },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentMenu: -1,
    }
  },
}
</script>

<template>
  <VDropdown
    v-bind="$attrs"
  >
    <slot />
    <template #popper>
      <div class="w-auto p-2 bg-light/30 dark:bg-neutral-900/80 shadow-lg drop-shadow-2xl backdrop-blur-[100px]">
        <div
          v-for="(menu, index) in menus"
          :key="index"
        >
          <MenuItem :menu="menu" />
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<style scoped>
.left-99p {
  left: 99%;
}
</style>
