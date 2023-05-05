<template>
  <CollapsePanel name="Page">
    <template #HeaderRight>
      <DefaultButton
        class="px-2 py-1"
        @click.native.stop="pagesAdd({ name: `page-${pages.length + 1}` })"
      >
        ✚
      </DefaultButton>
    </template>
    <CollapseItem
      v-for="(page, index) in pages"
      :key="page.id"
      :selected="currentPage === page"
      @click.native.capture="setCurrentPage(index)"
    >
      <TextBox
        v-model.lazy="page.name"
        state="label"
      />
    </CollapseItem>
  </CollapsePanel>
</template>

<script>
import CollapsePanel from '@/components/CollapsePanel'
import CollapseItem from '@/components/CollapseItem'
import DefaultButton from '@/components/DefaultButton'
import TextBox from '@/components/TextBox'

import { mapActions, mapState } from 'vuex'
import namespace from './store/namespace'

export default {
  name: 'VisualPages',
  components: {
    CollapsePanel,
    CollapseItem,
    DefaultButton,
    TextBox
  },
  computed: {
    ...mapState(namespace, [ 'pages', 'currentPage' ])
  },
  mounted () {
    this.$nextTick(() => {
      this.setCurrentPage()
    })
  },
  methods: {
    ...mapActions(namespace, [ 'pagesAdd', 'setCurrentPage' ])
  }
}
</script>

<style>

</style>
