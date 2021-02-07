<template>
<div>

    <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
    title="提示"
    :visible="centerDialogVisible"
    width="30%"
    center
    :append-to-body="true"
    @close="closeFn">
    <div>
            <span>需要注意的是内容是默认不居中的</span>
    <input placeholder="0"/>
    </div>

    <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>

</div>
</template>
<script>
export default {
    components: {},
    data () {
        return {
            centerDialogVisible: false
        };
    },
    watch: {},
    computed: {},
    mounted () {},
    methods: {
        closeFn(){
            console.log('closeFn');
        }
    }
};
</script>
<style lang="less" scoped>
</style>
