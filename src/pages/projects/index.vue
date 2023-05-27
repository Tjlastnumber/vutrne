<template>
  <div id="projects">
    <LayoutPanel :right="false">
      <template #header>
        <HeaderPanel />
      </template>
      <template #left>
        <FavoritesTab />
        <ProjectsTab />
      </template>
      <template #default>
        test
      </template>
    </LayoutPanel>
  </div>
</template>

<script>
import LayoutPanel from '@/pages/layout/LayoutPanel.vue'
import HeaderPanel from '../layout/HeaderPanel.vue'
import FavoritesTab from './FavoritesTab.vue'
import ProjectsTab from './ProjectsTab.vue'

export default {
  name: 'ProjectsPage',
  components: {
    LayoutPanel,
    HeaderPanel,
    FavoritesTab,
    ProjectsTab
  }
}
</script>

<style scoped>
/* code... */
</style>
