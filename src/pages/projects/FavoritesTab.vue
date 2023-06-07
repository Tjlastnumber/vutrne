<script>

import { mapState, mapActions } from 'vuex'
import namespace, { init } from './store/namespace'
import CollapsePanel from '@/components/CollapsePanel.vue'
import MenuLink from '@/components/MenuLink.vue'

export default {
  name: 'FavoritesTab',
  components: {
    CollapsePanel,
    MenuLink,
  },
  computed: mapState(namespace, {
    favorites: state => state.favorites,
  }),
  mounted() {
    this.init({
      favorites: [
        { id: 1, name: 'p1' },
        { id: 2, name: 'last' },
        { id: 3, name: 'last' },
        { id: 4, name: 'last' },
        { id: 5, name: 'last' },
        { id: 6, name: 'last' },
        { id: 7, name: 'last' },
        { id: 8, name: 'last' },
        { id: 9, name: 'last' },
        { id: 10, name: 'last' },
        { id: 11, name: 'last' },
        { id: 12, name: 'last' },
        { id: 13, name: 'last' },
        { id: 14, name: 'last' },
        { id: 15, name: 'last' },
        { id: 16, name: 'last' },
        { id: 17, name: 'last' },
        { id: 18, name: 'last' },
        { id: 19, name: 'last' },
        { id: 20, name: 'last' },
        { id: 21, name: 'last' },
        { id: 22, name: 'last' },
        { id: 23, name: 'last' },
        { id: 24, name: 'last' },
        { id: 25, name: 'last' },
        { id: 26, name: 'last' },
        { id: 27, name: 'last' },
        { id: 28, name: 'last' },
        { id: 29, name: 'last' },
        { id: 30, name: 'last' },
        { id: 31, name: 'last' },
        { id: 32, name: 'last' },
        { id: 33, name: 'last' },
        { id: 34, name: 'last' },
      ],
    })
  },
  methods: {
    ...mapActions(namespace, [ init ]),
  },
}
</script>

<template>
  <CollapsePanel name="Favorites">
    <section class="pb-2">
      <MenuLink
        v-for="project in favorites"
        :key="project.id"
        class="flex"
        :to="`/visual/${project.path}`"
      >
        {{ project.name }}
      </MenuLink>
    </section>
  </CollapsePanel>
</template>

<style>
.m-h {
  max-height: 50%;
}
</style>
