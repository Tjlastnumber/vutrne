<template>
  <HeaderPanel>
    <template #center>
      <div>
        <TextBox
          v-model.lazy="currentPage.name"
          state="lable"
        />
      </div>
    </template>
    <template #right>
      <div>
        <Avatar />
      </div>
    </template>
  </HeaderPanel>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import HeaderPanel from '../layout/HeaderPanel.vue'
import TextBox from '@/components/TextBox.vue'

import { mapState } from 'vuex'
import namespace from './store/namespace'

export default {
  name: 'VisualHeader',
  components: {
    HeaderPanel,
    Avatar,
    TextBox
  },
  computed: {
    ...mapState(namespace, [ 'currentPage' ])
  },
  methods: {
  }
}
</script>

<style>

</style>
