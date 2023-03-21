<template>
  <svg
    :class="currentClass"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script>
export default {
  name: 'ChevronDownIcon',
  props: {
    width: {
      type: String,
      default: 'w-5'
    },
    height: {
      type: String,
      default: 'h-5'
    },
    currentColor: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    currentClass () {
      return this.width + ' ' + this.height + ' ' + this.currentColor
    }
  }
}
</script>

<style></style>
