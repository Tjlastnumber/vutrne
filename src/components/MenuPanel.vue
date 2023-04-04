<template>
  <VDropdown placement="bottom-start">
    <slot />
    <template #popper>
      <div class="w-auto p-2 bg-light/30 dark:bg-neutral-800/50 shadow-lg drop-shadow-2xl backdrop-blur-[100px]">
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

<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'MenuPanel',
  components: { MenuItem },
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentMenu: -1
    }
  }
}
</script>

<style scoped>
.left-99p {
  left: 99%;
}
</style>
