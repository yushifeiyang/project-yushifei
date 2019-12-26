<template>
  <div>
    <p>test</p>
  </div>
</template>
<script>
// import { getUserInfo } from '../api/orderList';
export default {
  data () {
    return {};
  },
  mounted () {
		// this.$toast.center('aaaa');
		// this.$loading(true);
		// getUserInfo({'name': 'aa'}).then(res => {
		// 	this.$loading(false, '');
		// 	console.log('getHelp res', res);
		// });
		// console.log('yu-id==', sessionStorage.getItem('yu-id'));
		this.$confirmBox({
				title: '标题', 
				content: '内容',
				okText: '我知道了',
				cancelCallback: function () { console.log('cancel'); },
				okCallback: function () { console.log('ok'); }
		});
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
