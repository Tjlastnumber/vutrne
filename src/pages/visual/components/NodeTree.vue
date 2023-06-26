<script>
// import CollapsePanel from '@/components/CollapsePanel'

import { createNamespacedHelpers } from 'vuex'
import namespace from '../store/namespace'
import NodeInstance from './NodeInstance.vue'

const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'NodeTree',
  components: {
    NodeInstance,
  },
  computed: {
    ...mapState({
      nodeTree: state => state.nodeTree,
    }),
  },
}
</script>

<template>
  <div class="p-4 border-b border-light-disabled dark:border-dark-disabled">
    <NodeInstance
      v-for="node in nodeTree"
      :key="node.id"
      :node="node"
    />
  </div>
</template>
