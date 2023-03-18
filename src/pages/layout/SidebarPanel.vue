<template>
  <div
    class="inset-0 right-auto z-20 justify-start w-1/4 px-8 pb-10 overflow-y-auto bg-white lg:block dark:bg-black duration-500 supports-backdrop-blur:bg-white/60"
  >
    <nav class="relative border-r">
      <slot />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SidebarPanel'
}
</script>

<style></style>
