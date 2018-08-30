<template>
    <div :class="[{require: text.require},{active: text.isViewActive},'w-widget']"  type="text" v-show="text.isViewShow" :num="text.random">
        <mt-field :label="text.label" :placeholder="text.placeholder" class="text"></mt-field>
    </div>
</template>
<script>
    export default {
        name: 'w-text-view',
        props:{
            text: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>