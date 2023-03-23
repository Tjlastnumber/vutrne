<template>
  <div
    id="app"
    class="font-mono antialiased bg-light text-light-primary border-light-disabled dark:border-dark-disabled dark:bg-dark dark:text-dark-primary duration-300"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
html {
  height: 100%;
}

body {
  min-height: 100%;
}
</style>
