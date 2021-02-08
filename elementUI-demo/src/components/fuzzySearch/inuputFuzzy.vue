<template>
    <div class="fuzzy-input-wrap" ref="fuzzyWrap">
            <el-input 
                class="fuzzy-input"
                v-model="val"
                @focus="focusFn"
                @input="inputFn($event)"
                @blur="blurFn($event)"
            ></el-input>
            <div class="fuzzy-main">
                <fuzzy-search 
                    v-if="fuzzyVisible"
                    :tableData="tableData" 
                    :pagination="pagination"
                    ref="fuzzySearch"
                    @setVisible="setVisibleFn"
                    @getFuzzyResult="getFuzzyResultFn"
                />
            </div>

    </div>
</template>
<script>
import fuzzySearch from './fuzzySearch.vue';

const arr =[
            {
                name: '王大',
                age:10
            },
            {
                name: '李二',
                age:20
            },
            {
                name: '赵三',
                age:30
            },
            {
                name: '陈四',
                age:10
            },
            {
                name: '杨五',
                age:20
            },
            {
                name: '陆六',
                age:30
            },
        ];

export default {
  data () {
    return {
        fuzzyVisible: false,
        val: "",
        tableData: [],
        pagination:{
            total: 0
        }
    };
  },
  mounted () {
      const me = this;
      document.addEventListener("click", function(e){
          if (!me.$refs.fuzzyWrap.contains(e.target)) {
              me.fuzzyVisible  =false;
          }
      }, false)
  },
  methods: {
      focusFn(e){
          this.getTableData(this.val);
      },
      inputFn(e){
        
          this.getTableData(this.val);
      },
      blurFn(e){
          console.log(e);
      },
      getTableData(val){
        this.fuzzyVisible = true;
        this.tableData = arr.filter(v => {
            const reg = new RegExp(val, "g");
            return reg.test(v.name);
        });
        this.pagination.total = this.tableData.length;
      },
      setVisibleFn(v){
          console.log(v, "====111======");
          this.fuzzyVisible = v;
      },
      getFuzzyResultFn(result){
          this.val = result.name;
      },
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
.fuzzy-input-wrap{
    position: relative;
    height: 40px;
}
.fuzzy-main{
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 10;
}

</style>
