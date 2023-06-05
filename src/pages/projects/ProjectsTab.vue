<script>
import CollapsePanel from '@/components/CollapsePanel.vue'
import MenuLink from '@/components/MenuLink.vue'

import { mapState, mapActions } from 'vuex'
import namespace, { init } from './store/namespace'

export default {
  name: 'ProjectsTab',
  components: {
    CollapsePanel,
    MenuLink
  },
  computed: mapState(namespace, {
    projects: state => state.projects
  }),
  mounted() {
    this.init({ projects: [ { name: 'p1', path: '1' }, { name: 'p2', path: '2' } ] })
  },
  methods: {
    ...mapActions(namespace, [ init ])
  }
}
</script>

<template>
  <CollapsePanel name="Projects">
    <div class="flex flex-col">
      <MenuLink
        v-for="project in projects"
        :key="project.id"
        :to="`/visual/${project.path}`"
      >
        {{ project.name }}
      </MenuLink>
    </div>
  </CollapsePanel>
</template>
