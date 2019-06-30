import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import SignUp from "@/views/signup.vue"
import SignIn from "@/views/signin.vue"
import Home from "@/views/home.vue"
import Cart from "@/views/cart.vue"
import Product from '@/views/product.vue'
import History from '@/views/history.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      children: [
        {
          path: 'history',
          component: History
        }
      ]
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
      props: true
    }
  ]
})
