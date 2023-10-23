import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系 path->component
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue'),
    },
    {
      path: '/profile',
      component: () => import('@/views/profile/profile.vue'),
    },
  ],
})

export default createRouter
