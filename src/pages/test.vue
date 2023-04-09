<template>
  <div class="h-full">
    <SplitPanel>
      <div class="relative inset-0 h-full bg-slate-900" />
    </SplitPanel>
    <div class="fixed inset-0 w-full h-full right bg-rose-900" />
  </div>
</template>

<script>
import SplitPanel from '@/components/SplitPanel.vue'

export default {
  name: 'TestPage',
  components: { SplitPanel }
}
</script>

<style>

</style>
