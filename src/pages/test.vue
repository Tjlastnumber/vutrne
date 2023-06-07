<script>
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'TestPage',
  components: { TextBox },
  data() {
    return {
      value: 'text',
    }
  },
}
</script>

<template>
  <div class="h-full">
    <TextBox
      :value="value"
      class="p-1 text-sm"
    />
  </div>
</template>

<style>

</style>
