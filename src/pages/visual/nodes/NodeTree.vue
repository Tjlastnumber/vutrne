<script>
import CollapsePanel from '@/components/CollapsePanel'
import NodeInstance from './NodeInstance'

import { createNamespacedHelpers } from 'vuex'
import namespace from '../store/namespace'
const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'NodeTree',
  components: {
    CollapsePanel,
    NodeInstance
  },
  computed: {
    ...mapState({
      nodeTree: state => state.nodeTree
    })
  }
  // script code...
}
</script>

<template>
  <CollapsePanel name="root">
    <NodeInstance
      v-for="node in nodeTree"
      :key="node.id"
      :node="node"
    />
  </CollapsePanel>
</template>

<style scoped>
/* code... */
</style>
