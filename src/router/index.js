import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入Films组件
import Films from '@/views/Films'
// 引入Cinema组件
import Cinema from '@/views/Cinema'
// 引入Center组件
import Center from '@/views/Center'
// 引入Consult组件
import Consult from '@/views/Consult'

import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
import Error from '@/views/Error'
import Detail from '@/views/Detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    component: Films,
    // 二级路由配置
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/consult',
    component: Consult
  },
  {
    path: '/',
    redirect: '/films'
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: Detail,
    props: true
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
