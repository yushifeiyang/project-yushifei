import axios from 'axios';
import app from '../main';
// 创建axios实例
const _axios = axios.create({
  baseURL: '', // api的base_url
  timeout: 6000
});

_axios.interceptors.request.use(config => {
	// console.log('config=', config);
  return config;
}, error => { // 请求错误处理
  app.$router.push('/error');
  return Promise.reject(error);
});

// respone拦截器==>对响应做处理
_axios.interceptors.response.use(
	response => { // 成功请求到数据
		// console.log('axios response=', response);
		console.log('router=', app.$route);
		if (response.data.errorCode === '0') {
			return response.data;
		} else if (response.data.errorCode === '1003') {
			app.$loading(true, '验证权限');
			if (typeof app.$route.query === 'object') {
				app.$router.push({
					path: '/authToken',
					query: {
						pageParams: encodeURI(JSON.stringify(app.$route.query)),
						pageUrl: encodeURI(app.$route.path)
					}
				});
			} else {
				app.$router.push({
				  path: '/authToken',
				  query: {
				    pageParams: encodeURI(JSON.stringify({})),
				    pageUrl: encodeURI(app.$route.path)
				  }
				});
			}
		} else {
			app.$toast(response.data.value);
		}
  },
  error => { // 响应错误处理
    app.$router.push('/error');
    return Promise.reject(error);
  }
);

export default _axios;
