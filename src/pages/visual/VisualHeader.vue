<script>
import { createNamespacedHelpers } from 'vuex'
import HeaderPanel from '../layout/HeaderPanel.vue'
import namespace from './store/namespace'
import Avatar from '@/components/Avatar.vue'
import TextBox from '@/components/TextBox.vue'

const { mapGetters } = createNamespacedHelpers(namespace)

export default {
  name: 'VisualHeader',
  components: {
    HeaderPanel,
    Avatar,
    TextBox,
  },
  computed: {
    ...mapGetters([
      'currentPage',
    ]),
  },
}
</script>

<template>
  <HeaderPanel>
    <template #center>
      <div>
        <TextBox
          v-model.lazy="currentPage.name"
          class="text-center"
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
