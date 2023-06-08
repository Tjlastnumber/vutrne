<script>
export default {
  name: 'ScrollPanel',
  data() {
    return {
      scrollbar: false,
    }
  },
}
</script>

<template>
  <div class="w-full h-full overflow-auto scrollbar">
    <slot />
  </div>
</template>

<style scoped>
.scrollbar {
  overflow: auto;
}

.scrollbar::-webkit-scrollbar {
  width: 7px;
}

.scrollbar::-webkit-scrollbar-thumb {
  width: 7px;
  border-radius: 7px;
  background-color: #4f4f4f;
}

.scrollbar::-webkit-scrollbar-thumb:hover,
.scrollbar::-webkit-scrollbar-thumb:active {
  background-color: #5f5f5f;
}

</style>
