import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import Home from './views/Home.vue'
import Lyrics from './views/Lyrics.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lyrics/:track_id',
      name: 'lyrics',
      component: Lyrics
    }
  ]
})
