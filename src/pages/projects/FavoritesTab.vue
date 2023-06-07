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
