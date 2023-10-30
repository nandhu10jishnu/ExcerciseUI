import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import createExcercise from "../components/createexcercise/CreateExcercise.vue";
import loginExcersice from "../components/loginexcersice/LoginExcersice.vue"
import registerExcersice from "../components/registerexcersice/RegisterExcersice.vue"
import createDesignation from "../components/createdesignation/CreateDesignation.vue"
import EditDesignation from "../components/editdesignation/EditDesignation.vue"
import ListDesignation from "../components/listdesignation/ListDesignation.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/createExcercise',
    name: 'createExcercise',
    component: createExcercise
  },

  {
    path: '/',
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
  {
    path: '/listdesignation',
    name: 'ListDesignation',
    component: ListDesignation
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
