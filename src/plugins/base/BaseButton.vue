<template>
  <div
    class="p-4 bg-white cursor-pointer dark:bg-dark ring-1 ring-inset ring-blue-500"
    @click="onClick"
  >
    Button
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    onClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style>

</style>
