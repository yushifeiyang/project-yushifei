import axios from 'axios';
import app from '../main';
import axios2 from './axios_2';
import { STAGE_BASE_URL } from './config';
import { getAuthCodeFn } from '../assets/js/common';
// 创建axios实例
const _axios = axios.create({
  baseURL: '', // api的base_url
	timeout: 6000
	// withCredentials: true
});

_axios.interceptors.request.use(config => {
	// console.log('config=', config);
	// config.headers['Content-Type'] = 'application/json;';
  return config;
}, error => { // 请求错误处理
	console.log('request error');
  app.$router.push('/error');
  return Promise.reject(error);
});

// respone拦截器==>对响应做处理
_axios.interceptors.response.use(
	response => { // 成功请求到数据
		// console.log('axios response=', response);
		// console.log('axios respone拦截器 router=', app.$route);
		if (response.data.errorCode) {
			if (response.data.errorCode.toString() === '0') {
				return response.data;
			} else if (response.data.errorCode.toString() === '10002') {
				return response.data;
			} else if (response.data.errorCode.toString() === '1003') {
				return getAuthCodeFn().then(authcode => {
					console.log('axios2 authcode res==', authcode);
					if (authcode && authcode.errorCode.toString() === '0') {
						const url = STAGE_BASE_URL + '/medical-supervision/system/initCookie';
						return axios2.post(url, {authCode: authcode.param.authCode}).then(cookie => {
							console.log('axios2 initCookie==', cookie);
							if (cookie.errorCode.toString() === '0') {
								return axios2({
								  method: response.config.method,
								  url: response.config.url,
								  data: response.config.data
								}).then(axios2Res => {
									if (axios2Res.errorCode.toString() === '0') {
										console.log('axios2 res ==', axios2Res);
										return axios2Res;
									} else {
										app.$toast.center(axios2Res.value);
									}
								});
							} else {
								return Promise.reject(cookie);
							}
						});
					} else {
						return Promise.reject(authcode);
					}
				});
			} else {
				console.log('response.data', response.data);
				app.$loading(false, '');
				app.$toast.center(response.data.value);
				return response.data;
			}
		} else {
			return response.data;
		}
  },
	error => { // 响应错误处理
		// console.log('response error', error.response);
		app.$loading(false, '');
		if (error.response.status === 404) {
			app.$router.push({
				path: '/error',
				query: {
					msg: '网络请求不存在'
				}
			});
		} else {
			app.$router.push({
			  path: '/error',
			  query: {
			    msg: error.response.data.message
			  }
			});
		}
    return Promise.reject(error);
  }
);

export default _axios;
