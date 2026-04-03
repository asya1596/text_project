import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutSelf from '@/components/AboutSelf.vue'
import Example from '@/components/Example.vue'
import Footer from '@/components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'aboutself',
    component: AboutSelf,
  },
  {
    path: '/example',
    name: 'example',
    component: Example,
  },
  {
    path: '/footer',
    name: 'contacts',
    component: Footer,
  },
  {
    path: '/:any(.*)',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
