<template>
    <el-form ref="form" :num="radio.random" v-show="radio.isSetShow">
        <el-form-item>
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="radio.label" :placeholder="radio.label" class="el-input__inner">
                    <span class="line"></span>
                </div>
            </div>
            <span class="delete-icon" v-show="radio.isDelete" @click="del"></span>
            <el-switch v-model="radio.require" :active-text="radio.requireText.active" :inactive-text="radio.requireText.inactive" @change="changeData"></el-switch>
        </el-form-item>
        <el-form-item v-for="(val,index) in radio.values" :key="index" >
            <el-input :placeholder="val.label" v-model="val.label" ></el-input>
            <span class="delete-icon" v-show="val.isDelete" :index="index" @click="delAtom"></span>
            <span class="add-icon" v-show="index == radio.values.length -1" :index="index" @click="addAtom"></span>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name:'w-radio-set',
        props:{
            radio: {
                type: Object,
                default: {}
            }
        },
        methods:{
            changeData() {
                this.$emit('changRequire',this.radio);
            },
            del(){
                this.$emit('del',{
                    type: 'radio',
                    data: this.radio
                });
            },
            delAtom(event){
                let el = event.target,
                    index = el.getAttribute('index');
                this.$emit('delAtom',{
                    index: index,
                    random: this.radio.random
                })
            },
            addAtom(event){
                 let el = event.target,
                    index = el.getAttribute('index');
                this.$emit('addAtom',{
                    index: index,
                    random: this.radio.random
                });
            }
        },

    };
</script>
