<script>
import { isUndef } from '@/utils'

import ChevronDownIcon from '@/components/ChevronDownIcon'

import { createNamespacedHelpers } from 'vuex'
import namespace, { useNamespace } from './store/namespace'
const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'VisualComponents',
  components: {
    ChevronDownIcon,
  },
  props: {
    component: {
      type: Object,
      default: undefined,
    },
    deep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      activeNodes: state => state.activeNodes,
      hoverNodes: state => state.hoverNodes,
      expansionMap: state => state.expansionMap,
    }),
    activeCss() {
      return (!isUndef(this.activeElement) && this.activeElement.id === this.component.id)
        ? 'bg-primary'
        : ''
    },
    hoverCss() {
      return this.hover || (!isUndef(this.hoverElement) && this.component.id === this.hoverElement.id)
        ? 'bg-dark-hover'
        : ''
    },
    actived() {
      return !!this.activeNodes[this.component.id]
    },
    hovered() {
      return !!this.hoverNodes[this.component.id]
    },
    expanded() {
      return !!this.expansionMap[this.component.id]
    },
  },
  methods: {
    enter() {
      this.$store.commit(useNamespace('HOVER_NODES'), this.component)
      this.$emit('in', { target: this.component })
    },
    leave() {
      this.$store.commit(useNamespace('HOVER_NODES_DELETE'), this.component)
      this.$emit('out')
    },
    /**
     * @param {MouseEvent} e
     **/
    handleActived(e) {
      if (e.shiftKey) {
        this.$store.commit('visual/ACTIVE_NODES_PUSH', this.component)
      } else {
        this.$store.commit('visual/ACTIVE_NODES', this.component)
      }
      this.$emit('active', { target: this.component })
    },
    onToggle(e) {
      console.log('toggle')
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
        node: this.component,
        expanded,
        recursive,
      })
    },
  },
}
</script>

<template>
  <div class="text-xs font-normal text-center rounded-md">
    <div :class="{ 'bg-primary/50': actived }">
      <div
        class="flex flex-row p-1 space-x-1 rounded-md"
        :class="{ 'bg-primary': actived, 'bg-dark-hover': hovered }"
        :style="{ paddingLeft: `${15 * deep}px` }"
        @mouseenter="enter"
        @mouseleave="leave"
        @click.left="handleActived"
      >
        <ChevronDownIcon
          v-show="component.children"
          :expand="expanded"
          @click.native.stop.prevent="onToggle"
        />
        <span>{{ component.name }}</span>
      </div>

      <!-- children -->
      <VisualComponents
        v-for="component in component.children"
        v-show="expanded"
        :key="component.id"
        :component="component"
        :deep="deep + 1"
      />
    </div>
  </div>
</template>
