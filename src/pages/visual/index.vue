<script>
import { createNamespacedHelpers } from 'vuex'

import LayoutPanel from '../layout/LayoutPanel.vue'
import TabPanel from '../../components/TabPanel.vue'
import ComponentsPanel from './components/ComponentsPanel.vue'
import namespace from './store/namespace'
import Workspace from './VisualWorkspace.vue'
import VisualHeader from './VisualHeader'
import VisualPages from './VisualPages.vue'
import NodeTree from './nodes/NodeTree'
import CollapseItem from '@/components/CollapseItem.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
import TextBox from '@/components/TextBox'
import BaseTextbox from '@/plugins/base/BaseTextbox.vue'
import ScrollPanel from '@/components/ScrollPanel.vue'

const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'VisualIndex',
  components: {
    LayoutPanel,
    CollapsePanel,
    CollapseItem,
    TabPanel,
    Workspace,
    TextBox,
    VisualHeader,
    VisualPages,
    NodeTree,
    ComponentsPanel,
    BaseTextbox,
    ScrollPanel,
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
          left: 0,
        },
      },
      activeElement: undefined,
      hoverElements: null,
      inputTest: 'test',
    }
  },
  computed: {
    ...mapState({
      componentTree: state => state.componentTree,
      activeElements: state => state.activeElements,
    }),
  },
  watch: { },
  methods: { },
}

</script>

<template>
  <div>
    <LayoutPanel :fix-right="true">
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
            <ScrollPanel>
              <VisualPages />
            </ScrollPanel>
          </template>

          <template #Layers>
            <ScrollPanel>
              <NodeTree />
            </ScrollPanel>
          </template>

          <template #Assets>
            <ScrollPanel>
              <ComponentsPanel />
              <CollapsePanel :name="'Style'">
                style
              </CollapsePanel>
            </ScrollPanel>
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
                mode="input"
                name="bottom"
                class="w-full"
              />
              <BaseTextbox
                v-model.number.lazy="inputTest"
                label="left"
                name="left"
                class="dark:text-dark"
                text="left"
                mode="input"
              />
              {{ inputTest }}
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
