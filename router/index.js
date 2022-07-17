import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../src/views/DashboardPage.vue'
import AboutPage from '../src/views/AboutPage.vue'
import NotFound from '../src/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
    children: [
      {
        path: '/dashboard/:categoryRoute',
        component: DashboardPage
      }
    ]
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/notfound'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
