<script>
import ChevronDownIcon from './ChevronDownIcon.vue'
import ScrollPanel from './ScrollPanel.vue'

export default {
  name: 'CollapsePanel',
  components: {
    ChevronDownIcon,
    ScrollPanel
  },
  props: {
    name: {
      type: String,
      default: 'NoName',
      require: true
    }
  },
  data() {
    return {
      isExpanded: true,
      isHover: false
    }
  }
}
</script>

<template>
  <div
    class="flex flex-col h-full overflow-auto border-t select-none border-light-disabled dark:border-dark-disabled"
  >
    <!-- header -->
    <div
      class="flex flex-row items-center justify-between px-2 py-4 text-xs cursor-pointer space-x-1 text-light-primary hover:text-black dark:text-dark-primary dark:hover:text-white"
      @click="isExpanded = !isExpanded"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <ChevronDownIcon
        class="flex-initial duration-300 transition-opacity will-change-transform"
        :expand="isExpanded"
        :class="[ isHover ? 'opacity-100' : 'opacity-0' ]"
      />
      <div class="flex-1 font-bold leading-5">
        <slot name="header">
          {{ name }}
        </slot>
      </div>
    </div>
    <!-- body -->
    <transition name="collapse">
      <ScrollPanel
        v-if="isExpanded"
        class="flex flex-col space-y-2"
      >
        <slot />
      </ScrollPanel>
    </transition>
  </div>
</template>

<style scoped>

.collapse-enter-active,
.collapse-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}

.collapse-enter,
.collapse-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

</style>
