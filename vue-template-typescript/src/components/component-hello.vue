<template>
<div>
	hello component
	<p>i am {{name}}</p>
</div>
</template>
<script lang="ts">
// import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import MyMixin from './mixin'
import { NoCache } from './decorators'
@Component({
	props: {
		name: String
	}
})
export default class hello extends mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
	}
	
  @NoCache
  get random () {
    return Math.random()
  }
}
</script>
<style scoped>
</style>
