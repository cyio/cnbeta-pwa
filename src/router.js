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
    // console.log('scroll', to.path, from.path, savedPosition)
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(savedPosition.x, savedPosition.y)
        // console.log('top', window.document.body.scrollTop)
        // return savedPosition
      }, 200)
    } else {
      if (to.name === 'Post') {
        return { x: 0, y: 0 }
      }
    }
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
