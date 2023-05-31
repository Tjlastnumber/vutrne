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
  <MenuLink to="/projects/recents">
    <div class="flex flex-row items-center space-x-1">
      <ClockIcon />
      <span> Recents </span>
    </div>
  </MenuLink>
</template>

<style scoped>
/* code... */
</style>
