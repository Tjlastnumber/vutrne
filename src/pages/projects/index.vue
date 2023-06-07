<script>
import { RouterView } from 'vue-router'
import HeaderPanel from '../layout/HeaderPanel.vue'
import FavoritesTab from './FavoritesTab.vue'
import ProjectsTab from './ProjectsTab.vue'
import RecentsLink from './recents/RecentsLink.vue'
import DraftsLink from './drafts/DraftsLink.vue'
import LayoutPanel from '@/pages/layout/LayoutPanel.vue'

export default {
  name: 'ProjectsPage',
  components: {
    LayoutPanel,
    HeaderPanel,
    FavoritesTab,
    ProjectsTab,
    RecentsLink,
    DraftsLink,
    RouterView,
  },
}
</script>

<template>
  <div id="projects">
    <LayoutPanel
      :fix-left="true"
    >
      <template #header>
        <HeaderPanel tabindex="0" />
      </template>
      <template #left>
        <section class="flex-none px-4 py-2 gap-y-2">
          <RecentsLink tabindex="0" />
          <DraftsLink tabindex="0" />
        </section>
        <div class="justify-start grid grid-cols-1">
          <FavoritesTab />
          <ProjectsTab />
        </div>
      </template>
      <template #content>
        <RouterView />
      </template>
      <template #right />
    </LayoutPanel>
  </div>
</template>

<style scoped>
/* code... */
</style>
