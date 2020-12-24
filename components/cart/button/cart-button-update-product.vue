<template>
  <div>
    <base-button @click="UpdateProduct"><b-icon-arrow-repeat /></base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";

export default {
  name: "CartButtonUpdateProduct",
  components: { BaseButton },
  props: {
    linkOffer: {
      type: Object,
    },
  },
  computed: {
    GetCartUpdateCount() {
      return this.$store.getters["Cart/CartAll/GetCartUpdateCount"];
    },
  },
  methods: {
    async UpdateProduct() {
      // await Запрос на изменение товара
      const data = await this.$store.dispatch("Cart/axios/_CartProductPut", {
        id: this.LinkOffer.id,
        quantity: this.count,
      });
      if (this.GetCartUpdateCount === 0) {
        this.$store.commit("Cart/CartAll/SetCartActual");
      }
    },
  },
};
</script>

<style></style>
