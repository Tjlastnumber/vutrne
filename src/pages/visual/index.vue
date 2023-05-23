<template>
  <div>
    <LayoutPanel>
      <template #header>
        <VisualHeader />
      </template>

      <template #left>
        <TabPanel
          :tabs="['Pages', 'Layers', 'Assets']"
          :current-tab="leftTab"
          @tab-change="$event => leftTab = $event.tabIndex"
        >
          <template #Pages>
            <VisualPages />
          </template>

          <template #Layers>
            <VisualLayers />
          </template>

          <template #Assets>
            <CollapsePanel :name="'Components'">
              <CollapseItem> Components </CollapseItem>
            </CollapsePanel>
            <CollapsePanel :name="'Style'">
              <CollapseItem> h1 </CollapseItem>
            </CollapsePanel>
          </template>
        </TabPanel>
      </template>

      <template #default>
        <Workspace />
      </template>

      <template #right>
        <TabPanel
          :tabs="['Style', 'Css', 'Event']"
          :current-tab="rightTab"
          @tab-change="(e) => (rightTab = e.tabIndex)"
        >
          <template #Style>
            <CollapsePanel :name="'Style'">
              <TextBox
                v-model="componentStyle.position.top"
                text="top"
              />
              <TextBox
                v-model="componentStyle.position.right"
                text="right"
                class="w-full"
              />
              <TextBox
                v-model="componentStyle.position.bottom"
                text="bottom"
                class="w-full"
              />
              <TextBox
                v-model="componentStyle.position.left"
                text="left"
                class="w-full"
              />
            </CollapsePanel>
          </template>
          <template #Css>
            <CollapsePanel :name="'Css'">
              <CollapseItem>Css</CollapseItem>
            </CollapsePanel>
          </template>
          <template #Event>
            <CollapsePanel :name="'Event'">
              <CollapseItem>Event Bind</CollapseItem>
            </CollapsePanel>
          </template>
        </TabPanel>
      </template>
    </LayoutPanel>
  </div>
</template>

<script>
import LayoutPanel from '../layout/LayoutPanel.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
import CollapseItem from '@/components/CollapseItem.vue'
import TabPanel from '../../components/TabPanel.vue'
import Workspace from './VisualWorkspace.vue'
import TextBox from '@/components/TextBox'
import VisualHeader from './VisualHeader'
import VisualPages from './VisualPages'
import VisualLayers from './VisualLayers.vue'

export default {
  name: 'VisualPage',
  components: {
    LayoutPanel,
    VisualHeader,
    CollapsePanel,
    CollapseItem,
    TabPanel,
    Workspace,
    TextBox,
    VisualPages,
    VisualLayers
  },
  data() {
    return {
      leftTab: 0,
      rightTab: 0,
      componentStyle: {
        position: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }
  }
}
</script>
