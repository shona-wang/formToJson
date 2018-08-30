<template>
    <div class="create-form-page">
        <div class="widgets-box">
            <form-widgets></form-widgets>
        </div>
        <div class="view-box">
            <form-view ref='formView' @changeSetShow="changeSetShow" @changeStep="changeStep" @getTplData="getTplData"></form-view>
        </div>
        <div class="set-box">
            <form-set ref='formSet' @del="del" @changRequire="changRequire" @delAtom="delAtom" @addAtom="addAtom"></form-set>
        </div>
    </div>
</template>
<script>
import widgets from './components/widgets';
import view from './components/view';
import set from './components/set';
export default {
    components:{
        'form-widgets':widgets,
        'form-view':view,
        'form-set':set
    },
    data(){
        return{
        
        };
    },
    methods:{
        changeSetShow(data){
            this.$refs.formSet.renderSet(data);
        },
        del(data){
            if(data.type == 'category'){
                this.$refs.formView.delContainer(data);
            }else{
                this.$refs.formView.delField(data)
            }
        },
        changRequire(data){
            this.$refs.formView.setData(data);
        },
        delAtom(data){
            this.$refs.formView.delAtom(data);
        },
        addAtom(data){
            this.$refs.formView.addAtom(data);
        },
        changeStep(data){
            this.$emit('changeStep',data);
        },
        getTplData(data){
            this.$emit('getTplData',data);
        }
    }
}
</script>
