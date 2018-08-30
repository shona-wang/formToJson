<template>
    <div :class="[{require: tree.require},{active: tree.isViewActive},'w-widget']" v-show="tree.isViewShow" :num="tree.random" type="tree">
        <div class="tree">
            <label class="widgets-label">{{tree.label}}</label>
            <div class="val">
                {{tree.placeholder}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'w-tree-view',
        props:{
            tree: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  
</style>