<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    })
  },
}
</script>

<template>
  <div
    id="app"
    class="font-mono antialiased bg-base text-light-primary border-light-disabled dark:border-dark-disabled dark:bg-dark dark:text-dark-primary duration-300"
  >
    <router-view />
  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  min-height: 100%;
}

img {
  max-width: none !important;
}

</style>
