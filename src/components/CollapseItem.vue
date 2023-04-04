<template>
  <div
    class="flex flex-row px-3 py-3 text-xs font-medium cursor-default text-light-secondary rounded-md space-y-1 hover:bg-light-disabled hover:text-black dark:text-dark-primary dark:hover:bg-dark-disabled dark:hover:text-white duration-300"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CollapseItem'
}
</script>
