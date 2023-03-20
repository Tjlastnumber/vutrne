<template>
  <div id="projects">
    <LayoutPanel :right="false">
      <template #header>
        <HeaderPanel />
      </template>
      <template #left>
        <CollapsePanel :name="'Projects'">
          <CollapseItem>project1</CollapseItem>
          <CollapseItem>project1</CollapseItem>
          <CollapseItem>project1</CollapseItem>
          <CollapseItem>project1</CollapseItem>
        </CollapsePanel>
        <CollapsePanel :name="'Favorites'">
          <CollapseItem> file </CollapseItem>
        </CollapsePanel>
      </template>
      <template #default>
        test
      </template>
    </LayoutPanel>
  </div>
</template>

<script>
import LayoutPanel from '@/pages/layout/LayoutPanel.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
import CollapseItem from '@/components/CollapseItem.vue'
import HeaderPanel from '../layout/HeaderPanel.vue'

export default {
  name: 'ProjectsPage',
  components: {
    LayoutPanel,
    CollapsePanel,
    CollapseItem,
    HeaderPanel
  },
  data () {
    return {
      brand: 'Visuel'
    }
  }
}
</script>

<style scoped>
/* code... */
</style>
