import Vue from 'vue'
import VueRouter from 'vue-router'
import Students from '@/views/Students'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Students',
    component: Students,
    icon: 'mdi-account-group',
    hidden: false
  }
]

const router = new VueRouter({
  routes
})

export default router
