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
import ModalImg from "@/components/Modal/ProductImg";
import ModalBuy from "@/components/Modal/buyProduct";
import NavProfile from "@/components/Nav/Profile/index";
import FuncComponents from "@/components/Func/productRow";
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