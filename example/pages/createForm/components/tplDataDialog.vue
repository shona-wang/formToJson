<template>
    <el-dialog
        custom-class="tpl-dialog-page"
        title="模板数据"
        :visible.sync="showDia"
        width="80%"
        @close="hide"
       >
        <pre v-html="data"></pre>
    </el-dialog>
</template>
<script>
import adaptData from '../../../common/adapt.js';
export default{
    data(){
        return {
            data: '',
            showDia: false
        };
    },
    props:{
        dialogVisible:{
            default: false,
            type:Boolean
        },
        formData:{
            default:[],
            type:Array
        }
    },
    watch:{
        dialogVisible(newVal,oldVal){
            if(newVal){
                this.data = this.syntaxHighlight(this.formData);
            }
            this.showDia = newVal;
        }
    },
    methods:{
        syntaxHighlight(json) {
            if (typeof json != 'string') {
                json = JSON.stringify(json, undefined, 2);
            }
            json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
        },
        hide(){
            this.showDia = false;
            this.$emit('hide');
        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">

</style>