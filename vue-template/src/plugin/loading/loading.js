import Loading from './loading.vue';
export default {
  install (Vue, options = {}) {
    let loading = null;
    Vue.prototype.$loading = (bool = true, info = '加载中...') => {
			if (!loading) {
				const LoadingObj = Vue.extend(Loading);
				loading = new LoadingObj();
				if (!loading.$el) {
					loading.$mount();
					loading.setInfo(info);
					document.querySelector('body').appendChild(loading.$el);
				}
			}
      if (bool) {
        loading.open();
      } else {
        loading.close();
      }
    };
  }
};
