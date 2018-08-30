<template>
    <el-form ref="form" :num="text.random" v-show="text.isSetShow" :class="{'setActive':text.isSetActive}">
        <el-form-item>
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="text.label" :placeholder="text.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
                <span class="field-origin" v-show="text.originLabel">(
                    <el-tooltip class="item" effect="dark" :content="text.originLabel" placement="right">
                        <span>{{text.originLabel}}</span>
                    </el-tooltip>)
                </span>
            </div>
            <span class="delete-icon" v-show="text.isDelete" @click="del"></span>
            <el-switch v-model="text.require" :disabled="Boolean(text.isSetDisabled)" :active-text="text.requireText.active" :inactive-text="text.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-input v-model="text.placeholder" :placeholder="text.placeholder"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'w-text-set',
        props:{
            text: {
                type: Object,
                default: {}
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'text',
                    data: this.text
                });
            },
            changeData() {
                this.$emit('changRequire',this.text);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>