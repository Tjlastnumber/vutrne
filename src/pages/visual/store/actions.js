import { generatId } from '@/utils'

export function pagesAdd({ commit }, page) {
  if (page) {
    page.id = generatId()
    commit('PAGES_ADD', page)
  }
}

export function pagesDelete({ state, commit }, index) {
  if (index && index > -1 && index < state.pages.lenght) {
    commit('PAGES_DELETE', index)
  }
}

export function pagesCommit({ commit }) {
  commit('PAGES_COMMIT')
}

export function setCurrentPage({ state, commit }, index) {
  if (!index || index < 0) index = 0
  if (index > state.pages.lenght) index = state.pages.lenght - 1
  commit('CURRENT_PAGE', state.pages[index])
}

export function activeNodes({ state, commit }, node) {
  commit('ACTIVE_NODES', node)
}

export function toggleNode({ commit, dispatch }, { node, expanded, recursive }) {
  commit('TOGGLE_NODE', { id: node.id, expanded })
  if (recursive) {
    const children = node.children ?? []
    children.forEach(children => {
      dispatch('toggleNode', {
        node: children,
        expanded,
        recursive
      })
    })
  }
}
