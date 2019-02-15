import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ButtonCounterPage from '@/components/button-counter/ButtonCounterPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },    
    {
      path: '/button-counter',
      name: 'ButtonCounterPage',
      component: ButtonCounterPage
    },

  ]
})
