<template>
	<div>
		index
		<img src="http://p6e7vhrci.bkt.clouddn.com/FkL7J5AzU8I-wfXhDj2qtft4XOHU" width="300" alt="">
		<button @click="linkTo">link to test</button>
	</div>
</template>
<script>
// import { getUserInfo } from '../../api/orderList';
export default {
	mounted () {
		// getUserInfo({'name': 'aa'}).then(res => {
		// 	this.$loading(false, '');
		// 	console.log('getHelp res', res);
		// });
	},
	methods: {
		linkTo () {
			this.$router.push({
				name: 'test',
				params: {
					id: 2
				},
				query: {
					type: '000'
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped>

</style>
