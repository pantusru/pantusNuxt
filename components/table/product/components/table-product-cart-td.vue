<template>
  <b-td :rowspan="offer">
    <slot />
  </b-td>
</template>

<script>
export default {
  name: "TableProductCartTd",
  props: {
    lengthOffer: {
      type: Number,
      request: true,
    },
  },
  data() {
    return {
      offer: 0,
    };
  },
  created() {
    if (this.lengthOffer === 0) {
      this.offer = 2;
    } else {
      this.offer = this.lengthOffer + 1;
    }
  },
};
</script>
