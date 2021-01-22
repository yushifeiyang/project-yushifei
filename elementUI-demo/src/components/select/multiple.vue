<template>
<div>
    <el-form>
        <el-form-item label="value-key">
            <el-select v-model="permissionList" multiple placeholder="请选择" value-key="id">
                <el-option v-for="item in groups" :key="item.id" :label="item.name" :value="item" />
            </el-select>
        </el-form-item>
    </el-form>

</div>

</template>
<script>
export default {
  components: {},
  data() {
    return {
			permissionList: [],
			groups: [{
				id: 1,
				name: 'A组',
				permission: 'Write'
			},{
				id: 2,
				name: 'B组',
				permission: 'Write'
			},{
				id: 3,
				name: 'C组',
				permission: 'Write'
			}]
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
