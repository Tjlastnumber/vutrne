<script>
import MenuLink from '@/components/MenuLink.vue'
import DraftIcon from '@/components/DraftIcon.vue'

export default {
  name: 'DraftsLink',
  components: {
    MenuLink,
    DraftIcon,
  },
}
</script>

<template>
  <MenuLink
    v-slot="{ isActive }"
    to="/projects/drafts"
  >
    <DraftIcon :actived="isActive" />
    <span> Drafts </span>
  </MenuLink>
</template>

<style scoped>
/* code... */
</style>
