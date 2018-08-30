<template>
    <el-form ref="form" :num="date.random" v-show="date.isSetShow" :class="{'setActive':date.isSetActive}">
        <el-form-item>
             <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="date.label" :placeholder="date.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
                <span class="field-origin"  v-show="date.originLabel">(
                    <el-tooltip class="item" effect="dark" :content="date.originLabel" placement="right">
                        <span>{{date.originLabel}}</span>
                    </el-tooltip>)
                </span>
            </div>
            <span class="delete-icon" v-show="date.isDelete" @click="del"></span>
            <el-switch v-model="date.require" :active-text="date.requireText.active" :inactive-text="date.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-input v-model="date.placeholder" :placeholder="date.placeholder"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'w-date-set',
        props:{
            date: {
                type: Object,
                default: {}
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'date',
                    data: this.date
                });
            },
            changeData() {
                this.$emit('changRequire',this.date);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>