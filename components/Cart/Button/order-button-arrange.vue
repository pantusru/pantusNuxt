<template>
  <div>
    <template v-if="CartProduct.length > 0">
      <base-button text="Оформить заказ" v-if="!CheckUser" v-b-modal="'authorization'"></base-button>
      <base-button v-if="CheckUser">
        <nuxt-link to="/order" class="text-white link-decoration-none">
          Оформить заказ
        </nuxt-link>
      </base-button>
    </template>
  </div>
</template>
<script>
import BaseButton from "@/components/Base/base-button";
export default {
  name: "order-button-arrange",
  components: {BaseButton},
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
