import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Post from '@/pages/Post'
import Spinner from 'vue-simple-spinner'

Vue.use(Router)
Vue.component('Spinner', Spinner)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    { path: '*', redirect: '/' }
  ]
})
