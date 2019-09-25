<template>
  <div>
    <div class="screen">
        <p>
          <label>
            <ui-radio class="radio" v-model="val" value="1" @change="change"></ui-radio>
            <span>猫</span>
          </label>
        </p>
        <p>
          <label>
            <ui-radio class="radio" v-model="val" :checked="ischecked" value="2" @change="change"></ui-radio>
            <span>狗</span>
          </label>
        </p>
        <p>
          <label>
            <ui-radio class="radio" v-model="val" :disabled="isdisabled" value="3" @change="change"></ui-radio>
            <span>兔子</span>
          </label>
        </p>
        <p>
          <label>
            <ui-radio class="radio" v-model="val" value="4" @change="change"></ui-radio>
            <span>猪</span>
          </label>
        </p>
    </div>
  </div> 
</template>
<script>
import radio from './radio';
export default {
  data () {
    return {
      val: '',
      isdisabled: true,
      ischecked: true
    }
  },
  methods: {
    change (v) {
      console.log(v)
    }
  },
  components: {
    'ui-radio': radio
  }
}
</script>
<style scoped>
</style>
