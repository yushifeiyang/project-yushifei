<template>
  <div class="messageBoxWrap" v-show="showBox">
    <div class="mask"></div>
    <div class="messageBox">
      <div class="messageBoxTitle">
        <slot name="MBTitle"></slot>
      </div>
      <div class="messageBoxContent">
        <slot name="MBContent"></slot>
      </div>
      <div class="messageBoxButton clearfix">
        <slot name="MBButton"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    showBox: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.messageBoxWrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  z-index: 110;
}
.mask{
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
}
.messageBox{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 80%;
  min-height:200px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
}
.messageBoxTitle{
  width: 100%;
  height: 88px;
}
.messageBoxTitle h1{
  height: 88px;
  line-height: 88px;
  text-align: center;  
  font-size: 32px;
  color: #333;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.messageBoxContent{
  padding:0 30px 30px 30px;
  min-height: 88px;
  font-size: 32px;
  color: #333;
}
.messageBoxButton{
  height: 88px;
}
.messageBoxButton  div{
  height: 100%;
}
.messageBoxButton > div > button{
  font-size: 32px;
  color: #333333;
  width: 50%;
  height: 100%;
  outline: 1px solid #ececec;
  border-radius: 4px;
  float: left;
}
</style>
