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
import LayoutPanel from '@/pages/layout/LayoutPanel'
import HeaderPanel from '../layout/HeaderPanel'
import FavoritesTab from './FavoritesTab'
import ProjectsTab from './ProjectsTab'
import RecentsLink from './recents/RecentsLink'
import DraftsLink from './drafts/DraftsLink'
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
