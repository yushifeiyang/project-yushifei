// 引入vue
import Vue from 'vue'

// 引入路由
import VueRouter from 'vue-router'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 手动安装路由
Vue.use(VueRouter)

// 导入app组件
import app from './app.vue'

var vm = new Vue({
  el: '#app',
  render: c => {
    return c(app)
  },
  router
})