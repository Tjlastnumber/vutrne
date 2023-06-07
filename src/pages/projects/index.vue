<script>
import { RouterView } from 'vue-router'
import HeaderPanel from '../layout/HeaderPanel.vue'
import FavoritesTab from './FavoritesTab.vue'
import ProjectsTab from './ProjectsTab.vue'
import RecentsLink from './recents/RecentsLink.vue'
import DraftsLink from './drafts/DraftsLink.vue'
import LayoutPanel from '@/pages/layout/LayoutPanel.vue'
import ScrollPanel from '@/components/ScrollPanel.vue'

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
    ScrollPanel,
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
        <section class="flex-none px-4 py-2 border-b gap-y-2 border-light-disabled dark:border-dark-disabled">
          <RecentsLink tabindex="0" />
          <DraftsLink tabindex="0" />
        </section>
        <ScrollPanel>
          <FavoritesTab />
          <ProjectsTab />
        </ScrollPanel>
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
