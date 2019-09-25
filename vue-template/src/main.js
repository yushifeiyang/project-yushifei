// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/index';
import VueTouch from 'vue-touch';
import 'lib-flexible/flexible';
// 1rem = 75px
import fastclick from 'fastclick';
import iNoBounce from 'inobounce';
import './assets/css/reset.scss';
// this.$loading(true, 'loading...');
import Loading from '@/plugin/loading/loading.js';
// this.$confirmBox({
// 	title: '删除订单',
// 	content: '删除后订单将无法恢复，请确认要删除？',
// 	callback: function () {
// 		console.log('删除了');
// 	}
// });
import confirmBox from '@/plugin/confirmBox/confirmBox.js';
// this.$toast.top('top');
import '@/plugin/toast/toast.scss';
import Toast from '@/plugin/toast/toast.js';
// import './plugin/vconsole';
// 模拟数据
import './mock/index.js';
Vue.config.productionTip = false;

// 手势事件
Vue.use(VueTouch, {name: 'v-touch'});
fastclick.attach(document.body);
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
