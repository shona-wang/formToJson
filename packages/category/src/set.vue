<script>
import tpl from './setTpl';
export default {
    name: 'w-category-set',
    components: {
        'category-set-tpl':tpl
    },
    props:{
        category: {
            type: Object,
            default: {}
        }
    },
    render(createElement){
        let self = this;
        let tplArr = [
            createElement('category-set-tpl',{
                props: {
                    'category':self.category
                },
                on:{
                    del:(data)=>{
                        self.$emit('del',data);
                    }
                }
            })
        ];
        this.category.children.map((child)=>{
            let obj = {};
            obj[child.type] = child.value;
            let node = createElement('w-'+child.type+'-set',{
                props: obj,
                on:{
                    del:(data)=>{
                        self.$emit('del',data);
                    },
                    changRequire:(data)=>{
                        self.$emit('changRequire',data);
                    },
                    delAtom:(data)=>{
                        self.$emit('delAtom',data);
                    },
                    addAtom:(data)=>{
                        self.$emit('addAtom',data);
                    }
                }
            });
            tplArr.push(node);
        });
        return createElement('div',{},tplArr);
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
    
</style>