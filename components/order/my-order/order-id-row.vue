<template>
  <div class="row mt-3">
    <div class="col-3">{{ text }}</div>
    <div class="col-3">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "order-id-row",
  props: {
    text: { type: String },
    value: { type: String | Number },
  },
};
</script>

<style scoped></style>
