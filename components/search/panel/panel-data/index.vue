<template>
  <div class="overflow">
       <Collapse
          v-for="(dataset, index) in data"
          :key="index"
          :dataset="dataset"
        />
        <!--  ОСтальные   зАписей показывающиеся при клике -->
        <!-- <b-collapse :id="name">
          <Collapse
           v-for="(dataset, index) in data.slice(5)"
           :key="index"
            :dataset="dataset" />
        </b-collapse> -->
  </div>
</template>

<script>
import Collapse from "@/components/search/panel/chexbox/collapse"
// import Collapse from "../Chexbox/Collapse"
export default {
  props:["name", "data"],
  components: {
    Collapse,
  },
}
</script>

