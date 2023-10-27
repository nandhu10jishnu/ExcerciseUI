import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import createExcercise from "../components/createexcercise/CreateExcercise.vue";
import loginExcersice from "../components/loginexcersice/LoginExcersice.vue"
import registerExcersice from "../components/registerexcersice/RegisterExcersice.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'createExcercise',
    component: createExcercise
  },

  {
    path: '/login',
    name: 'loginExcersice',
    component: loginExcersice
  },
  {
    path: '/register',
    name: 'registerExcersice',
    component: registerExcersice
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
