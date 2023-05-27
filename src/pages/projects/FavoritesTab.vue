<script>
import CollapseItem from '@/components/CollapseItem.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'

import { mapState, mapActions } from 'vuex'
import namespace, { init } from './store/namespace'

export default {
  name: 'FavoritesTab',
  components: {
    CollapsePanel,
    CollapseItem
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
    <CollapseItem
      v-for="project in favorites"
      :key="project.id"
    >
      <div class="p-2">
        {{ project.name }}
      </div>
    </CollapseItem>
  </CollapsePanel>
</template>
