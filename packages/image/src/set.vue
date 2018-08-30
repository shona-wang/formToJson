<template>
    <el-form ref="form" :num="image.random" v-show="image.isSetShow" type="image" :class="{'setActive':image.isSetActive}">
        <el-form-item>
            <div class="pic"><span>
                <el-input v-model="image.label" :placeholder="image.label"></el-input>
            </span></div>
        </el-form-item>
        <el-form-item>
            <el-input v-model="image.placeholder" :placeholder="image.placeholder"></el-input>
            <span class="delete-icon" v-show="image.isDelete" @click="del"></span>
            <el-switch v-model="image.require" :active-text="image.requireText.active" :inactive-text="image.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'w-image-set',
        props:{
            image: {
                type: Object,
                default: {}
            }
        },
        methods:{
            changeData() {
                this.$emit('changeData',this.image);
            },
            del(){
                this.$emit('del',{
                    type: 'image',
                    data: this.image
                });
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>