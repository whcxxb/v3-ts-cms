import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { getCache } from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.name === 'login') {
    return
  }
  if (!getCache('token')) {
    router.push('/login')
  }
})

export default router
