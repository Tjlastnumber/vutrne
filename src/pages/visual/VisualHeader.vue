<template>
  <HeaderPanel>
    <template #center>
      <div>
        <TextBox
          v-model.lazy="currentPage.name"
          class="text-center"
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

import namespace from './store/namespace'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers(namespace)

export default {
  name: 'VisualHeader',
  components: {
    HeaderPanel,
    Avatar,
    TextBox
  },
  computed: {
    ...mapState({
      currentPage: state => state.currentPage
    })
  }
}
</script>
