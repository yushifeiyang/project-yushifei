<template>
<div>
  <el-row>
    <el-col :span="24">
      <table-input></table-input>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <table-index></table-index>
    </el-col>
  </el-row>
</div>

</template>
<script>
import tableInput from './table-input.vue';
import tableIndex from './table-index.vue';

export default {
  name:'vTable',
  components: {
    "table-input": tableInput,
    "table-index": tableIndex,
  },
  data() {
    return {

    };
  },
  watch: {
  },
  computed: {},
  mounted() {},
  methods: {
  },
};
</script>
<style lang="less" scoped>
</style>
