<script>
import CollapsePanel from '@/components/CollapsePanel'
import CollapseItem from '@/components/CollapseItem'
import DefaultButton from '@/components/DefaultButton'
import TextBox from '@/components/TextBox'

import namespace from './store/namespace'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(namespace)

export default {
  name: 'VisualPages',
  components: {
    CollapsePanel,
    CollapseItem,
    DefaultButton,
    TextBox
  },
  data() {
    return {
      contextmenu: [
        { name: 'Delete' },
        { name: 'Copy' }
      ],
      isShowContextMenu: false
    }
  },
  computed: {
    ...mapState([ 'pages' ]),
    ...mapGetters([ 'currentPage' ])
  },
  mounted() {
    this.$nextTick(() => {
      this.setCurrentPageIndex()
    })
  },
  methods: {
    ...mapActions([
      'pagesAdd',
      'setCurrentPageIndex',
      'pagesCommit',
      'pagesDelete',
      'prevPage',
      'nextPage'
    ]),
    onPrevPage() {
      this.prevPage()
    },
    onNextPage() {
      this.nextPage()
    },
    showContextMenu() {
      this.isShowContextMenu = true
    },
    editMode(e) {
      e.target.focus()
    }
  }
}
</script>

<template>
  <CollapsePanel>
    <template #header>
      <div class="flex flex-row items-center justify-between">
        <span>Page</span>
        <DefaultButton
          class="px-2 py-1"
          @click.native.stop="pagesAdd({ name: `page-${pages.length + 1}` })"
        >
          ✚
        </DefaultButton>
      </div>
    </template>

    <CollapseItem
      v-for="(page, index) in pages"
      :key="page.id"
      :selected="currentPage === page"
      @click.native.capture="setCurrentPageIndex(index)"
    >
      <TextBox
        :key="index"
        v-model.lazy="page.name"
        mode="label"
        :tabindex="index"
        @input="pagesCommit()"
        @focus.native="setCurrentPageIndex(index)"
        @keyup.native.self.delete="pagesDelete"
        @keyup.native.self.up="onPrevPage"
        @keyup.native.self.down="onNextPage"
      />
    </CollapseItem>
  </CollapsePanel>
</template>

<style>

</style>
