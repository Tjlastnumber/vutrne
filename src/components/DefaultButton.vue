<template>
  <button
    class="px-8 py-4 text-xs font-medium rounded-lg ring-inset ring-2 ring-primary hover:bg-light-hover active:bg-white bg-light border-light-disabled dark:text-dark-primary dark:bg-dark-disabled dark:hover:bg-dark-hover active:dark:bg-dark-active disabled:dark:hover:bg-dark-secondary hover:drop-shadow-md duration-300"
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
        return [ 'primary', 'default' ].includes(v)
      }
    }
  },
  computed: {
    typeClass () {
      let result = ''
      switch (this.type) {
        case 'primary':
          result = [
            'bg-primary',
            'text-black',
            'hover:bg-primary-hover',
            'active:bg-primary-active',
            'dark:bg-primary',
            'dark:text-black',
            'dark:hover:bg-primary-hover',
            'dark:hover:ring-primary-hover',
            'dark:active:bg-primary-active',
            'dark:active:ring-primary-active'
          ]
          break
        case 'defautl':
        default:
          result = ''
          break
      }
      return result
    }
  }
}
</script>
