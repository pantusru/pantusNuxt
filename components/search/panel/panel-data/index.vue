<template>
  <div class="overflow">
       <Collapse
          v-for="(dataset, index) in data"
          :key="index"
          :dataset="dataset"
        />
  </div>
</template>

<script>
export default {
  props:["name", "data"],
}
</script>

