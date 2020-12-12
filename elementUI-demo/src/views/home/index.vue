<template>
<div>
  <el-button @click="showConfirm">显示confirmBox</el-button>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {};
  },
  watch: {},
  computed: {},
  mounted () {

  },
  methods: {
    showConfirm(){
    this.$confirm('是否确认预约?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then((res)=>{
                  console.log('suc', res)
                }).catch((err) => {
                  console.log('err', err)
                })
    }
  }
};
</script>
<style lang="less" scoped>
</style>
