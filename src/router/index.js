import Vue from 'vue'
import VueRouter from 'vue-router'
import Child from '../views/Child.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'child',
    component: Child
  },
  {
    path: '/about',
    name: 'nestedChild',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NestedChild.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
