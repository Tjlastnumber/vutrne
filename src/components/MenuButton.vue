<template>
  <VDropdown placement="bottom-start">
    <slot />

    <template #popper>
      <div class="w-auto p-2 dark:bg-black">
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
  name: 'MenuButton',
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
