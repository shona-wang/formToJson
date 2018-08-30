<template>
    <el-form ref="form" :num="tree.random" v-show="tree.isSetShow" :class="{'setActive':tree.isSetActive}">
        <el-form-item>
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="tree.label" :placeholder="tree.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
                <span class="field-origin"  v-show="tree.originLabel">(
                    <el-tooltip class="item" effect="dark" :content="tree.originLabel" placement="right">
                        <span>{{tree.originLabel}}</span>
                    </el-tooltip>)
                </span>
            </div>
            <span class="delete-icon" v-show="tree.isDelete" @click="del"></span>
            <el-switch v-model="tree.require" :active-text="tree.requireText.active" :inactive-text="tree.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-input v-model="tree.placeholder" :placeholder="tree.placeholder"></el-input>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'w-tree-set',
        props:{
            tree: {
                type: Object,
                default: {}
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'tree',
                    data: this.tree
                });
            },
            changeData() {
                this.$emit('changeData',this.tree);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>