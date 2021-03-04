import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'dashboard',
  //   component: () => import('@/views/dashboard/index')
  // },
  {
    path: '/',
    name: 'datav',
    component: () => import('@/components/datav/index')
  }
  // {
  //   path: '/view',
  //   name: 'view',
  //   component: () => import('@/views/dashboard/HourCheck')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
