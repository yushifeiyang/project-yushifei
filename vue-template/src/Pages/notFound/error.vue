<template>
<div>
	<p>{{$route.query.msg}}</p>
</div>
</template>
<script>
export default {
	data () {
		return {};
	},
	mounted () {
		this.$loading(false, '');
	},
	methods: {},
	components: {},
	watch: {}
};
</script>
<style lang="less" scoped>
</style>
