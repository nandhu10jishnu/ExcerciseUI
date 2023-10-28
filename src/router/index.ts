import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import createExcercise from "../components/createexcercise/CreateExcercise.vue";
import loginExcersice from "../components/loginexcersice/LoginExcersice.vue"
import registerExcersice from "../components/registerexcersice/RegisterExcersice.vue"
import createDesignation from "../components/createdesignation/CreateDesignation.vue"
import EditDesignation from "../components/editdesignation/EditDesignation.vue"
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
  {
    path: '/designation',
    name: 'createDesignation',
    component: createDesignation
  },
  {
    path: '/updatedesignation/:dId',
    name: 'EditDesignation',
    component: EditDesignation
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
