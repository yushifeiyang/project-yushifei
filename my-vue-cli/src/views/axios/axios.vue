<template>
<div>axios
</div>
</template>
<script>
import axios from 'axios';
import { log } from 'util';

export default {
  components: {},
  data () {
    return {};
  },
  watch: {},
  computed: {},
  mounted () {
      axios({
          url: '/api/v1/web/message/view/unread',
          method: 'get'
      }).then(res => {
          console.log('res=======', res);
      })
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
