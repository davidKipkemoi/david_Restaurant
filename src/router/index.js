import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path:'/Login',
    name:'Login',
    component:Login
  },
  {
    path:'/Home',
    name:'Home',
    component:Home

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
