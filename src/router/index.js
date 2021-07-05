import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Team from '../views/Team.vue'
import Tools from '../views/Tools.vue'
import Services from '../views/Services.vue'
import Trial from '../views/Trial.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/Trial',
    name: 'Trial',
    component: Trial
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Promos',
    name: 'Promos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Promos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),

  routes
})
router.beforeEach((to) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name }`

})


export default router

