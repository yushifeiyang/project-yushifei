// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/index';
import VueTouch from 'vue-touch';
// ios端禁止回弹
import iNoBounce from 'inobounce';
import './assets/css/reset.less';
// this.$loading(true, 'loading...');
import Loading from '@/plugin/loading/loading.js';
import confirmBox from '@/plugin/confirmBox/confirmBox.js';
// this.$toast.top('top');
import '@/plugin/toast/toast.less';
import Toast from '@/plugin/toast/toast.js';
// 模拟数据
import './mock/index.js';
console.log('env==', process);
Vue.config.productionTip = false;

// 手势事件
Vue.use(VueTouch, {name: 'v-touch'});
// 禁止ios回弹
Vue.use(iNoBounce);
// loading
Vue.use(Loading);
// toast
Vue.use(Toast);
// 确认框
Vue.use(confirmBox);
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
	router,
	store,
  components: { App },
  template: '<App/>'
});
export default app;
