<template>
  <div class="flex items-center justify-between gap-2 text-light-primary dark:text-dark dark:text-dark-primary">
    <span class="w-1/3 text-xs font-medium text-left min-w-1/3">{{ text }}</span>
    <input
      type="textbox"
      class="w-full p-2 text-xs border outline-none grow rounded-md border-light-disabled ring-2 ring-transparent hover:ring-blue-400 focus:ring-blue-500 dark:bg-dark-disabled duration-300"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [ String, Number ],
      default: undefined
    },
    text: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>

</style>
