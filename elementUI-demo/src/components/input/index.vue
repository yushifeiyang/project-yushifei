<template>
<div>
  <auto-complete></auto-complete>
  <auto-complete2></auto-complete2>
</div>
</template>
<script>
import autoComplete from './input-autocomplete.vue';
import autoComplete2 from './input-autocomplete2.vue';

export default {
  name:"vInput",
  data () {
    return {};
  },
  mounted () {},
  methods: {},
  components: {
    "auto-complete": autoComplete,
    "auto-complete2": autoComplete2
  },
  watch: {}
};
</script>
<style lang="less" scoped>
</style>
