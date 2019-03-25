import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HtmlControls from '@/components/HtmlControls'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/html-controls',
      name: 'HtmlControls',
      component: HtmlControls
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
