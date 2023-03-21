<template>
  <div>
    <div class="w-full h-auto duration-500">
      <div
        class="flex flex-row items-center justify-between w-full p-0.5 my-4 bg-gray-200 rounded-lg select-none dark:bg-white/20"
      >
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="
            index === currentTab
              ? 'shadow-md bg-white dark:bg-black-80 text-black dark:text-white font-semibold'
              : 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-200 font-medium'
          "
          class="items-center flex-1 px-1 py-1.5 text-xs text-center rounded-md cursor-pointer duration-300 after:w-0.5"
          @click="selectTab(index)"
        >
          {{ tab }}
        </div>
      </div>
      <div
        v-for="(tab, index) in tabs"
        v-show="currentTab === index"
        :key="index"
      >
        <slot :name="tab" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabPanel',
  props: {
    tabs: {
      type: Array,
      require: true,
      default: () => []
    },
    currentTab: {
      type: Number,
      default: 0
    }
  },
  methods: {
    selectTab (index) {
      this.$emit('tab-change', { tabIndex: index })
    }
  }
}
</script>

<style></style>
