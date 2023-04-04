<template>
  <div
    class="fixed top-0 z-40 flex-none w-full border-b border-light-disabled dark:border-dark-disabled duration-500 dark:bg-dark supports-backdrop-blur:bg-white/60 bg-light"
  >
    <div class="mx-auto max-w-screen-2xl">
      <div class="px-8 py-4 font-mono duration-500">
        <div
          class="relative flex flex-row items-center justify-between text-xs font-normal"
        >
          <div
            id="home-link"
            class="text-base font-extrabold"
          >
            <MenuPanel :menus="menus">
              <button>{{ brand }}</button>
            </MenuPanel>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuPanel from '@/components/MenuPanel.vue'
export default {
  name: 'HeaderPanel',
  components: { MenuPanel },
  data () {
    return {
      brand: 'Visuel',
      menus: [
        {
          name: 'Dashboard'
        },
        {
          name: '|'
        },
        {
          name: 'File'
        },
        {
          name: 'View',
          children: [
            { name: 'Undo' },
            { name: 'Redo' },
            { name: '|' },
            { name: 'Cut' },
            { name: 'Copy', children: [ { name: 'Copy' } ] },
            { name: 'Pause' }
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
