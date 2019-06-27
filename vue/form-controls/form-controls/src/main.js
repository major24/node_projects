// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'

// import Workflow from 'workflow-activity'

// require('../../src/assets/dist/mncomponent.js')
// var Workflow = require('C:\\Users\\major\\Documents\\projects\\stencil\\workflow\\workflow-activity\\workflow-activity');

Vue.config.productionTip = false
Vue.config.ignoredElements = ['workflow-activity', 'cx-workflow', 'workflow', 'cx-workflow-activity', 'mncomponent', 'Workflow']

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
