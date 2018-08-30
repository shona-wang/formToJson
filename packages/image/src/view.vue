<template>
    <div :class="[{require: image.require},{active: image.isViewActive},'w-widget']" v-show="image.isViewShow" :num="image.random" type="image">
        <div class="image">
            <div class="pic"><span>{{image.label}}</span></div>
            <p>{{image.placeholder}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'w-image-view',
        props:{
            image: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
 
</style>