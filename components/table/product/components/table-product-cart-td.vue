<template>
  <b-td :rowspan="lengthOffer + 1">
    <slot></slot>
  </b-td>
</template>

<script>
export default {
  name: "table-product-cart-td",

  props: {
    lengthOffer: {
      type: Number,
      request: true,
    },
  },
};
</script>
