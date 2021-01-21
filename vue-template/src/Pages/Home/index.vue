<template>
	<div>
		index
		<img src="http://p6e7vhrci.bkt.clouddn.com/FkL7J5AzU8I-wfXhDj2qtft4XOHU" width="300" alt="">
		<button @click="linkTo">link to test</button>
		<div class="class">aa</div>
		<input type="text">
	</div>
</template>
<script>
// import { getUserInfo } from '../../api/orderList';
export default {
	mounted () {
		sessionStorage.setItem('yu-id', 'yushifei');
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
<style lang="less" scoped>
.class {
  width: 100px;
  padding: 10px;
	height: 100px; 
	border: solid 1px #000; 
}
</style>
