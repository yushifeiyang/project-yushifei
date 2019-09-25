<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="vconsole">vconsole</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loaded: false
    }
  },
  methods:{
    vconsole(){
      console.log(1)
    }
  },
  mounted () {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
