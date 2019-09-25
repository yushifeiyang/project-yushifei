<template>
  <!--这里设置了选中后的radio样式类,和禁用后的样式类-->
  <label class="ui-radio" :class="{'checked':model==value,'disabled':disabled}" @click.prevent="updateVal(value)">
    <input type="radio" ref="radio" :value="value" :disabled="disabled" :checked="model==value">
    <slot></slot>
  </label>
</template>
<script>
export default {
  name: 'ui-radio',// radio组件名称
  model: {// 自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
    prop: 'model',
    event: 'change'
  },
  props: {
    value: { // radio的value属性
      type: [String,Number],
      require: true
    },
    model: { // 这里的model指的是上面定义的v-model的prop
      type: [String, Number],
      require: true
    },
    checked: { // 是否默认选中
      type: Boolean,
      default: false
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    }
  },
  mounted: function () { // 当dom渲染完成,判断组件是否默认选中
    if (this.checked === true)
      this.updateVal(this.value)
  },
  methods: {
    updateVal: function (val) { // 当用户点击radio时,触发change事件更新v-model
      this.$emit('change', val);
    }
  }
}
</script>
<style scoped>
.ui-radio{display: inline-block; padding:10px 20px; border: 1px solid #eee;}
.ui-radio input{display: none;}
.ui-radio.checked{border:1px solid #f00;}
</style>
