<template>
  <b-container>
    <b-row>
      <NavProfile />
      <b-col>
        <div>
          <h1 class="mb-4">Избранный товар</h1>
          <FuncComponents
            v-if="Products.length > 0"
            :array="Products"
            :selected="true"
          />
          <base-title-info v-else text="нет избранных товаров" />
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
import BaseTitleInfo from "@/components/base/title/base-title-info";
export default {
  components: {
    BaseTitleInfo,
    NavProfile,
    FuncComponents,
    ModalImg,
    ModalBuy,
  },
  middleware: "CheckGuest",
  async fetch({ store }) {
    await store.dispatch("Selected/selected/_Selected");
  },
  head() {
    return {
      title: "Pantus избранные товары",
    };
  },
  computed: {
    Products() {
      return this.$store.getters["Selected/selected/GetSelected"];
    },
  },
};
</script>
