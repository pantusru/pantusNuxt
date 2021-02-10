<template>
  <div>
    <base-button v-if="!CheckUser" @click="getModal()" text="Оформить заказ" />
    <base-button v-if="CheckUser">
      <nuxt-link to="/order" class="text-white link-decoration-none">
        Оформить заказ
      </nuxt-link>
    </base-button>
  </div>
</template>
<script>
import BaseButton from "@/components/base/button/base-button";
export default {
  name: "OrderButtonArrange",
  components: { BaseButton },
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
  methods: {
    getModal() {
      // this.$nextTick(() => {
      this.$bvModal.show("authorization");
      this.$store.commit("SetAuthorizationOrder", true);
      // });
    },
  },
};
</script>
