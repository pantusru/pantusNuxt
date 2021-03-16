<template>
  <div class="overflow">
    <Collapse
      v-for="(dataset, index) in data"
      :key="index"
      :dataset="dataset"
    />
    <div v-if="data.length !== 0">Нет результатов</div>
  </div>
</template>

<script>
export default {
  props: ["name", "data"],
};
</script>
