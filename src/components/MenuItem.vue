<script>
import ChevronDownIcon from './ChevronDownIcon.vue'

export default {
  name: 'MenuItem',
  components: {
    ChevronDownIcon,
  },
  props: {
    menu: {
      type: [ Object, String ],
      default: null,
      require: true,
    },
  },
  computed: {
    hasChildren() {
      return !!this.menu.children
    },
  },
}
</script>

<template>
  <div class="text-xs font-normal">
    <div
      v-if="menu === '|' || menu.name === '|'"
      class="w-full h-px my-2 select-none bg-light-disabled dark:bg-dark-secondary"
    />
    <div
      v-else-if="!hasChildren"
      class="relative w-full p-2 select-none rounded-md hover:bg-primary hover:text-black dark:text-white/60 dark:hover:bg-primary dark:hover:text-white"
    >
      <router-link
        v-if="menu.to"
        :to="menu.to"
      >
        <div class="flex flex-row items-center justify-between">
          <span>{{ menu.name || menu }}</span>
        </div>
      </router-link>
      <div v-else>
        <div class="flex flex-row items-center justify-between">
          <span>{{ menu.name || menu }}</span>
        </div>
      </div>
    </div>

    <VDropdown
      v-else
      class="flex flex-col justify-center"
      theme="sub-menu"
    >
      <button
        class="relative flex flex-row items-center justify-between w-full p-2 space-x-32 rounded-md hover:text-light-primary dark:text-dark-secondary hover:bg-primary dark:hover:text-white"
      >
        <span>
          {{ menu.name || menu }}
        </span>

        <div class="flex flex-row items-center">
          <span>⌘ + C</span>
          <ChevronDownIcon
            v-if="hasChildren"
            class="-rotate-90"
          />
        </div>
      </button>
      <template #popper>
        <div
          v-if="hasChildren"
          class="p-2 dark:bg-neutral-800/50 shadow-lg drop-shadow-2xl backdrop-blur-[100px]"
        >
          <MenuItem
            v-for="(children, index) in menu.children"
            :key="index"
            :menu="children"
          />
        </div>
      </template>
    </VDropdown>
  </div>
</template>

<style></style>
