<template>
  <div
    class="flex flex-row px-3 py-3 text-xs font-medium cursor-default rounded-md space-y-1 hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white duration-500"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CollapseItem'
}
</script>
