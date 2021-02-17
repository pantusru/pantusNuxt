<template>
  <div class="row mt-3">
    <div class="col-md-3 col-12">{{ text }}</div>
    <div class="col-md-3 col-12">{{ value }}</div>
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
