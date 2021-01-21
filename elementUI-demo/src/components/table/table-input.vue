<template>
<div>
  <el-table :data="tableData" style="width: 100%" @cell-click="cellClickFn" @row-click="rowClickFn">
    <el-table-column prop="date" label="日期" width="180">
      <template slot-scope="scope">
        <el-input v-model="scope.row.date"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
      <template slot-scope="scope">
        <el-checkbox v-model="scope.row.name" true-label="1" false-label="0">备选项</el-checkbox>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
  <button @click="getResult">btn</button>
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
