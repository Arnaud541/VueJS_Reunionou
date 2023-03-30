import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: () => import('@/views/ConnexionView.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('@/views/InscriptionView.vue')
    },
    {
      path: '/createEvent',
      name: 'createEvent',
      component: () => import('@/views/CreateEventView.vue')
    },
    {
      path: '/invit',
      name: 'invit',
      component: () => import('@/views/InvitView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/views/EventView.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('@/views/ProfilView.vue')
    },
  ]
})

export default router
