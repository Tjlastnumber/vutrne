import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import projects from '@/pages/projects/store/module'
import visual from '@/pages/visual/store/module'

Vue.use(Vuex)

const state = {
  appName: 'Vutrne',
  menus: [{
    name: 'Dashboard',
    to: '/projects',
  },
  {
    name: '|',
  },
  {
    name: 'File',
  },
  {
    name: 'View',
    children: [
      { name: 'Undo' },
      { name: 'Redo' },
      { name: '|' },
      { name: 'Cut' },
      { name: 'Copy', children: [{ name: 'Copy' }] },
      { name: 'Pause' },
    ],
  }],
}

export default new Store({
  state,
  modules: {
    projects,
    visual,
  },
})
