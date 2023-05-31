<script>
import MenuLink from '@/components/MenuLink'
import DraftIcon from '@/components/DraftIcon'

export default {
  name: 'DraftsLink',
  components: {
    MenuLink,
    DraftIcon
  }
}
</script>

<template>
  <MenuLink to="/projects/drafts">
    <div class="flex flex-row items-center space-x-1">
      <DraftIcon />
      <span> Drafts </span>
    </div>
  </MenuLink>
</template>

<style scoped>
/* code... */
</style>
