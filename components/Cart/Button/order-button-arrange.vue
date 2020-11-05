<template>
  <div>
    <template v-if="CartProduct.length > 0">
      <b-button v-if="!CheckUser" :class="AddClass" v-b-modal="'authorization'"
        >Оформить заказ</b-button
      >
      <b-button v-if="CheckUser" :class="AddClass">
        <nuxt-link to="/order" class="text-white link-decoration-none"
          >Оформить заказ</nuxt-link
        >
      </b-button>
    </template>
  </div>
</template>
<script>
export default {
  name: "order-button-arrange",
  data() {
    return {
      check: null,
      AddClass: "bg-danger border-0",
    };
  },
  computed: {
    CheckUser() {
      return this.$store.getters["User/CheckUser"];
    },
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
};
</script>
