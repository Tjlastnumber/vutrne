<script>
export default {
  name: 'TabPanel',
  props: {
    tabs: {
      type: Array,
      require: true,
      default: () => [],
    },
    currentTab: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    selectTab(index) {
      this.$emit('tab-change', { tabIndex: index })
    },
  },
}
</script>

<template>
  <div class="flex flex-col w-full h-full overflow-auto duration-500">
    <div class="px-4 border-b border-light-disabled dark:border-dark-disabled">
      <div
        class="grid grid-cols-3 w-full p-0.5 my-4 rounded-lg select-none dark:bg-dark-disabled bg-light-disabled"
      >
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="
            index === currentTab
              ? 'shadow-md bg-light dark:bg-dark text-black dark:text-white font-semibold'
              : 'text-light-secondary hover:text-black dark:hover:text-white dark:text-dark-secondary font-medium'
          "
          class="items-center px-1 py-1.5 text-xs text-center rounded-md cursor-pointer duration-300 after:w-0.5"
          @click="selectTab(index)"
        >
          <span> {{ tab }} </span>
        </div>
      </div>
    </div>

    <div
      v-for="(tab, index) in tabs"
      v-show="currentTab === index"
      :key="index"
      class="w-full h-full overflow-auto"
    >
      <slot :name="tab" />
    </div>
  </div>
</template>

<style></style>
