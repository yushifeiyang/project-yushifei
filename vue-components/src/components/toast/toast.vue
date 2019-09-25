<!-- 提示框 -->
<template>
  <div>
    <!-- 标题栏 -->
    <!-- 内容 -->
    <button @click="openTop()">top</button>
    <button @click="openCenter()">center</button>
    <button @click="openBottom()">bottom</button>
    <button @click="openLoading()">loading</button>
  </div>
</template>
 
<script>
import Vue from 'vue'
// 全局引入Toast
import './toast.css';
import Toast from './toast.js';
Vue.use(Toast);
export default {
	name: 'Toast',
	data(){
		return {
			//
		}
	},
	methods:{
		openTop(){
			this.$toast.top('top');
		},
		openCenter(){
			this.$toast.center('center');
		},
		openBottom(){
			this.$toast('bottom');  // or this.$toast.bottom('bottom');
		},
		openLoading(){
			this.$loading('loading...');
			let self = this;
			setTimeout(function () {
				self.closeLoading()
			}, 2000)
		},
		closeLoading(){
			this.$loading.close();
		}
	}
}
</script>
 
<style scoped>
button{padding:10px 20px ; background-color: green }
</style>
