
<script>
import adaptData from '../../../common/adapt.js'
import tplDialog from './tplDataDialog'
export default {
    components:{
        'tpl-dialog':tplDialog
    },
    data() {
      return {
          viewAllData: adaptData.formData,
          dragEl:{},
          dialogVisible: false
      };
    },
    methods: {
        dragenter(ev){
            let el = ev.target;
            el.style.backgroundColor='#f9fafc';
        },
        drop(ev){
            let type = ev.dataTransfer.getData('text');
            adaptData.add(type);
        },
        dragover(ev){
            ev.preventDefault(); 
            return true;
        },
        dragleave(ev){
            let el = ev.target;
        },
        dragSortStart(ev){
            let el = ev.target,
                type = el.getAttribute('type'),
                num = el.getAttribute('num');
            this.dragEl.random = num;
            this.dragEl.type = type;
        },
        dragSortEnter(ev){
            let el = ev.target,
                key = el.getAttribute('num');
            if(this.dragEl.random != key){
                el.classList.add('border');          
            }
        },
        dragSortLeave(ev){
            var el = ev.target,
                key = el.getAttribute('num');
            if(this.dragEl.random != key){
                el.classList.remove('border');          
            }
        },
        dragSortDrop(ev){
            let type = ev.dataTransfer.getData('text'),
                el = ev.target,
                key = el.getAttribute('num');
            if(this.dragEl.random != key){ // 源和目标不能为同一个
                ev.stopPropagation();
                el.classList.remove('border');  
                // 从组建库拖拽过来
                if(type){
                    adaptData.add(type,key);
                } else {// 上下拖拽排序
                    adaptData.sort(this.dragEl.type,this.dragEl.random,key);
                }
                this.dragEl.random = '';
            }
        },
        delContainer(param){
            let pos = adaptData.position(param.data.random),
                children = adaptData.formData[pos.parentKey].value.children;
            if (children.length > 0) {
                    this.$confirm('此类下面的字段都将删除，确定删除?','', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    adaptData.delContainer(param.type,param.data.random);
                });
            }else{
                adaptData.delContainer(param.type,param.data.random);
            }
        },
        delField(param){
            adaptData.delAll(param.type,param.data.random);
        },
        delAtom(param){
            adaptData.delAtom(param.random,param.index);
        },
        addAtom(param){
            adaptData.addAtom(param.random,param.index);
        },
        setData(param){
            adaptData.set(param.random,param);
        }
    },
    render(createElement){
        let self = this,tplArr = [],widgetsTpl = [],
            tipTpl = createElement('p',{
                'class': {
                    'tip': true,
                    'hide': self.viewAllData.length
                }
            },['将左侧的组件拖拽到此处,自定义模板']),
            btnTpl = createElement('el-button',{
                attrs:{
                    type: 'primary'
                },
                class:{
                    'render-data-btn': true
                },
                nativeOn:{
                    click: ()=>{
                        self.dialogVisible = true;
                    }
                }
            },['查看生成的JSON数据']),
            tplDialog = createElement('tpl-dialog',{
                props:{
                    dialogVisible: self.dialogVisible,
                    formData: self.viewAllData
                },
               on:{
                   hide: ()=>{
                       self.dialogVisible = false;
                   }
               }
            });
        tplArr.push(tipTpl);
        // 如果有tplData数据就进行渲染
        if(this.viewAllData.length){
            this.viewAllData.map(function (widget) {
                let obj = {};
                obj[widget.type] = widget.value;
                let drag = obj[widget.type].isDrag == false ? false : true;
                tplArr.push(createElement('w-'+widget.type+'-view',{
                    props: obj,
                    attrs: {
                        draggable: drag
                    },
                    nativeOn: {
                        click(ev){
                            ev.stopPropagation();
                            let num = ev.target.getAttribute('num') || ev.target.parentNode.getAttribute('num');
                            adaptData.show(num);
                        },
                        dragstart: self.dragSortStart,
                        dragenter: self.dragSortEnter,
                        dragleave: self.dragSortLeave,
                        drop: self.dragSortDrop,
                        dragover: self.dragover
                    }
                }));
            });
        }
        tplArr.push(btnTpl);
        tplArr.push(tplDialog);
        return createElement('div',{
            'class': {
                'view-page': true
            },
            on:{
                drop: this.drop,
                dragover: this.dragover,
            }
        },tplArr);
    },
    updated(){
        this.$emit('changeSetShow',this.viewAllData);
    },
    mounted(){
        this.$emit('changeSetShow',this.viewAllData);
    },
}
</script>
<style lang="scss" rel="stylesheet/scss">

</style>