<template>
  <div id="projects">
    <LayoutPanel :right="false">
      <template #header>
        <HeaderPanel />
      </template>
      <template #left>
        <CollapsePanel :name="'Favorites'">
          <CollapseItem
            v-for="project in favorites"
            :key="project.id"
          >
            {{ project.name }}
          </CollapseItem>
        </CollapsePanel>
        <CollapsePanel :name="'Projects'">
          <CollapseItem
            v-for="project in projects"
            :key="project.id"
          >
            {{ project.name }}
          </CollapseItem>
        </CollapsePanel>
      </template>
      <template #default>
        test
      </template>
    </LayoutPanel>
  </div>
</template>

<script>
import LayoutPanel from '@/pages/layout/LayoutPanel.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
import CollapseItem from '@/components/CollapseItem.vue'
import HeaderPanel from '../layout/HeaderPanel.vue'
import { mapState, mapActions } from 'vuex'
import namespace, { init } from './store/namespace'

export default {
  name: 'ProjectsPage',
  components: {
    LayoutPanel,
    CollapsePanel,
    CollapseItem,
    HeaderPanel
  },
  data() {
    return {}
  },
  computed: mapState(namespace, {
    projects: state => state.projects,
    favorites: state => state.favorites
  }),
  mounted() {
    this.init({ projects: [ { name: 'p1' }, { name: 'p2' } ], favorites: [ { name: 'f1' } ] })
  },
  methods: {
    ...mapActions(namespace, [ init ])
  }
}
</script>

<style scoped>
/* code... */
</style>
