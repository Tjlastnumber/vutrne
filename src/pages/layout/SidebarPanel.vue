<template>
  <nav
    class="fixed inset-y-0 z-20 px-4 bg-white border-x dark:border-gray-600 lg:w-1/6 sm:min-w-mincl-start-2 duration-500 dark:bg-black-80"
  >
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'SidebarPanel'
}
</script>

<style></style>
