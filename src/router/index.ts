import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import createExcercise from "../components/createexcercise/CreateExcercise.vue";
import loginexcersice from  "../components/loginexcersice/LoginExcersice.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'createExcercise',
    component: createExcercise
  },

{
  path: '/login',
  name: 'loginexcersice',
  components: loginexcersice
},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
