<script>
export default {
  name: 'CollapseItem',
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="collapse-item collapse-item-active collapse-item-hover"
    :class="selected ? 'bg-light-disabled text-black dark:text-white dark:bg-dark-disabled font-medium' : ''"
  >
    <slot />
  </div>
</template>

<style>
.collapse-item {
  @apply flex flex-row w-full text-xs outline-none cursor-default text-light-secondary rounded-md space-y-1 dark:text-dark-primary duration-300;
}

.collapse-item-active {
  @apply active:bg-light-disabled active:text-black;
}

.collapse-item-hover {
  @apply hover:bg-light-hover hover:text-black dark:hover:bg-dark-hover dark:hover:text-white focus:text-black dark:focus:bg-dark-hover dark:focus:text-white;
}
</style>
