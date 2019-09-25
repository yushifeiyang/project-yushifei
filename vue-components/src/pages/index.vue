<template>
  <div>
    <div class="main">
      <h1>vue</h1>
      <ul>
        <li><router-link to="/helloworld">helloworld</router-link></li>
        <li><router-link to="/vconsole">vconsole</router-link></li>
        <li><router-link to="/mockjs">mockjs</router-link></li>
        <li><router-link to="/radio">radio</router-link></li>
        <li><router-link to="/radioCustom">radioCustom</router-link></li>
        <li><router-link to="/confirmBox">confirmBox</router-link></li>
        <li><router-link to="/progressBar">progress-bar</router-link></li>
        <li><router-link to="/DPlayer">video player</router-link></li>
        <li><router-link to="/toast">toast</router-link></li>
        <li><router-link to="/switchBox">switch-box</router-link></li>
        <li><router-link to="/camera">camera</router-link></li>
      </ul>
      
    </div>
  </div>
</template>
<script>
import {isChinaIDCard} from '../api/valid.js'
export default {
  mounted () {
    console.log(isChinaIDCard('330102199003071572'))
  }
}
</script>
<style scoped>
.main{width: 900px; margin: 0 auto; text-align: left;}
.main ul li{line-height: 30px;font-size: 16px}
</style>
