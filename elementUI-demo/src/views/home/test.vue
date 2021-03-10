
<template>
<div>
    <input type="text" :value="name" @input="handleSearch">
</div>
</template>
<script>
export default {
    name: "test",
  data () {
    return {
        name: ""
    };
  },
  model:{
      value: "name",
      event: "evt"
  },
  methods: {
    handleSearch(evt){
        this.$emit("evt", evt.target.value);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
