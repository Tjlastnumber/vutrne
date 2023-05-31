<script>
// import CollapsePanel from '@/components/CollapsePanel'
import NodeInstance from './NodeInstance.vue'

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
    <div class="pt-4 border-t border-light-disabled dark:border-dark-disabled">
      <NodeInstance
        v-for="node in nodeTree"
        :key="node.id"
        :node="node"
      />
    </div>
  </div>
</template>
