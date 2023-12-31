import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const visual = {
  path: '/visual/:id',
  name: 'Visual',
  component: () => import('@/pages/visual/index.vue'),
}

const projects = {
  path: '/projects',
  name: 'Projcets',
  component: () => import('@/pages/projects/index.vue'),
  children: [
    {
      path: 'recents',
      name: 'Recents',
      component: () => import('@/pages/projects/recents/index.vue'),
    },
    {
      path: 'drafts',
      name: 'Drafts',
      component: () => import('@/pages/projects/drafts/index.vue'),
    },
  ],
  // children: [
  //   {
  //     path: '/folder',
  //     name: 'Folder',
  //     component: () => import('')
  //   }
  // ]
}

const test = {
  path: '/test',
  name: 'Test',
  component: () => import('@/pages/test'),
}

const app = [
  projects,
  visual,
  test,
  // {
  //   path: '/codeview',
  //   name: 'CodeView',
  //   component: () => import('')
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('')
  // },
  // {
  //   path: '/401',
  //   component: () => import('')
  // },
  {
    path: '/',
    redirect: '/projects',
  },
  {
    path: '/404',
    component: () => import('@/pages/error-pages/404.vue'),
  },
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  mode: 'history',
  routes: app,
})

// TODO: Login router
// router.beforeEach((to, from, next) => {})

export default router
