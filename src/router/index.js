import { createRouter, createWebHistory } from 'vue-router';
import KaRegister from '@/views/Register';
import KaLogin from '@/views/Login';
import KaLogout from '@/views/Logout';
import KaProducts from '@/views/Products';
import KaCart from '@/views/Cart';

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
    component: KaProducts
  },

  {
    path: '/cart',
    name: 'cart',
    component: KaCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router