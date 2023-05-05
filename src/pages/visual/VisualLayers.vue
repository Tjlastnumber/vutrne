<template>
  <CollapsePanel :name="'root'">
    <CollapseItem>
      <TextBox
        v-model="components"
        state="label"
      >
        <span
          class="flex font-semibold before:content-['<'] after:content-['>'] whitespace-nowrap"
        >
          {{ components }}
        </span>
      </TextBox>
    </CollapseItem>
  </CollapsePanel>
</template>

<script>

import CollapsePanel from '@/components/CollapsePanel'
import CollapseItem from '@/components/CollapseItem'
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'VisualLayers',
  components: {
    CollapsePanel,
    CollapseItem,
    TextBox
  },
  data () {
    return {
      components: 'element'
    }
  }
}
</script>

<style>

</style>
