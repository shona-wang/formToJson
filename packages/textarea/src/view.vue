<template>
    <div :class="[{require: textarea.require},{active: textarea.isViewActive},'w-widget']"  v-show="textarea.isViewShow" type="textarea" :num="textarea.random">
        <mt-field :label="textarea.label" :placeholder="textarea.placeholder" type="textarea" class="textarea" rows="4"></mt-field>
    </div>
</template>
<script>
    export default {
        name: 'w-textarea-view',
        props:{
            textarea: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
 
</style>