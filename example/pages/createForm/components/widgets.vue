<template>
    <ul class="widget-page">
        <li v-for="(widget,index) in widgets" :key="index" :widget="widget.type" draggable="true" @dragstart="dragstart">
            {{widget.name}}
        </li>
    </ul>
</template>
<script>
import widgets from '../../../data/widgetsData.js';
export default {
  data() {
      return {
        widgets: widgets
      };
    },
    methods: {
      dragstart(event){
        let el = event.currentTarget,
            widget = el.getAttribute('widget');
        event.dataTransfer.setData("text", widget);
      }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">

</style>