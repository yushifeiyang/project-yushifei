<template>
  <div>
    <p @click="vconsole">vconsole</p>
  </div>
</template>
<script>
export default {
  methods:{
    vconsole(){
      console.log(1)
    }
  }
}
</script>
<style scoped>
</style>
