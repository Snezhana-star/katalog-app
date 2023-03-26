import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/Register.vue'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/products',
    name: 'products',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router