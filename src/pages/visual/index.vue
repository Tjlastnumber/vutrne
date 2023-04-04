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
            <CollapsePanel :name="'Pages'">
              <CollapseItem>default page</CollapseItem>
            </CollapsePanel>
            <CollapsePanel :name="'Favorites'">
              <CollapseItem>favorites page</CollapseItem>
            </CollapsePanel>
          </template>
          <template #Layers>
            <CollapsePanel :name="'root'">
              <CollapseItem>&lt;element&gt;</CollapseItem>
            </CollapsePanel>
          </template>
          <template #Assets>
            <CollapsePanel :name="'Components'">
              <CollapseItem>
                <component
                  :is="component.name"
                  v-for="component in components"
                  :key="component.id"
                />
              </CollapseItem>
            </CollapsePanel>
            <CollapsePanel :name="'Style'">
              <CollapseItem> h1 </CollapseItem>
            </CollapsePanel>
          </template>
        </TabPanel>
      </template>
      <template #default>
        <WorkspaceView />
      </template>
    </LayoutPanel>
  </div>
</template>

<script>
import LayoutPanel from '../layout/LayoutPanel.vue'
import HeaderPanel from '../layout/HeaderPanel.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
import CollapseItem from '@/components/CollapseItem.vue'
import TabPanel from '../../components/TabPanel.vue'
import WorkspaceView from '../components/WorkspaceView.vue'

export default {
  name: 'VisualPage',
  components: {
    LayoutPanel,
    HeaderPanel,
    CollapsePanel,
    CollapseItem,
    TabPanel,
    WorkspaceView
  },
  data () {
    return {
      currentTab: 0
    }
  }
}
</script>

<style></style>
