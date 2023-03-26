import { createRouter, createWebHistory } from 'vue-router'
import KaRegister from '@/views/Register'
import KaLogin from '@/views/Login'
import KaLogout from '@/views/Logout.vue'

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
    path: '/logout',
    name: 'logout',
    component: KaLogout
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