<template>
  <div class="messageBoxWrap" v-show="boxStatus">
    <div class="mask"></div>
    <div class="messageBox">
			<div class="messageBoxMain">
				<div class="messageBoxTitle" v-show="boxData.title">
					<h1>{{boxData.title}}</h1>
				</div>
				<div class="messageBoxContent">
					<p><span>{{boxData.content}}</span></p>
				</div>
				<div class="messageBoxButton clearfix">
					<button type="button" class="lt" @click="cancelFn">{{ boxData.cancelText }}</button>
					<button type="button" class="rt" @click="okFn">{{ boxData.okText }}</button>
				</div>
			</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
			boxStatus: false,
			boxData: {
				title: '', 
				content: '内容', 
				okText: '确定', 
				cancelText: '取消', 
				cancelCallback: function () { console.log('cancel'); }, 
				okCallback: function () { console.log('ok'); }
			}
    };
  },
	methods: {
		open () {
			this.boxStatus = true;
		},
		close () {
			this.boxStatus = false;
		},
		cancelFn () {
			this.boxData.cancelCallback();
			this.close();
		},
		setInfo (item) {
			this.boxData = Object.assign({}, this.boxData, item);
		},
		okFn () {
			this.boxData.okCallback();
			this.close();
		}
	}
};
</script>
<style lang="less" scoped>
.messageBoxWrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  z-index: 1000;
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
.messageBoxMain{
	padding-top: 30px;
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
.messageBoxContent>p{
	text-align: center;
}
.messageBoxContent>p>span{
	display: inline-block;
	text-align: left;
}
.messageBoxButton{
  height: 88px;
	button{
		font-size: 32px;
		color: #333333;
		width: 50%;
		height: 100%;
		outline: 1px solid #F4F4F5;
		border-radius: 4px;
		float: left;
		border: none;
		background: #fff;
	}
}
</style>
