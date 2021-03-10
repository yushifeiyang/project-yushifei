<template>
<div>
  <el-button @click="showConfirm">显示confirmBox</el-button>
  <test v-model="name"></test>
  <p>{{name}}</p>
</div>
</template>
<script>
import test from "./test.vue";

export default {
  components: {
    "test": test
  },
  data () {
    return {
      name: ""
    };
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
