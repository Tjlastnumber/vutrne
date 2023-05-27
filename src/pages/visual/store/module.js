import * as actions from './actions'
import { generatId } from '@/utils'
import storage from '@/utils/storage'

const PAGES_KEY = 'VD_PAGES'
const CURRENT_PAGE_KEY = 'VD_CURRENT_PAGE'
const COMPONENT_TREE = 'VD_COMPONENT_TREE'
const ACTIVE_ELEMENTS = 'VD_ACTIVE_ELEMENT'

const _pages = storage.get(PAGES_KEY)
const _currentPage = storage.get(CURRENT_PAGE_KEY)
const _componentTree = storage.get(COMPONENT_TREE) ?? []
const _activeElements = storage.get(ACTIVE_ELEMENTS) ?? []

const state = {
  pages: _pages || [ { id: generatId(), name: 'page-1' } ],
  currentPage: _currentPage,
  componentTree: _componentTree,
  activeElements: _activeElements,
  hoverElements: []
}

const mutations = {
  'CURRENT_PAGE'(state, page) {
    state.currentPage = page
    storage.set(CURRENT_PAGE_KEY, page)
  },
  'PAGES_ADD'({ pages }, page) {
    pages.push(page)
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_DELETE'({ pages }, index) {
    pages.splice(index, 1)
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_MOVE'({ pages }, { start, end }) {
    pages.splice(end, 0, state.pages.splice(start, 1))
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_INSERT'({ pages }, { index, page }) {
    pages.splice(index, 0, page)
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_COMMIT'({ pages }) {
    storage.set(PAGES_KEY, pages)
  },
  COMPONENT_TREE_SET({ componentTree }, components) {
    componentTree = components
    storage.set(COMPONENT_TREE, componentTree)
  },
  ACTIVE_ELEMENTS({ activeElements }, els) {
    activeElements = els instanceof Array ? els : [ els ]
    storage.set(ACTIVE_ELEMENTS, activeElements)
  },
  ACTIVE_ELEMENTS_ADD({ activeElements }, el) {
    activeElements.push(el)
    storage.set(ACTIVE_ELEMENTS, activeElements)
  },
  HOVER_ELEMENTS_ADD({ hoverElements }, el) {
    hoverElements.push(el)
  },
  HOVER_ELEMENTS({ hoverElements }, els) {
    hoverElements = els
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
