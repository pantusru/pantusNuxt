<template>
  <b-td :rowspan="rowspan">
    <slot></slot>
  </b-td>
</template>

<script>
export default {
  name: "table-product-cart-td",
  data() {
    return {
      rowspan: 1
    };
  },
  props: {
    lengthOffer: {
      type: Number,
      request: true
    }
  },
  created() {
    // if (this.lengthOffer !== 1) {
    this.rowspan = this.lengthOffer + 1;
    // }
  }
};
</script>
