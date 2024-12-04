import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/views/ListView.vue'
import AuthView from '@/views/AuthView.vue'
import MainComponent from '@/components/post/main/MainComponent.vue'
import RegistComponent from '@/components/post/regist/RegistComponent.vue'
import DetailComponent from '@/components/post/detail/DetailComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView,
      children: [
        {
          path: '',
          name: 'listMain',
          component: MainComponent,
        },
        {
          path: 'regist',
          name: 'registForm',
          component: RegistComponent,
          // meta: { requiresAuth: true },
        },
        {
          path: 'detail/:uuid',
          name: 'planDetail',
          component: DetailComponent
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },

  ],
})

export default router
