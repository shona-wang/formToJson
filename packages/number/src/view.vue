<template>
    <div :class="[{require: number.require},{active: number.isViewActive},'w-widget']"  type="text" v-show="number.isViewShow" :num="number.random">
        <mt-field :label="number.label" :placeholder="number.placeholder" class="text"></mt-field>
    </div>
</template>
<script>
    export default {
        name: 'w-number-view',
        props:{
            number: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>