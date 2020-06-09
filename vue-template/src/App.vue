<template>
  <div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<div class="console" @click="showConsole"></div>
  </div>
</template>

<script>
import Vconsole from 'vconsole';
export default {
  name: 'App',
	data () {
		return {
			count: ''
		};
	},
	methods: {
		showConsole () {
			if (this.count >= 6) {
				/* eslint-disable no-new */
				new Vconsole();
			} else {
				this.count++;
			}
		}
	}
};
</script>

<style lang="less" scoped>
#app{
	height: 100%;
	.console{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 60px;
		height: 60px;
		background: transparent;
		z-index: 1001;
	}
}
</style>
