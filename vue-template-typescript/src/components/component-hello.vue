<template>
<div>
	hello component
	<p>i am {{name}}</p>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    name: String
	}
})
export default class hello extends Vue {

}
</script>
<style scoped>
</style>
