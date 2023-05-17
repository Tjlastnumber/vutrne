import * as actions from './actions'
import { generatId } from '@/utils'
import storage from '@/utils/storage'

const PAGES_KEY = 'VD_PAGES'
const CURRENT_PAGE_KEY = 'VD_CURRENT_PAGE'
const _pages = storage.get(PAGES_KEY)
const _currentPage = storage.get(CURRENT_PAGE_KEY)

const state = {
  pages: _pages || [ { id: generatId(), name: 'page-1' } ],
  currentPage: _currentPage,
  components: []
}

const mutations = {
  'CURRENT_PAGE' (state, page) {
    state.currentPage = page
    storage.set(CURRENT_PAGE_KEY, page)
  },
  'PAGES_ADD' ({ pages }, page) {
    pages.push(page)
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_DELETE' ({ pages }, index) {
    pages.splice(index, 1)
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_MOVE' ({ pages }, { start, end }) {
    pages.splice(end, 0, state.pages.splice(start, 1))
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_INSERT' ({ pages }, { index, page }) {
    pages.splice(index, 0, page)
    storage.set(PAGES_KEY, pages)
  },
  'PAGES_COMMIT' ({ pages }) {
    storage.set(PAGES_KEY, pages)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
