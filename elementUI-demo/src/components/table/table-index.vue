<template>
<div>
  <el-table 
    :data="tableData" 
    style="width: 100%" 
    current-row-key="1"
    :highlight-current-row="true"
    @cell-click="cellClickFn" 
    @row-click="rowClickFn"
  >
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>

</div>

</template>
<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "2",
          address: "北京市朝阳区",
        },
      ],
    };
  },
  watch: {
  },
  computed: {},
  mounted() {},
  methods: {
    getResult(){
      console.log(this.tableData);
    },
    cellClickFn(row, column, cell, event){
      console.log('cellClickFn', event.target.nodeName);
      if(event.target.nodeName != "INPUT"){
        console.log('cellClickFn ==');
      }
      
    },
    rowClickFn(row, column, cell, event){
      // console.log('rowClickFn');
    }
  },
};
</script>
<style lang="less" scoped>
</style>
