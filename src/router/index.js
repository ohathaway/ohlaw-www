import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/policies',
    name: 'Policies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "policies" */ '../views/Policies.vue')
  },
  {
    path: '/policies/fees',
    name: 'PoliciesFees',
    component: () => import(/* webpackChunkName: "policies-fees" */ '../views/PoliciesFees.vue')
  },
  {
    path: '/policies/privacy',
    name: 'PoliciesPrivacy',
    component: () => import(/* webpackChunkName: "policies-privacy" */ '../views/PoliciesPrivacy.vue')
  },
  {
    path: '/policies/unbundled-services',
    name: 'PoliciesUnbundled',
    component: () => import(/* webpackChunkName: "policies-unbundled" */ '../views/PoliciesUnbundled.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
