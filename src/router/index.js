import {createRouter, createWebHistory} from "vue-router";

import Home from '@/pages/Home'
import City from '@/pages/City'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:name',
    name: 'city',
    component: City
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
