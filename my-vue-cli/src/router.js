import VueRouter from 'vue-router'

// 导入对应的路由组件
import Home from './views/home/home.vue'
import AxiosPage from './views/axios/axios.vue'

var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/axios', component: AxiosPage },
  ],
})

export default router