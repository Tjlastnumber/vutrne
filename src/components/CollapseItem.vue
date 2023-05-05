<template>
  <div
    class="flex flex-row px-3 py-3 text-xs cursor-default text-light-secondary rounded-md space-y-1 active:bg-light-disabled active:text-black hover:bg-light-disabled hover:text-black dark:text-dark-primary dark:hover:bg-dark-disabled dark:hover:text-white duration-300"
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
  }
}
</script>
