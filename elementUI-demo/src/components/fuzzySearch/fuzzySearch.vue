<template>
<div v-if="visible">

  <el-table 
    ref="fuzzyTable"
    :data="tableData" 
    style="width: 300px" 
    current-row-key="1"
    :highlight-current-row="true"
    stripe

  >
    <el-table-column type="index" label="ID" width="50"></el-table-column>
    <el-table-column prop="name" label="姓名" ></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
  </el-table>

</div>
</template>
<script>

export default {
  data () {
    return {
        visible: false
    };
  },
  props:{
      tableData: Array,

  },
  mounted () {
      
  },
  methods: {
      open(){
          this.visible = true;
      },
      close(){
          this.visible = false;
      }
  },
  components: {
  },
  watch: {}
};
</script>
<style lang="less" scoped>

</style>
