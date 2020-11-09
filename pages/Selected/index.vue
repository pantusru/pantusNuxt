<template>
  <b-container>
    <b-row>
        <NavProfile />
      <b-col>
        <div>
          <h1 class="mb-4">Избранный товар</h1>
          <FuncComponents :array="Products" :Selected="true" />
        </div>
      </b-col>
    </b-row>
    <ModalImg />
    <ModalBuy />
  </b-container>
</template>
<script>
import ModalImg from "@/components/modal/product-img";
import ModalBuy from "@/components/modal/buy-product";
import NavProfile from "@/components/nav/profile/index";
import FuncComponents from "@/components/func/product-rows-get";
export default {
  middleware:'CheckGuest',
  async fetch({ store }) {
    store.dispatch("Selected/selected/_Selected");
  },
  components: {
    NavProfile,
    FuncComponents,
    ModalImg,
    ModalBuy,
  },
  computed: {
    Products() {
      return this.$store.getters["Selected/selected/GetSelected"];
    },
  },
};
</script>
