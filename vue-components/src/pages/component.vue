<template>
<div>
	<h1>动态组件加载</h1>
	<component v-bind:is="tabView"></component>
</div>
</template>

<script>
// 引入要添加的所有组件
import Index from './index.vue'
export default {
	data: function () {
		return {
			tabView: 'Index'
		}
	},
	components: {
		Index
	},
	methods: {
	}
}
</script>