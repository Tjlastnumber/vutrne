<template>
  <div
    id="app"
    class="antialiased bg-white dark:bg-black/80 text-slate-500 dark:text-slate-400"
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
