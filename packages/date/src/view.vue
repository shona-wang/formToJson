<template>
    <div :class="[{require: date.require},{active: date.isViewActive},'w-widget']" :num="date.random" v-show="date.isViewShow"  type="date">
        <mt-field :label="date.label" :placeholder="placeholder" class="date"></mt-field>
    </div>
</template>
<script>
    export default {
        name: 'w-date-view',
        props:{
            date: {
                type: Object,
                default: {}
            }
        },
        computed:{
            placeholder(){
                return this.date.placeholder ? this.date.placeholder : '';
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>