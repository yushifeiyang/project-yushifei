<template>
	<div v-show="show" class="lx-load-mark">
		<div class="lx-load-box">
			<img class="lx-loading-img" src="../../assets/images/loading-80.gif" alt="">
			<p class="lx-load-content">{{info}}</p>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			show: false,
			info: ''
		};
	},
  methods: {
    open () {
      this.show = true;
    },
    close () {
      this.show = false;
		},
		setInfo (val) {
			this.info = val;
		}
  }
};
</script>
<style lang="less" scoped>
.lx-load-mark {
  position: fixed;
  left: 0;
  top: 0;
	bottom: 0;
	right: 0;
	z-index: 9999;
	// background: rgba($color: #000000, $alpha: 0.3);
	background: rgba(0, 0, 0, 0.3);
}

.lx-load-box {
	padding-top: 48%;
}

.lx-load-content {
	font-size: 14px;
	padding: 10px 0;
	text-align: center;
}

.lx-loading-img {
	display: block;
	position: relative;
	width: 80px;
	height: 80px;
	margin:  0 auto;
}

</style>
