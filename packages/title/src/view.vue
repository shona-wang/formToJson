<template>
  <div :class="[{active: title.isViewActive},'w-widget']" v-show="title.isViewShow" :num="title.random" type="title">
        <h1>{{title.label}}</h1>
  </div>
</template>
<script>
  export default {
    name: 'w-title-view',
    props:{
      title: {
        type: Object,
        default: {}
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>