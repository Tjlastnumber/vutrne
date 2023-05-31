<script>
import CollapsePanel from '@/components/CollapsePanel.vue'

import { mapState, mapActions } from 'vuex'
import namespace, { init } from './store/namespace'
import MenuLink from '@/components/MenuLink.vue'

export default {
  name: 'FavoritesTab',
  components: {
    CollapsePanel,
    MenuLink
  },
  computed: mapState(namespace, {
    favorites: state => state.favorites
  }),
  mounted() {
    this.init({
      favorites: [
        { id: 1, name: 'p1' },
        { id: 2, name: 'p2' }
      ]
    })
  },
  methods: {
    ...mapActions(namespace, [ init ])
  }
}
</script>

<template>
  <CollapsePanel :name="'Favorites'">
    <div class="flex flex-col pt-4 space-y-2">
      <MenuLink
        v-for="project in favorites"
        :key="project.id"
        class="flex"
        :to="`/visual/${project.path}`"
      >
        {{ project.name }}
      </MenuLink>
    </div>
  </CollapsePanel>
</template>
