<template>
    <el-form ref="form" :num="address.random" v-show="address.isSetShow" :class="{'setActive':address.isSetActive}">
        <el-form-item>
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="address.label" :placeholder="address.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
                <span class="field-origin"  v-show="address.originLabel">(
                    <el-tooltip class="item" effect="dark" :content="address.originLabel" placement="right">
                        <span>{{address.originLabel}}</span>
                    </el-tooltip>)
                </span>
            </div>
            <span class="delete-icon" v-show="address.isDelete" @click="del"></span>
            <el-switch v-model="address.require" :active-text="address.requireText.active" :inactive-text="address.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-input v-model="address.placeholder" :placeholder="address.placeholder"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'w-address-set',
        props:{
            address: {
                type: Object,
                default: {}
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'address',
                    data: this.address
                });
            },
            changeData() {
                this.$emit('changRequire',this.address);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>