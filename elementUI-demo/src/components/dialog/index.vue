<template>
<div>
    <index-basic></index-basic>
    <index-outer-inner></index-outer-inner>


</div>
</template>
<script>
import { log } from 'util';

import indexBasic from './index-basic.vue';
import indexOuterInner from './index-outer-inner.vue';

export default {
    name:'vDialog',
    components: {
        'index-basic': indexBasic,
        'index-outer-inner': indexOuterInner
    },
    data () {
        return {
            
        };
    },
    watch: {},
    computed: {},
    mounted () {
        log('11111');
    },
    methods: {
    }
};
</script>
<style lang="less" scoped>
</style>
