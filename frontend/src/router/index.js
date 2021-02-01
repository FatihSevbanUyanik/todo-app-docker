import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import TodoIndex from '@/components/todo/index' 




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoIndex',
    component: TodoIndex
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
