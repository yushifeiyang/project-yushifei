<template>
<div>
    <el-input 
        class="fuzzy-input"
        v-model="val"
        @focus="focusFn"
        @input="inputFn($event)"
    ></el-input>

    <fuzzy-search :tableData="tableData" ref="fuzzySearch"></fuzzy-search>


</div>
</template>
<script>
import fuzzySearch from './fuzzySearch.vue';

export default {
  name:"vFuzzySearch",
  data () {
    return {
        val: "",
        tableData: [
            {
                name: '王大',
                age:10
            },
            {
                name: '王二',
                age:20
            },
            {
                name: '王三',
                age:30
            },
            {
                name: '王四',
                age:10
            },
            {
                name: '王五',
                age:20
            },
            {
                name: '王六',
                age:30
            },
        ]
    };
  },
  mounted () {},
  methods: {
      focusFn(){
          if(this.val !="") {
              this.tableData = this.tableData.filter(v => {
                  const reg = new RegExp(this.val, "g");
                  return reg.test(v.name);
              })
              this.$refs.fuzzySearch.open();
          }
      },
      inputFn(e){

      }
  },
  components: {
      "fuzzy-search": fuzzySearch
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.fuzzy-input{
    width: 300px;
}
</style>
