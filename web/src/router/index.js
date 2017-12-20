import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    }
  ]
})
