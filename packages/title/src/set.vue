<template>
    <el-form ref="form" :num="title.random" v-show="title.isSetShow" :class="{'setActive':title.isSetActive}">
        <el-form-item>
            <div class="name-msg">
                <div class="label el-input">
                    <input type="text" autocomplete="off" v-model="title.label" :placeholder="title.label" class="el-input__inner">
                </div>
            </div>
            <span class="delete-icon" v-show="title.isDelete" @click="del"></span>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name:'w-title-set',
        props:{
            title: {
                type: Object,
                default: {}
            }
        },
        methods:{
            del(){
                this.$emit('del',{
                    type: 'title',
                    data: this.title
                });
            }
        }
    };
</script>