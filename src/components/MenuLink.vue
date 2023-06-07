<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MenuLink',
  components: {
    RouterLink,
  },
  props: {
    to: {
      type: String,
      default: '',
    },
    activeClass: {
      type: String,
      default: 'text-primary',
    },
  },
}
</script>

<template>
  <RouterLink
    v-slot="{ isActive, navigate }"
    custom
    :to="to"
    :active-class="activeClass"
    class="flex w-full p-2 text-xs gap-y-2 rounded-md dark:hover:bg-dark-hover hover:bg-light-disabled hover:cursor-default"
  >
    <div
      class="gap-1"
      :class="[ isActive && activeClass ]"
      @click="navigate"
    >
      <slot :is-active="isActive" />
    </div>
  </RouterLink>
</template>

<style scoped>
/* code... */
</style>
