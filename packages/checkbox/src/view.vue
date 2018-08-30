<template>
  <el-form ref="form" :class="[{require: checkbox.require},{active: checkbox.isViewActive},'w-widget']" :num="checkbox.random" v-show="checkbox.isViewShow" type="checkbox">
    <el-form-item :label="checkbox.label">
      <el-checkbox-group v-model="checkbox.checked">
        <el-checkbox v-for="(item,index) in checkbox.values" :key="index" :label="item.label" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name:'w-checkbox-view',
    props:{
      checkbox: {
        type: Object,
        default: {}
      }
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss">

</style>