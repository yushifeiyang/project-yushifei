import Vue from 'vue';
import VueRouter from 'vue-router'

// 导入对应的路由组件
import Home from './views/home/index.vue'

const context = require.context('./components/', true,  /index\.vue$/);
const subRoutes = [];

((Vue) => {
  context.keys().forEach((key) => {
    const component = context(key).default;
    // console.log('component==', component);
    const subRouter = {
      path: '/' + component.name,
      component: component
    }
    subRoutes.push(subRouter);
    // Vue.component(component.name, component);
  });
})(Vue);



var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    ...subRoutes
  ],
})

export default router