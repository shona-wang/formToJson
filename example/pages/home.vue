<template>
  <div class="home-page">
    <h1>拖拽表单生成JSON数据</h1>
    <createForm @getTplData="getTplData"></createForm>
  </div>
</template>
<script>
import createForm from './createForm/createForm';
export default {
  components:{
    createForm
  },
  data(){
    return{
      mobileData:[]
    };
  },
  methods:{
    getTplData(data){
      this.mobileData = data;
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  
</style>
