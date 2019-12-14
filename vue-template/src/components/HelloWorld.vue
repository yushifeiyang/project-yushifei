<template>
  <div>
    <p>test</p>
  </div>
</template>
<script>
import { getUserInfo } from '../api/orderList';
export default {
  data () {
    return {};
  },
  mounted () {
		this.$toast.center('aaaa');
		this.$loading(true);
		getUserInfo({'name': 'aa'}).then(res => {
			this.$loading(false, '');
			console.log('getHelp res', res);
		});
		// console.log('yu-id==', sessionStorage.getItem('yu-id'));
  },
  methods: {},
  components: {},
  watch: {}
};
</script>
<style lang="less" scoped>
div{
	font-size: 32px;/*px*/
}
</style>
