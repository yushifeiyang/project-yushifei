import axios from 'axios';
import app from '../main';
// 创建第二层验证权限axios实例
const axios2 = axios.create({
  baseURL: '', // api的base_url
  timeout: 6000
});

axios2.interceptors.request.use(config => {
	// console.log('axios config=', config);
	// config.headers['Content-Type'] = 'application/json;';
  return config;
}, error => { // 请求错误处理
	console.log('request error');
  app.$router.push('/error');
  return Promise.reject(error);
});

// respone拦截器==>对响应做处理
axios2.interceptors.response.use(
	response => { // 成功请求到数据
		if (response.data.errorCode) {
			if (response.data.errorCode.toString() === '0') {
				return response.data;
			} else {
				app.$loading(false, '');
				app.$toast.center(response.data.value);
				return response.data;
			}
		} else {
			return response.data;
		}
  },
	error => { // 响应错误处理
		console.log('response error');
		app.$loading(false, '');
		app.$router.push({
			path: '/error',
			query: {
				msg: error.message
			}
		});
    return Promise.reject(error);
  }
);

export default axios2;
