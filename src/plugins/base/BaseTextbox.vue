<script>
export default {
  name: 'BaseTextbox',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div>
    <input
      type="textbox"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<style>

</style>
