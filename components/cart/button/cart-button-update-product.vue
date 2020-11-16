<template>
  <div>
    <base-button @click="UpdateProduct"><b-icon-arrow-repeat/></base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";

export default {
  name: "cart-button-update-product",
  components: {BaseButton},
  props: {
    index: {}
  },
  methods: {
    async UpdateProduct() {
      console.log(this.$store.getters["Cart/CartAll/GetCartProduct"][this.index]);
      // await Запрос на изменение товара
      this.$store.commit("Cart/CartAll/SetCartCheckCount", {
        index: this.index,
        value: false,
      });
      let count = this.GetCartUpdateCount - 1;
      this.$store.commit("Cart/CartAll/SetCartUpdateCount", count);
      if(this.GetCartUpdateCount === 0){
        this.$store.commit("Cart/CartAll/SetCartActual");
      }
    },
  },
  computed:{
    GetCartUpdateCount(){
      return this.$store.getters["Cart/CartAll/GetCartUpdateCount"]
    }
  }
}
</script>

<style>

</style>
