<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <progress-bar :isOk="loaded"></progress-bar>
  </div>
</template>

<script>
import progressBar from './progress-bar'
export default {
  name: 'progressBar',
  data () {
    return {
      msg: 'Welcome to progressBar',
      loaded: false
    }
  },
  mounted () {
    this.loaded = true
  },
  components: {
    'progress-bar': progressBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
