<script>
import { isUndef } from '@/utils'

import ChevronDownIcon from '@/components/ChevronDownIcon'

import { createNamespacedHelpers } from 'vuex'
import namespace, { useNamespace } from '../store/namespace'
const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'NodeInstance',
  components: {
    ChevronDownIcon
  },
  props: {
    node: {
      type: Object,
      default: undefined
    },
    deep: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      activeNodes: state => state.activeNodes,
      hoverNodes: state => state.hoverNodes,
      expansionMap: state => state.expansionMap
    }),
    activeCss() {
      return (!isUndef(this.activeElement) && this.activeElement.id === this.node.id)
        ? 'bg-primary'
        : ''
    },
    hoverCss() {
      return this.hover || (!isUndef(this.hoverElement) && this.node.id === this.hoverElement.id)
        ? 'bg-dark-hover'
        : ''
    },
    actived() {
      return !!this.activeNodes[this.node.id]
    },
    hovered() {
      return !!this.hoverNodes[this.node.id]
    },
    expanded() {
      return !!this.expansionMap[this.node.id]
    }
  },
  methods: {
    enter() {
      this.$store.commit(useNamespace('HOVER_NODES'), this.node)
      this.$emit('in', { target: this.node })
    },
    leave() {
      this.$store.commit(useNamespace('HOVER_NODES_DELETE'), this.node)
      this.$emit('out')
    },
    /**
     * @param {MouseEvent} e
     **/
    handleActived(e) {
      this.$store.dispatch(useNamespace('activeNodes'), {
        node: this.node,
        accumulative: e.shiftKey
      })
      this.$emit('active', { target: this.node })
    },
    onToggle(e) {
      this.toggleNode(!this.expanded, e.altKey)
    },
    onExpand() {
      this.toggleNode(true)
    },
    onCollapse() {
      this.toggleNode(false)
    },
    toggleNode(expanded, recursive = false) {
      this.$store.dispatch('visual/toggleNode', {
        node: this.node,
        expanded,
        recursive
      })
    }
  }
}
</script>

<template>
  <div
    class="text-xs font-normal text-center rounded-md"
    :class="{ 'bg-primary/50': actived }"
  >
    <div>
      <div
        class="flex flex-row p-1 space-x-1 rounded-t-md"
        :class="{ 'bg-primary': actived, 'bg-dark-hover': hovered, 'rounded-md': !expanded || hovered }"
        :style="{ paddingLeft: `${15 * deep}px` }"
        @mouseenter="enter"
        @mouseleave="leave"
        @click.left="handleActived"
      >
        <ChevronDownIcon
          v-show="node.children"
          :expand="expanded"
          @click.native.stop.prevent="onToggle"
        />
        <span class="before:content-['<'] after:content-['>']">{{ node.name }}</span>
      </div>

      <!-- children -->
      <NodeInstance
        v-for="node in node.children"
        v-show="expanded"
        :key="node.id"
        :node="node"
        :deep="deep + 1"
      />
    </div>
  </div>
</template>
