<template>
  <div>
    <base-button v-if="!CheckUser" text="Оформить заказ" @click="getModal()" />
    <!-- <base-button v-if="CheckUser"> -->
      <nuxt-link style="border-radius: 6px" v-if="CheckUser" to="/order" class="p-2 text-white link-decoration-none bg-danger _baseBnt">
        Оформить заказ
      </nuxt-link>
    <!-- </base-button> -->
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
