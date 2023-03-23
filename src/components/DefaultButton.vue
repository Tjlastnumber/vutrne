<template>
  <button
    class="px-8 py-4 text-xs font-medium rounded-lg ring-inset ring-1 ring-light-primary hover:bg-white bg-light border-light-disabled dark:text-dark-primary dark:bg-dark-disabled dark:hover:bg-dark disabled:dark:hover:bg-dark-secondary hover:drop-shadow-md duration-300"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'DefaultButton'
}
</script>
