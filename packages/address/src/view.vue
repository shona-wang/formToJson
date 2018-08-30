<template>
    <div :class="[{require: address.require},{active: address.isViewActive},'w-widget']" v-show="address.isViewShow" :num="address.random" type="address">
        <div class="address">
            <label class="widgets-label">{{address.label}}</label>
            <div class="val">
                {{address.placeholder}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'w-address-view',
        props:{
            address: {
                type: Object,
                default: {}
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  
</style>