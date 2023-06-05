<template>
  <div
    v-bind="$attrs"
    class="flex flex-row w-full text-xs outline-none cursor-default text-light-secondary rounded-md space-y-1 active:bg-light-disabled active:text-black hover:bg-light-hover hover:text-black dark:text-dark-primary dark:hover:bg-dark-hover dark:hover:text-white duration-300"
    :class="selected ? 'bg-light-disabled text-black dark:text-white dark:bg-dark-disabled ' : 'font-medium'"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CollapseItem',
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selected(nv) {
      if (nv) {
        this.$el.focus()
      }
    }
  }
}
</script>
