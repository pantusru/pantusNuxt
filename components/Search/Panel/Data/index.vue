<template>
  <div class="overflow">
       <Collapse
          :dataset="data.slice(0,5)"/>
        <!--  ОСтальные   зАписей показывающиеся при клике -->
        <b-collapse :id="name">
          <Collapse
            :dataset="data.slice(5)" />
        </b-collapse>
  </div>
</template>

<script>
import Collapse from "../Chexbox/Collapse"
export default {
  props:["name", "data"],
  components: {
    Collapse,
  },
}
</script>

<style>

</style>