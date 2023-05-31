<script>
import LayoutPanel from '../layout/LayoutPanel.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
import CollapseItem from '@/components/CollapseItem.vue'
import TabPanel from '../../components/TabPanel.vue'
import Workspace from './VisualWorkspace.vue'
import TextBox from '@/components/TextBox'
import VisualHeader from './VisualHeader'
import VisualPages from './VisualPages'
import VisualLayers from './VisualLayers'
import VisualComponents from './VisualComponents'

import { createNamespacedHelpers } from 'vuex'
import namespace from './store/namespace'

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
    VisualLayers,
    VisualComponents
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
      },
      activeElement: undefined,
      hoverElements: null
    }
  },
  computed: {
    ...mapState({
      componentTree: state => state.componentTree,
      activeElements: state => state.activeElements
    })
  },
  watch: { },
  methods: {
    handleActiveElement(el) {
    }
  }
}

</script>

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
              <VisualComponents
                v-for="component in componentTree"
                :key="component.id"
                :component="component"
              />
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
