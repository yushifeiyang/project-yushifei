<template>
<div>

<el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center
  @close="closeFn">
  <span>需要注意的是内容是默认不居中的</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

</div>
</template>
<script>
import { log } from 'util';
export default {
    name:'vDialog',
    components: {},
    data () {
        return {
            centerDialogVisible: false
        };
    },
    watch: {},
    computed: {},
    mounted () {
        log('11111');
    },
    methods: {
        closeFn(){
            console.log('closeFn');
        }
    }
};
</script>
<style lang="less" scoped>
</style>
