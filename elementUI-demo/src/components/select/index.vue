<template>
<div>
    <filterText></filterText>
    <p>multiple:</p>
    <multiple></multiple>
</div>
</template>
<script>
import filterText from './filterText.vue';
import multiple from './multiple.vue';

export default {
    name:"vSelect",
  data () {
    return {};
  },
  mounted () {},
  methods: {},
  components: {
    "filterText": filterText,
    "multiple": multiple
  },
  watch: {}
};
</script>
<style lang="less" scoped>
</style>
