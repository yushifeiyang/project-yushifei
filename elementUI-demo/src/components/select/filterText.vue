<template>
<div>
    <el-select 
        v-model="value" 
        @change="changeFn" 
        value-key="value" 
        filterable
        :filter-method="function(val){filterTxt(val, 'where')}"
    >
        <el-option :label="item.label" :value="item.value" v-for="item in options" :key="item"></el-option>
    </el-select>
</div>
</template>
<script>
const  options = [
            {
                value: 1,
                label: '一楼'
            },
            {
                value: 2,
                label: '二楼'
            }
        ];

export default {
  data () {
    return {
        value: 1,
        options: options
    };
  },
  mounted () {},
  methods: {
      changeFn(val){
          console.log(val);
      },
      filterTxt(val, type){
          console.log(val, type);
          this.options = options.filter(v => v.label.indexOf(val) > -1)
      }
  },
  components: {},
  watch: {}
};
</script>
<style lang="less" scoped>
</style>
