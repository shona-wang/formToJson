<script>
    export default {
        data(){
            return {
                setAllData: []
            };
        },
        render(createElement){
            let self = this;
            return createElement('div',{},
            this.setAllData.map(function (val) {
                let obj = {};
                obj[val.type] = val.value;
                return createElement('w-'+val.type+'-set',{
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
                })
            }));
        },
        methods:{
            renderSet(data){
                this.setAllData = data;
            }
        }
    };
</script>