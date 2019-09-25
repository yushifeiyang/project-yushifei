<template>
  <div>
    <button @click="openConfirmBox">open</button>
    <lu-confirmBox :showBox="isShowBox">
      <h1 slot="MBTitle">{{confirmBoxTxt.MBTitle}}</h1>
      <div slot="MBContent">{{confirmBoxTxt.MBContent}}</div>
      <div slot="MBButton">
        <button type="button" class="lt" @click="confirmCancel">取消</button>
        <button type="button" class="rt" @click="confirmOK">确定</button>
      </div>
    </lu-confirmBox>
  </div>
</template>
<script>
import confirmBox from './confirmBox'
export default {
  data () {
    return {
      isShowBox: false,
      confirmBoxTxt: {
        MBTitle: '1',
        MBContent: '22'
      }
    }
  },
  methods: {
    openConfirmBox () {
      this.isShowBox = true
    },
    confirmCancel () {
      this.isShowBox = false
    },
    confirmOK () {
      console.log('ok')
      this.isShowBox = false
    }
  },
  components: {
    'lu-confirmBox': confirmBox
  }
}
</script>
<style scoped>
</style>
