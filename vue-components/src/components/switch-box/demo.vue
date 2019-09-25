<template>
<div>
<v-switchBox @change="getSwitchValue" :val="false"></v-switchBox>

</div>
</template>
<script>
import switchBox from "./switch-box.vue";
export default {
	data () {
		return {}
	},
	mounted () {},
	methods: {
		getSwitchValue (v) {
			console.log('value==', v)
		}
	},
	components: {
		'v-switchBox': switchBox
	}
}
</script>
<style lang="less" scoped>
</style>
