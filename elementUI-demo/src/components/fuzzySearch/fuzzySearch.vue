<template>
<div v-if="tableData && tableData.length" class="fuzzy-search">

  <el-table 
    ref="fuzzyTable"
    :data="tableData" 
    fit
    current-row-key="1"
    :highlight-current-row="true"
    stripe
    @row-click="rowClickFn"

  >
    <el-table-column type="index" label="ID" width="50"></el-table-column>
    <el-table-column prop="name" label="姓名" ></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
  </el-table>
  <el-pagination
  :page-size="4"
  background
  layout="prev, pager, next"
  :total="pagination.total">
</el-pagination>

</div>
</template>
<script>

export default {
  data () {
    return {
    };
  },
  props:{
      tableData: Array,
      pagination: Object

  },
  mounted () {

  },
  methods: {
    rowClickFn(row, column, event){
      this.$emit("getFuzzyResult", row);
      this.$emit("setVisible", false);
    }
  },
  components: {
  },
  watch: {}
};
</script>
<style lang="less" scoped>
  .fuzzy-search{
    border: 1px solid #d7d7d7;
    width: 400px;
  }
</style>
