<template>
  <div
    class="fixed top-0 z-40 flex items-center justify-between w-full px-8 py-2 font-mono text-xs font-normal border-b h-14 max-h-14 border-light-disabled dark:border-dark-disabled duration-500 dark:bg-dark supports-backdrop-blur:bg-white/60 bg-light"
  >
    <div
      id="home-link"
      class="text-base font-extrabold"
    >
      <MenuPanel
        placement="bottom-start"
        :menus="menus"
      >
        <button>{{ appName }}</button>
      </MenuPanel>
      <slot name="left" />
    </div>
    <slot name="center" />
    <slot name="right" />
  </div>
</template>

<script>
import MenuPanel from '@/components/MenuPanel.vue'
import { mapState } from 'vuex'

export default {
  name: 'HeaderPanel',
  components: { MenuPanel },
  data() {
    return { }
  },
  computed: mapState({
    appName: state => state.appName,
    menus: state => state.menus
  })
}
</script>
