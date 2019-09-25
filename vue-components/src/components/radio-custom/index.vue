<template>
  <div>
    <div class="screen">
      <ul>
        <li>
          <ui-radio class="radio" v-model="val" value="1" @change="change"><span>猫</span></ui-radio>
        </li>
        <li>
          <ui-radio class="radio" v-model="val" :checked="ischecked" value="2" @change="change"><span>狗</span></ui-radio>
        </li>
        <li>
          <ui-radio class="radio" v-model="val" :disabled="isdisabled" value="3" @change="change"><span>兔子</span></ui-radio>
        </li>
        <li>
          <ui-radio class="radio" v-model="val" value="4" @change="change"><span>猪</span></ui-radio>
        </li>
      </ul>
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
