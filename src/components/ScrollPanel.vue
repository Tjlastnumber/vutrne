<script>
export default {
  name: 'ScrollPanel',
  data() {
    return {
      scrollbar: false
    }
  }
}
</script>

<template>
  <div class="h-full pr-1 overflow-hidden">
    <div class="w-full h-full pl-4 pr-3 overflow-auto scrollbar">
      <slot />
    </div>
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
