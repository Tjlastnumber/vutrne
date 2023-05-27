import { isUndef } from '@/utils'

export function init({ commit }, { projects, favorites }) {
  if (!isUndef(projects)) {
    commit('INIT_PROJECTS', projects)
  }
  if (!isUndef(favorites)) {
    commit('INIT_FAVORITES', favorites)
  }
}
