<template>
  <div>
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
		<component-hello :name="'yushifei'"></component-hello>
    <button @click="greet">Greet</button>
  </div>
</template>
 
<script>
import Vue from 'vue'
import componentHello from "./component-hello.vue";
import Component from 'vue-class-component'
 
@Component({
  props: {
    propMessage: String
	},
	watch: {
		msg: (nv, ov) => {
			console.log('nv=', nv);
		}
	},
	components: {
		componentHello
	}
})
export default class App extends Vue {
  // initial data
  msg = 123
 
  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage
 
  // lifecycle hook
  mounted () {
    this.greet()
  }
 
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }
 
  // method
  greet () {
    console.log('greeting: ' + this.msg)
  }
}
</script>