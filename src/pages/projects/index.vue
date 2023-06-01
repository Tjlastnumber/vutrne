<template>
  <div id="projects">
    <LayoutPanel
      :right="false"
      :fix-left="true"
    >
      <template #header>
        <HeaderPanel />
      </template>
      <template #left>
        <div class="flex flex-col py-4 space-y-2">
          <RecentsLink />
          <DraftsLink />
        </div>
        <FavoritesTab />
        <ProjectsTab />
      </template>
      <template #content>
        <RouterView />
      </template>
    </LayoutPanel>
  </div>
</template>

<script>
import LayoutPanel from '@/pages/layout/LayoutPanel.vue'
import HeaderPanel from '../layout/HeaderPanel.vue'
import FavoritesTab from './FavoritesTab.vue'
import ProjectsTab from './ProjectsTab.vue'
import RecentsLink from './recents/RecentsLink.vue'
import DraftsLink from './drafts/DraftsLink.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'ProjectsPage',
  components: {
    LayoutPanel,
    HeaderPanel,
    FavoritesTab,
    ProjectsTab,
    RecentsLink,
    DraftsLink,
    RouterView
  }
}
</script>

<style scoped>
/* code... */
</style>
