import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CustomerPage from '@/components/CustomerPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },    
    {
      path: '/customer',
      name: 'CustomerPage',
      component: CustomerPage
    },

  ]
})
