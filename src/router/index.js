import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheRegistration from '../views/TheRegistration.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import DataView from '../views/DataView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import AdminRegistrationView from '../views/AdminRegistrationView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import TransactionView from '../views/TransactionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'login', component:LoginView},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {path:'/register', name:'register', component:TheRegistration},
    {path:'/login', name:'login', component:LoginView},
    {path:'/dashboard', name:'dashboard', component:DashboardView},
    {path:'/data', name:'data', component:DataView},
    {path:'/admin/login', name:'adminlogin', component:AdminLoginView},
    {path:'/admin/register', name:'adminregisteration', component:AdminRegistrationView},
    {path:'/admin', name:'admin', component:AdminDashboardView},
    {path:'/transaction', name:'transaction', component:TransactionView},
    
  ]
})

export default router
