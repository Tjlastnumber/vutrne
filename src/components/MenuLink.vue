<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MenuLink',
  components: {
    RouterLink
  },
  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <RouterLink
    :to="to"
    class="w-full p-2 text-xs rounded-md dark:hover:bg-dark-hover hover:cursor-default"
  >
    <slot />
  </RouterLink>
</template>

<style scoped>
/* code... */
</style>
