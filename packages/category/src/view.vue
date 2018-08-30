<script>
    export default {
        name: 'w-category-view',
        props:{
            category: {
                type: Object,
                default: {}
            }
        },
        render(createElement){
            let self = this;
            let tplArr = [
                createElement('div',{
                    'class':{
                        category: true,
                        active: self.category.isViewActive,
                        isShow: self.category.isViewShow,
                        isHide: !self.category.isViewShow
                    },
                    attrs: {
                        num: self.category.random
                    }
                },[createElement('span',{
                    class:{
                        'category-line': true
                    }
                }),createElement('span',{
                     class:{
                        'category-title': true
                    }
                },self.category.label)]),
            ];
            this.category.children.map((child)=>{
                let obj = {};
                obj[child.type] = child.value;
                let drag = obj[child.type].isDrag == false ? false : true;
                let node = createElement('w-'+child.type+'-view',{
                    props: obj,
                    attrs: {
                        draggable: drag
                    }
                });
                tplArr.push(node);
            });
            return createElement('div',{
                'class':{
                    'w-widget': true
                },
                attrs: {
                    type: 'category',
                    num: self.category.random
                }
            },tplArr);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>