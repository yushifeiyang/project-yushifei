import confirmBox from './confirmBox.vue';

export default {
  install (Vue, options = {}) {
		let confirm = null;
		// 全局确认框
    Vue.prototype.$confirmBox = (boxData = {title: '标题', content: '内容', callback: function () { console.log('执行删除操作.'); }}) => {
			const ConfirmBoxObj = Vue.extend(confirmBox);
			confirm = new ConfirmBoxObj();
			if (!confirm.$el) {
				confirm.$mount();
				confirm.setInfo(boxData);
				document.querySelector('body').appendChild(confirm.$el);
			}
      confirm.open();
    };
  }
};
