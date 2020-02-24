import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/mainView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/VideoManage/VideoManage')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage/UserManage')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
