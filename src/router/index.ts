import type { RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // component: AppLayout,
    redirect: '/3dMap',
  },
  {
    path: '/3dMap',
    name: '3dMap',
    component: () => import('@/views/3dMap.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  next()
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
