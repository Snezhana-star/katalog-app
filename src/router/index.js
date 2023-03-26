import { createRouter, createWebHistory } from 'vue-router'
import KaRegister from '@/views/Register.vue'
import KaLogin from '@/views/Login.vue'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: KaRegister
  },

  {
    path: '/login',
    name: 'login',
    component: KaLogin
  },

  {
    path: '/products',
    name: 'products',
    component: KaRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router