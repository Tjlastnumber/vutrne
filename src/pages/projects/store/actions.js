export function init ({ commit }, { projects, favorites }) {
  commit('INIT_PROJECTS', projects)
  commit('INIT_FAVORITES', favorites)
}
