<template>
    <el-form ref="form" v-show="category.isSetShow" :class="{'setActive':category.isSetActive}" type='category' :num="category.random">
        <el-form-item>
            <el-input class="label name-msg" :placeholder="category.label" v-model="category.label"></el-input>
            <span class="delete-icon" @click="del" v-show="category.isDelete"></span>
        </el-form-item>
        
    </el-form>
</template>
<script>
    export default {
        name: 'category-set-tpl',
        props:{
            category: {
                type: Object
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'category',
                    data: this.category
                });
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>