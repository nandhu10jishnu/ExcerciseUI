import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import createExcercise from "../components/createexcercise/CreateExcercise.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'createExcercise',
    component: createExcercise
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
