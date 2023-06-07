<script>
import { createNamespacedHelpers } from 'vuex'
import namespace from './store/namespace'

import CollapsePanel from '@/components/CollapsePanel'
import CollapseItem from '@/components/CollapseItem'
import DefaultButton from '@/components/DefaultButton'
import TextBox from '@/components/TextBox'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(namespace)

export default {
  name: 'VisualPages',
  components: {
    CollapsePanel,
    CollapseItem,
    DefaultButton,
    TextBox,
  },
  data() {
    return {
      contextmenu: [
        { name: 'Delete' },
        { name: 'Copy' },
      ],
      isShowContextMenu: false,
      expansion: true,
    }
  },
  computed: {
    ...mapState([ 'pages', 'currentPageIndex' ]),
    ...mapGetters([ 'currentPage' ]),
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
      'nextPage',
    ]),
    onPagesAdd(pages) {
      this.pagesAdd({ name: `page-${pages.length + 1}` })
      this.expansion = true
    },
    onPrevPage() {
      this.prevPage()
      this.focus()
    },
    onNextPage() {
      this.nextPage()
      this.focus()
    },
    onDelete() {
      this.pagesDelete()
      this.focus()
    },
    focus(page) {
      page = page ?? this.currentPage
      this.$nextTick(() => {
        this.$refs[`p-${page.id}`][0].$el.focus()
      })
    },
    showContextMenu() {
      this.isShowContextMenu = true
    },
  },
}
</script>

<template>
  <CollapsePanel
    :expansion="expansion"
    @expanded="$event => expansion = $event.isExpanded"
  >
    <template #header>
      <div class="flex flex-row items-center justify-between">
        <span>Page</span>
        <DefaultButton
          class="px-2 py-1"
          @click.native.prevent.stop="onPagesAdd(pages)"
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
        :ref="`p-${page.id}`"
        :key="page.id"
        v-model.lazy="page.name"
        mode="label"
        tabindex="1"
        @input="pagesCommit()"
        @keyup.native.self.delete="onDelete"
        @keyup.native.self.up="onPrevPage"
        @keyup.native.self.down="onNextPage"
      />
    </CollapseItem>
  </CollapsePanel>
</template>

<style>

</style>
