<template>
    <el-form ref="form" :num="checkbox.random" v-show="checkbox.isSetShow" :class="{'setActive':checkbox.isSetActive}">
        <el-form-item label="">
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="checkbox.label" :placeholder="checkbox.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
            </div>
            <span class="delete-icon" v-show="checkbox.isDelete" @click="del"></span>
            <el-switch v-model="checkbox.require" :active-text="checkbox.requireText.active" :inactive-text="checkbox.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item v-for="(val,index) in checkbox.values" :key="index" >
            <el-input :placeholder="val.label" v-model="val.label" ></el-input>
            <span class="delete-icon" v-show="val.isDelete" :index="index" @click="delAtom"></span>
            <span class="add-icon" v-show="index == checkbox.values.length -1" :index="index" @click="addAtom"></span>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name:'w-checkbox-set',
        props:{
            checkbox: {
                type: Object,
                default: {}
            }
        },
        methods:{
            changeData() {
                this.$emit('changRequire',this.checkbox);
            },
            del(){
                this.$emit('del',{
                    type: 'checkbox',
                    data: this.checkbox
                });
            },
            delAtom(event){
                let el = event.target,
                    index = el.getAttribute('index');
                this.$emit('delAtom',{
                    index: index,
                    random: this.checkbox.random
                })
            },
            addAtom(event){
                 let el = event.target,
                    index = el.getAttribute('index');
                this.$emit('addAtom',{
                    index: index,
                    random: this.checkbox.random
                });
            }
        }
    };
</script>
