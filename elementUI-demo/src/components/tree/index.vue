<template>
<div>
  <el-row>
    <el-col :span="24">
      <basic></basic>
    </el-col>
  </el-row>
</div>

</template>
<script>
import basic from './basic.vue';

export default {
  name:'vTree',
  components: {
    "basic": basic
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
