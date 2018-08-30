<template>
  <el-form ref="form" :class="[{require: radio.require},{active: radio.isViewActive},'w-widget']" :num="radio.random" v-show="radio.isViewShow" type="radio">
    <el-form-item :label="radio.label">
      <el-radio-group v-model="radio.checked">
        <el-radio v-for="(item,index) in radio.values" :key="index" :label="item.value">{{item.label}}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'w-radio-view',
    props:{
      radio: {
        type: Object,
        default: {}
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
