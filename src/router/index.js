import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/v1/Home.vue'

Vue.use(VueRouter);

const About=()=>import('@/views/v1/About.vue');
const BuyToday=()=>import('@/views/v1/BuyToday.vue');
const Commodity=()=>import('@/views/v1/Commodity.vue');
const Details=()=>import('@/views/v1/Details.vue');
const Information=()=>import('@/views/v1/Information.vue');
const Login=()=>import('@/views/v1/Login.vue');
const ShopCart=()=>import('@/views/v1/ShopCart.vue');

const routes = [
  {
    path: 'v1/',
    name: 'Home',
    component: Home
  },
  {
    path: 'v1/about',
    name: 'About',
    component: About
  },
  {
    path: 'v1/BuyToday',
    name: 'BuyToday',
    component: BuyToday
  },
  {
    path: 'v1/Commodity',
    name: 'Commodity',
    component: Commodity
  },
  {
    path: 'v1/Details',
    name: 'Details',
    component: Details
  },
  {
    path: 'v1/Information',
    name: 'Information',
    component: Information
  },
  {
    path: 'v1/Login',
    name: 'Login',
    component: Login
  },
  {
    path: 'v1/ShopCart',
    name: 'ShopCart',
    component: ShopCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
