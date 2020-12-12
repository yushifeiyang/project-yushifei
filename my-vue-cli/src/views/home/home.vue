<template>
<div>
  <h2>使用展示</h2>
  <div id="print">
    <div :style="pagePadding">
      <p :style="{fontSize, color, borderTop}">第一行</p>
      <p :style="{fontSize, color, ...borderTop3}">第二行</p>
      <p :style="font_Size_color">第三行</p>

      <table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
              <td :style="{...borderTop3}">1</td>
              <td :style="{...borderTop3}">2</td>
              <td :style="{...borderTop3}">3</td>
          </tr>
          <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
          </tr>
      </table>
    </div>

  </div>
</div>

</template>
<script>

import common from './common.js';

export default {
  components: {},
  data () {
    return {
      ...common
    };
  },
  watch: {},
  computed: {},
  mounted () {
    // this.init();

  },
  methods: {
    init(){
      var strHTML=document.getElementById("print").innerHTML;
      LODOP.PRINT_INITA(1,1,770,660,"测试预览功能");
      LODOP.ADD_PRINT_TEXT(10,60,300,200,"这是测试的纯文本，下面是超文本:");
      LODOP.ADD_PRINT_HTM(30,5,"100%","80%",strHTML);
      LODOP.PREVIEW();
    }
  }
};
</script>
<style lang="less" scoped>
</style>
