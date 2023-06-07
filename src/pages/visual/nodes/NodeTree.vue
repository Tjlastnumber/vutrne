<script>
// import CollapsePanel from '@/components/CollapsePanel'
import NodeInstance from './NodeInstance.vue'

import { createNamespacedHelpers } from 'vuex'
import namespace from '../store/namespace'
import ScrollPanel from '@/components/ScrollPanel.vue'
const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'NodeTree',
  components: {
    NodeInstance,
    ScrollPanel,
  },
  computed: {
    ...mapState({
      nodeTree: state => state.nodeTree,
    }),
  },
}
</script>

<template>
  <ScrollPanel class="py-4 border-t border-light-disabled dark:border-dark-disabled">
    <NodeInstance
      v-for="node in nodeTree"
      :key="node.id"
      :node="node"
    />
  </ScrollPanel>
</template>
