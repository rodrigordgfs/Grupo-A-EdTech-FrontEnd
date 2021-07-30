import Vue from 'vue'
import VueRouter from 'vue-router'
import Students from '@/views/Students'
import StudentsCUD from '@/views/StudentsCUD'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Students',
    component: Students,
    icon: 'mdi-account-group',
    hidden: false
  },
  {
    path: '/students/:id?',
    name: 'StudentsCUD',
    component: StudentsCUD,
    icon: 'mdi-account-group',
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router
