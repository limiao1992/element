import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Tag from '@/components/Tag'
import Top from '@/components/Top'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
  ]
})
