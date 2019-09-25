<template>
  <div class="messageBoxWrap" v-show="boxStatus">
    <div class="mask"></div>
    <div class="messageBox">
      <div class="messageBoxTitle">
        <h1>{{boxData.title}}</h1>
      </div>
      <div class="messageBoxContent">
        <div>{{boxData.content}}</div>
      </div>
      <div class="messageBoxButton clearfix">
        <button type="button" class="lt" @click="close">取消</button>
        <button type="button" class="rt" @click="deleteConfirmOK">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
			boxStatus: false,
			boxData: {title: '标题', content: '内容', callback: function () { console.log('执行删除操作'); }}
    };
  },
	methods: {
		open () {
			this.boxStatus = true;
		},
		close () {
			this.boxStatus = false;
		},
		setInfo (item) {
			this.boxData = item;
		},
		deleteConfirmOK () {
			this.boxData.callback();
			this.close();
		}
	}
};
</script>
<style lang="scss" scoped>
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
  padding-top: 30px;
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
	button{
		font-size: 32px;
		color: #333333;
		width: 50%;
		height: 100%;
		outline: 1px solid #ececec;
		border-radius: 4px;
		float: left;
		border: none;
	}
}
</style>
