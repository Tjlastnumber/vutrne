<template>
  <div>
    <LayoutPanel
      :header="false"
      :left="false"
      :right="false"
    >
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
              <CollapseItem> button </CollapseItem>
            </CollapsePanel>
            <CollapsePanel :name="'Style'">
              <CollapseItem> h1 </CollapseItem>
            </CollapsePanel>
          </template>
        </TabPanel>
      </template>
      <template #default>
        <div class="w-full h-full bg-gray-200 dark:bg-black/60">
          <ZoomContainer
            class="relative w-full h-full border-dark-primary"
          >
            <div
              id="canvas"
              class="absolute w-auto h-auto bg-white top-1/3 left-1/3 dark:bg-dark"
            >
              <img
                src="https://picsum.photos/1024/800"
                width="100%"
                height="100%"
                draggable="false"
              >
            </div>
          </ZoomContainer>
        </div>
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
import ZoomContainer from '@/components/ZoomContainer.vue'

export default {
  name: 'VisualPage',
  components: {
    LayoutPanel,
    HeaderPanel,
    CollapsePanel,
    CollapseItem,
    TabPanel,
    ZoomContainer
  },
  data () {
    return {
      currentTab: 0
    }
  }
}
</script>

<style></style>
