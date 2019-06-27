import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HtmlControls from '@/components/HtmlControls'
import UserPage from '@/components/UserPage'
import DataBind from '@/components/DataBind'
import ShowStencilComp from '@/components/ShowStencilComp'

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
      name: 'UserPage',
      component: UserPage
    },
    {
      path: '/data-bind',
      name: 'DataBind',
      component: DataBind
    },
    {
      path: '/show-stencil-comp',
      name: 'ShowStencilComp',
      component: ShowStencilComp
    }
  ]
})
