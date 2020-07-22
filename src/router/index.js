import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/admin/Cart.vue'
import Product from '../views/admin/Product.vue'
import UserAccount from '../views/admin/UserAccount.vue'
import Geolocation from '../views/services/Geolocation.vue'
import About from '../views/admin/About-Us.vue'
import { auth } from '../firebase'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Main')
    
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user',
    name: 'UserAccount',
    component: UserAccount,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/passwordReset',
    name: 'PasswordReset',
    component: () => import(/* webpackChunkName: "about" */ '@/components/PasswordReset') 
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/authentication/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/authentication/Register.vue')
  },
  {
    path: '/product/payment/geolocation',
    name: 'Geolocation',
    component: Geolocation,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/product/payment',
    name: 'Payment',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* */ '../views/services/Payment-Api.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requiresAuth: true
    }
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

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
