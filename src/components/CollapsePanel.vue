<template>
  <div
    class="flex flex-col pt-4 border-t select-none border-light-disabled dark:border-dark-disabled space-y-1"
    :class="isExpanded ? '' : 'pb-4'"
  >
    <div
      class="flex flex-row items-center justify-between text-xs cursor-pointer text-light-primary hover:text-black dark:text-dark-primary dark:hover:text-white"
      @click="isExpanded = !isExpanded"
    >
      <div class="flex flex-row items-center space-x-1">
        <div
          :class="isExpanded ? '' : '-rotate-90'"
          class="duration-300"
        >
          <ChevronDownIcon />
        </div>
        <div class="font-bold">
          {{ name }}
        </div>
      </div>
    </div>
    <div
      v-show="isExpanded"
      class="flex flex-col text-center justify-center space-y-1 pt-2 pb-3"
    >
      <slot />
    </div>
  </div>
</template>
<script>
import ChevronDownIcon from './ChevronDownIcon.vue'

export default {
  name: 'CollapsePanel',
  components: {
    ChevronDownIcon
  },
  props: {
    name: {
      type: String,
      default: 'Set Name',
      require: true
    }
  },
  data () {
    return {
      isExpanded: true
    }
  }
}
</script>

<style></style>
