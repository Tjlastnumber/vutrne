import * as actions from './actions'

const state = {
  projects: [/* { id, name, description, comments } */],
  favorites: [/* { projects } */],
  currentPage: {}
}

const mutations = {
  INIT_PROJECTS(state, projects) {
    state.projects = projects
  },
  INIT_FAVORITES(state, favorites) {
    state.favorites = favorites
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
