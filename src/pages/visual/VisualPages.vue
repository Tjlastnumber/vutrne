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
      @contextmenu.prevent.native="isShowContextMenu = true"
    >
      <TextBox
        v-model.lazy="page.name"
        state="label"
        @input="pagesCommit()"
      />
    </CollapseItem>
    <!-- <VDropdown -->
    <!--   :distance="0" -->
    <!--   :skidding="0" -->
    <!--   :shown.sync="isShowContextMenu" -->
    <!--   theme="sub-menu" -->
    <!-- > -->
    <!--   <template #popper> -->
    <!--     <div -->
    <!--       v-for="menu in contextmenu" -->
    <!--       :key="menu.name" -->
    <!--       class="px-2 py-1 text-xs font-medium dark:text-white" -->
    <!--     > -->
    <!--       <span>{{ menu.name }}</span> -->
    <!--     </div> -->
    <!--   </template> -->
    <!-- </VDropdown> -->
    <MenuPanel
      placement="right-start"
      :menus="contextmenu"
      :distance="0"
      :skidding="0"
      :shown.sync="isShowContextMenu"
    />
  </CollapsePanel>
</template>

<script>
import CollapsePanel from '@/components/CollapsePanel'
import CollapseItem from '@/components/CollapseItem'
import DefaultButton from '@/components/DefaultButton'
import TextBox from '@/components/TextBox'
import MenuPanel from '@/components/MenuPanel'

import { mapActions, mapState } from 'vuex'
import namespace from './store/namespace'

export default {
  name: 'VisualPages',
  components: {
    CollapsePanel,
    CollapseItem,
    DefaultButton,
    TextBox,
    MenuPanel
  },
  data () {
    return {
      contextmenu: [
        { name: 'Delete' },
        { name: 'Copy' }
      ],
      isShowContextMenu: false
    }
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
    ...mapActions(namespace, [ 'pagesAdd', 'setCurrentPage', 'pagesCommit' ]),
    showContextMenu (page) {
      this.isShowContextMenu = true
      console.log(page)
    }
  }
}
</script>

<style>

</style>
