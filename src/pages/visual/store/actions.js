import { generatId } from '@/utils'

function initPages(state) {
  state.pages = [{
    id: generatId(),
    name: 'page-1',
  }]
}

export function pagesAdd({ commit }, page) {
  if (page) {
    page.id = generatId()
    commit('PAGES_ADD', page)
  }
}

export function pagesDelete({ state, commit, dispatch }, index) {
  if (isNaN(index) && index > -1 && index < state.pages.length) {
    commit('PAGES_DELETE', index)
  } else {
    commit('PAGES_DELETE', state.currentPageIndex)
  }
  if (state.pages.length <= 0) {
    initPages(state)
  }
  dispatch('setCurrentPageIndex', state.currentPageIndex)
}

export function prevPage({ state, dispatch }) {
  dispatch('setCurrentPageIndex', state.currentPageIndex - 1)
}

export function nextPage({ state, dispatch }) {
  dispatch('setCurrentPageIndex', state.currentPageIndex + 1)
}

export function pagesCommit({ commit }) {
  commit('PAGES_COMMIT')
}

export function setCurrentPageIndex({ state, commit }, index) {
  if (state.pages.length <= 0) return
  if (isNaN(index)) index = 0
  if (index < 0) index = state.pages.length - 1
  if (index >= state.pages.length) index = 0
  commit('CURRENT_PAGE_INDEX', index)
}

export function activeNodes({ commit }, { node, accumulative }) {
  if (accumulative) {
    commit('ACTIVE_NODES_PUSH', node)
  } else {
    commit('ACTIVE_NODES', node)
  }
}

export function toggleNode({ commit, dispatch }, { node, expanded, recursive }) {
  commit('TOGGLE_NODE', { id: node.id, expanded })
  if (recursive) {
    const children = node.children ?? []
    children.forEach(children => {
      dispatch('toggleNode', {
        node: children,
        expanded,
        recursive,
      })
    })
  }
}
