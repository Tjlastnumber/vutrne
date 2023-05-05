<template>
  <div
    class="fixed top-0 z-40 flex-none w-full border-b border-light-disabled dark:border-dark-disabled duration-500 dark:bg-dark supports-backdrop-blur:bg-white/60 bg-light"
  >
    <div class="px-8 py-4 font-mono duration-500">
      <div
        class="relative flex flex-row items-center justify-between text-xs font-normal"
      >
        <div
          id="home-link"
          class="text-base font-extrabold"
        >
          <MenuPanel :menus="menus">
            <button>{{ appName }}</button>
          </MenuPanel>
          <slot name="left" />
        </div>
        <slot name="center" />
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuPanel from '@/components/MenuPanel.vue'
import { mapState } from 'vuex'

export default {
  name: 'HeaderPanel',
  components: { MenuPanel },
  data () {
    return { }
  },
  computed: mapState({
    appName: state => state.appName,
    menus: state => state.menus
  })
}
</script>

<style></style>
