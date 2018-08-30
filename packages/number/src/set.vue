<template>
    <el-form ref="form" :num="number.random" v-show="number.isSetShow" :class="{'setActive':number.isSetActive}">
        <el-form-item>
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="number.label" :placeholder="number.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
                <span class="field-origin" v-show="number.originLabel">(
                    <el-tooltip class="item" effect="dark" :content="number.originLabel" placement="right">
                        <span>{{number.originLabel}}</span>
                    </el-tooltip>)
                </span>
            </div>
            <span class="delete-icon" v-show="number.isDelete" @click="del"></span>
            <el-switch v-model="number.require" :active-text="number.requireText.active" :inactive-text="number.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-input v-model="number.placeholder" :placeholder="number.placeholder"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'w-number-set',
        props:{
            number: {
                type: Object,
                default: {}
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'number',
                    data: this.number
                });
            },
            changeData() {
                this.$emit('changRequire',this.number);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>