<template>
  <div
    id="app"
    class="font-mono antialiased text-gray-700 bg-white text-black/70 dark:text-gray-200 dark:bg-black/80 uration-300"
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
