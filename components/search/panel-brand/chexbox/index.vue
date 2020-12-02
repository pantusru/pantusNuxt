<template>
  <b-form-checkbox :value="source.id" class="mb-2 fz-5_5">
    {{ source.name }}
  </b-form-checkbox>
</template>

<script>
export default {
  name: "item-component",
  props: {
    index: {
      // index of current item
      type: Number,
    },
    source: {
      type: Object,
    },
  },
};
</script>
