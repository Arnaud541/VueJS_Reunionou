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
      path: '/createEventMap',
      name: 'createEventMap',
      component: () => import('@/views/CreateEventMapView.vue')
    },
    {
      path: '/connexion',
      name: 'connexion',
      prors: true,
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
      path: '/invit/:id',
      name: 'invit',
      prors: true,
      component: () => import('@/views/InvitView.vue')
    },
    {
      path: '/event/:id',
      name: 'event',
      prors: true,
      component: () => import('@/views/EventView.vue')
    },
    {
      path: '/profil/:id',
      name: 'profil',
      prors: true,
      component: () => import('@/views/ProfilView.vue')
    },
    {
      path: '/participant-inscription',
      name: 'participant-inscription',
      component: () => import('@/views/ParticipantInscriptionView.vue')
    }
  ]
})

export default router
