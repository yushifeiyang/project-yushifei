// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// reset css
import './assets/css/reset.css'

// 使用vconsole
// require('./components/vconsole/vconsole')
Vue.config.productionTip = false
// 使用mockjs
// require('./components/mockjs/index')
import './components/mockjs/index'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
