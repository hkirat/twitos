import { createRouter, createWebHistory } from 'vue-router'

import Data from '../views/Data.vue'
import Portfolio from '../views/Portfolio.vue'
import SingleTweet from "../views/SingleTweet.vue"

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Data },
  { path: '/tweet/', component: SingleTweet },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
