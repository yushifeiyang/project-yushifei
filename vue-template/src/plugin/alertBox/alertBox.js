import alertBox from './alertBox.vue';

export default {
  install (Vue, options = {}) {
		let AlertBoxObj = null;
		// 全局确认框
    Vue.prototype.$alertBox = (boxData = {title: '标题', content: '内容', ok: function () { console.log('执行删除操作.'); }}) => {
			const AlertObj = Vue.extend(alertBox);
			AlertBoxObj = new AlertObj();
			AlertBoxObj.$mount();
			AlertBoxObj.setInfo(boxData);
			document.querySelector('body').appendChild(AlertBoxObj.$el);
      AlertBoxObj.open();
    };
  }
};
