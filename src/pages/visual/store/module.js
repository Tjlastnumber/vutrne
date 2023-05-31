import Vue from 'vue'
import * as actions from './actions'
import { generatId } from '@/utils'
import storage from '@/utils/storage'

const _testNodes = [ {
  id: 0,
  name: 'Container',
  children: [ {
    id: 1,
    name: 'Button',
    children: [ {
      id: 2,
      name: 'Text'
    } ]
  } ]
}, {
  id: 3,
  name: 'Panel',
  children: [ {
    id: '4',
    name: 'div'
  } ]
} ]

const PAGES_KEY = 'VD_PAGES'
const CURRENT_PAGE_KEY = 'VD_CURRENT_PAGE'
const NODE_TREE = 'VD_NODE_TREE'
const ACTIVE_NODES = 'VD_ACTIVE_NODES'

const _pages = storage.get(PAGES_KEY)
const _currentPage = storage.get(CURRENT_PAGE_KEY)
const _nodeTree = storage.get(NODE_TREE) ?? [ ..._testNodes ]
const _activeNodes = storage.get(ACTIVE_NODES) ?? {}

const state = {
  /**
   * 页面列表
   **/
  pages: _pages || [ { id: generatId(), name: 'page-1' } ],
  /**
   * 当前页面
   **/
  currentPage: _currentPage,
  /**
   * 组件树
   **/
  nodeTree: _nodeTree,
  /**
   * 当前激活元素
   **/
  activeNodes: _activeNodes,
  /**
   * 当前徘徊元素
   **/
  hoverNodes: {},
  /**
   * 节点展开映射
   **/
  expansionMap: {}
}

const mutations = {
  CURRENT_PAGE(state, page) {
    state.currentPage = page
    storage.set(CURRENT_PAGE_KEY, page)
  },
  PAGES_ADD({ pages }, page) {
    pages.push(page)
    storage.set(PAGES_KEY, pages)
  },
  PAGES_DELETE({ pages }, index) {
    pages.splice(index, 1)
    storage.set(PAGES_KEY, pages)
  },
  PAGES_MOVE({ pages }, { start, end }) {
    pages.splice(end, 0, state.pages.splice(start, 1))
    storage.set(PAGES_KEY, pages)
  },
  PAGES_INSERT({ pages }, { index, page }) {
    pages.splice(index, 0, page)
    storage.set(PAGES_KEY, pages)
  },
  PAGES_COMMIT({ pages }) {
    storage.set(PAGES_KEY, pages)
  },
  NODE_TREE_SET({ nodeTree }, components) {
    nodeTree = components
    storage.set(NODE_TREE, nodeTree)
  },
  ACTIVE_NODES(state, node) {
    state.activeNodes = { [node.id]: node }
    storage.set(ACTIVE_NODES, state.activeNodes)
  },
  ACTIVE_NODES_PUSH({ activeNodes }, node) {
    Vue.set(activeNodes, node.id, node)
    storage.set(ACTIVE_NODES, activeNodes)
  },
  ACTIVE_NODES_DELETE({ activeNodes }, node) {
    Vue.delete(activeNodes, node.id)
  },
  HOVER_NODES({ hoverNodes }, node) {
    Vue.set(hoverNodes, node.id, node)
  },
  HOVER_NODES_DELETE({ hoverNodes }, node) {
    Vue.delete(hoverNodes, node.id)
  },
  TOGGLE_NODE({ expansionMap }, { id, expanded }) {
    Vue.set(expansionMap, id, expanded)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
