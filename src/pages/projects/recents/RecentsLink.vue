<script>
import ClockIcon from '@/components/ClockIcon'
import MenuLink from '@/components/MenuLink'

export default {
  name: 'RecentsLink',
  components: {
    MenuLink,
    ClockIcon
  }
}
</script>

<template>
  <MenuLink
    v-slot="{ isActive }"
    to="/projects/recents"
  >
    <ClockIcon :actived="isActive" />
    <span> Recents </span>
  </MenuLink>
</template>

<style scoped>
/* code... */
</style>
