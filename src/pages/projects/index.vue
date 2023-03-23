<template>
  <div id="projects">
    <LayoutPanel :right="false">
      <template #header>
        <HeaderPanel v-tooltip.bottom="brand" />
      </template>
      <template #left>
        <CollapsePanel :name="'Favorites'">
          <CollapseItem> file </CollapseItem>
        </CollapsePanel>
        <CollapsePanel :name="'Projects'">
          <CollapseItem>project1</CollapseItem>
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
    return {}
  }
}
</script>

<style scoped>
/* code... */
</style>
