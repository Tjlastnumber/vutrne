<script>
// import CollapsePanel from '@/components/CollapsePanel'
import NodeInstance from './NodeInstance'

import { createNamespacedHelpers } from 'vuex'
import namespace from '../store/namespace'
const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'NodeTree',
  components: {
    NodeInstance
  },
  computed: {
    ...mapState({
      nodeTree: state => state.nodeTree
    })
  }
}
</script>

<template>
  <div>
    <div class="pt-2">
      <NodeInstance
        v-for="node in nodeTree"
        :key="node.id"
        :node="node"
      />
    </div>
  </div>
</template>
