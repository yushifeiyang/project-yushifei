import confirmBox from './confirmBox.vue';

export default {
  install (Vue, options = {}) {
		let confirm = null;
		// 全局确认框
    Vue.prototype.$confirmBox = (boxData = {
				title: '标题', 
				content: '内容', 
				cancelCallback: function () { console.log('cancel'); },
				okCallback: function () { console.log('ok'); }
			}) => {
			const ConfirmBoxObj = Vue.extend(confirmBox);
			confirm = new ConfirmBoxObj();
			confirm.$mount();
			confirm.setInfo(boxData);
			document.querySelector('body').appendChild(confirm.$el);
      confirm.open();
    };
  }
};
