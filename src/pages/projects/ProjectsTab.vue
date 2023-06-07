<script>
import { mapState, mapActions } from 'vuex'
import namespace, { init } from './store/namespace'
import CollapsePanel from '@/components/CollapsePanel.vue'
import MenuLink from '@/components/MenuLink.vue'

export default {
  name: 'ProjectsTab',
  components: {
    CollapsePanel,
    MenuLink,
  },
  computed: mapState(namespace, {
    projects: state => state.projects,
  }),
  mounted() {
    this.init({ projects: [{ name: 'p1', path: '1' }, { name: 'p2', path: '2' }] })
  },
  methods: {
    ...mapActions(namespace, [ init ]),
  },
}
</script>

<template>
  <CollapsePanel name="Projects">
    <div class="flex flex-col pb-4">
      <MenuLink
        v-for="project in projects"
        :key="project.id"
        tabindex="0"
        :to="`/visual/${project.path}`"
      >
        {{ project.name }}
      </MenuLink>
    </div>
  </CollapsePanel>
</template>
