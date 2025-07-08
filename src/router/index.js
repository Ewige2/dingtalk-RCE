import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/users',
    name: 'UserSearch',
    component: () => import('@/views/UserSearch.vue'),
    meta: { title: '找缘分' }
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import('@/views/Activities.vue'),
    meta: { title: '官方活动' }
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/Articles.vue'),
    meta: { title: '旅游资讯' }
  },
  {
    path: '/diary',
    name: 'Diary',
    component: () => import('@/views/Diary.vue'),
    meta: { title: '旅行日记' }
  },
  {
    path: '/dynamics',
    name: 'Dynamics',
    component: () => import('@/views/Dynamics.vue'),
    meta: { title: '会员动态' }
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () => import('@/views/Stories.vue'),
    meta: { title: '旅游攻略' }
  },
  {
    path: '/safety',
    name: 'Safety',
    component: () => import('@/views/Safety.vue'),
    meta: { title: '防骗中心' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    meta: { title: '注册' }
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    meta: { title: '个人主页' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - 伴游网`
  }
  next()
})

export default router
