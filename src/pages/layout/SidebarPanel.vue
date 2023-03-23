<template>
  <nav
    class="fixed inset-y-0 z-20 px-4 bg-light border-x dark:border-dark-disabled lg:w-1/6 duration-500 dark:bg-dark"
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
