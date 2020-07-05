import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/admin/Main.vue'
import Cart from '../views/admin/Cart.vue'
import Product from '../views/admin/Product.vue'
import UserAccount from '../views/admin/UserAccount.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import Geolocation from '../views/services/Geolocation.vue'
import Payment from '../views/services/Payment-Api.vue'
import About from '../views/admin/About-Us.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/user',
    name: 'UserAccount',
    component: UserAccount
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/product/payment/geolocation',
    name: 'Geolocation',
    component: Geolocation
  },
  {
    path: '/product/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/admin/About-Us.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
