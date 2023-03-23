<template>
  <button
    class="px-8 py-4 text-xs font-medium rounded-lg ring-inset ring-1 ring-light-primary hover:bg-light-hover active:bg-white bg-light border-light-disabled dark:text-dark-primary dark:bg-dark-disabled dark:hover:bg-dark-hover disabled:dark:hover:bg-dark-secondary hover:drop-shadow-md duration-300"
    :class="typeClass"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (v) {
        return [ 'primary', 'disabled', 'default' ].includes(v)
      }
    }
  },
  computed: {
    typeClass () {
      let result = ''
      switch (this.type) {
        case 'primary':
          result =
            'bg-primary dark:bg-primary-dark text-black dark:text-black hover:bg-primary hover:dark:bg-primary active:bg-primary-dark active:dark:bg-primary-light'
          break
        case 'disabled':
          result = 'disabled'
          break
        default:
          result = ''
          break
      }
      return result
    }
  }
}
</script>
