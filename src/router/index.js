import { createRouter, createWebHistory } from 'vue-router'

const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Solutions/index.vue'),
    hidden: true,
    meta: { title: 'Home', icon: 'Home' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    meta: { title: 'Login', icon: 'Login' }
  },
  {
    path: '/logininfo',
    name: 'LoginInfo',
    component: () => import('@/views/login/loginInfo.vue'),
    hidden: true,
    meta: { title: 'LoginInfo', icon: 'Info' }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/register.vue'),
    hidden: true,
    meta: { title: 'Register', icon: 'Info' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { title: '404', icon: 'Do Not Disturb On' }
  }
]

const asyncRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/home/home.vue'),
    meta: { title: 'Dashboard', icon: 'Group' }

    // children: [
    //   {
    //     path: 'about',
    //     name: 'About',
    //     component: () => import('@/views/AboutView.vue'),
    //     meta: { title: 'About', icon: 'Group' }
    //   }
    // ]
  }
]

// 保存了上次的滚动位置
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes.concat(asyncRoutes),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || false
  }
})

export default router
