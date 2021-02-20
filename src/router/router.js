import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import User from '../views/User'
import product from '../views/product'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
          {
            //嵌套路由
            path:'shop',
            component:()=> import('../views/Shop')
          },
          {
            path: 'news',
            component: () => import('../views/News')  //懒加载
          }
            ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
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
    //匹配的路径 必须是 /user/[id]
    path:'/user',  //动态路由
    name:'User',
    component: User

  },
  {
    path:'/pro/:proId',
    name:'product',
    component:product
  }
]

const router = new VueRouter({
  mode: 'history', //使用history模式url就不会有#
  base: process.env.BASE_URL,
  routes
})

export default router
