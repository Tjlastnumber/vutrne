<template>
  <div>
    <LayoutPanel>
      <template #header>
        <HeaderPanel />
      </template>
      <template #left>
        <TabPanel
          :tabs="['Pages', 'Layers', 'Assets']"
          :current-tab="currentTab"
          @tab-change="(e) => (currentTab = e.tabIndex)"
        >
          <template #Pages>
            <CollapsePanel :name="'Pages'" />
            <CollapsePanel :name="'Favorites'" />
          </template>
        </TabPanel>
      </template>
      <template #default>
        <div class="w-full h-full bg-gray-200 dark:bg-black/60">
          <div class="absolute w-1/3 bg-white h-1/3 left-1/3 top-1/3" />
        </div>
      </template>
    </LayoutPanel>
  </div>
</template>

<script>
import LayoutPanel from '../layout/LayoutPanel.vue'
import HeaderPanel from '../layout/HeaderPanel.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
// import CollapseItem from '@/components/CollapseItem.vue'
import TabPanel from '../../components/TabPanel.vue'

export default {
  name: 'VisualPage',
  components: {
    LayoutPanel,
    HeaderPanel,
    CollapsePanel,
    // CollapseItem,
    TabPanel
  },
  data () {
    return {
      currentTab: 0
    }
  }
}
</script>

<style></style>
