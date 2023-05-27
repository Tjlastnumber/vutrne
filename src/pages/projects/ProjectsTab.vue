<script>
import CollapseItem from '@/components/CollapseItem.vue'
import CollapsePanel from '@/components/CollapsePanel.vue'
import TextBox from '@/components/TextBox.vue'

import { mapState, mapActions } from 'vuex'
import namespace, { init } from './store/namespace'

export default {
  name: 'ProjectsTab',
  components: {
    CollapsePanel,
    CollapseItem,
    TextBox
  },
  computed: mapState(namespace, {
    projects: state => state.projects
  }),
  mounted() {
    this.init({ projects: [ { name: 'p1' }, { name: 'p2' } ] })
  },
  methods: {
    ...mapActions(namespace, [ init ])
  }
}
</script>

<template>
  <CollapsePanel name="Projects">
    <CollapseItem
      v-for="project in projects"
      :key="project.id"
    >
      <TextBox
        v-model.lazy="project.name"
        state="label"
      />
    </CollapseItem>
  </CollapsePanel>
</template>
