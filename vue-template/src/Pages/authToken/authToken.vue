<template>
<div>
	
</div>
</template>
<script>
import {initCookie} from '../../api/orderList';
export default {
	data () {
		return {
			pageUrl: '',
			pageParams: {}
		};
	},
	created () {
		this.getPageUrl();
		this.initCookiefn();
		// this.initTest();
	},
	methods: {
		initCookiefn () {
			window.yl.call('getAuthcode', {}, {
				onSuccess: (res) => {
					console.log('获取getAuthcode:', res);
					if (res && res.errorCode === '0') {
						initCookie({authCode: res.param.authCode}).then((result) => {
							console.log('initCookie', result);
							if (result.errorCode === '0') {
								this.$loading(false, '');
								this.$router.push({
									path: this.pageUrl,
									query: JSON.parse(this.pageParams)
								});
							}
						});
					}
				},
				onFail: (res) => {
					console.log('获取authCode失败');
				}
			});
		},
		// 测试接口
		// 1c57a4fa-ff9b-4250-a1d6-64049e00be8e
		initTest () {
			initCookie({authCode: '11111111'}).then((result) => {
				console.log('initCookie', result);
				if (result.errorCode === '0') {
					this.$loading(false, '');
					this.$router.push({
						path: this.pageUrl,
						query: JSON.parse(this.pageParams)
					});
				}
			});
		},
		// encodeURI
		getPageUrl () {
			this.pageUrl = decodeURI(this.$route.query.pageUrl);
			this.pageParams = decodeURI(this.$route.query.pageParams);
		}
	},
	components: {},
	watch: {}
};
</script>
<style lang="scss" scoped>
</style>
