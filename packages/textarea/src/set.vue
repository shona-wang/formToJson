<template>
    <el-form ref="form" :num="textarea.random" v-show="textarea.isSetShow" :class="{'setActive':textarea.isSetActive}">
        <el-form-item>
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="textarea.label" :placeholder="textarea.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
                <span class="field-origin"  v-show="textarea.originLabel">(
                    <el-tooltip class="item" effect="dark" :content="textarea.originLabel" placement="right">
                        <span>{{textarea.originLabel}}</span>
                    </el-tooltip>)
                </span>
            </div>
            <span class="delete-icon" v-show="textarea.isDelete" @click="del"></span>
            <el-switch v-model="textarea.require" :active-text="textarea.requireText.active" :inactive-text="textarea.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-input v-model="textarea.placeholder" :placeholder="textarea.placeholder"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'w-textarea-set',
        props:{
            textarea: {
                type: Object,
                default: {}
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'textarea',
                    data: this.textarea
                });
            },
            changeData() {
                this.$emit('changRequire',this.textarea);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>