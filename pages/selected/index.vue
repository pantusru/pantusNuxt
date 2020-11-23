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
            :Selected="true"
          />
          <base-title-info
            v-else
            text="Нету избранных товаров"
          ></base-title-info>
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
  middleware: "CheckGuest",
  async fetch({ store }) {
    store.dispatch("Selected/selected/_Selected");
  },
  components: {
    BaseTitleInfo,
    NavProfile,
    FuncComponents,
    ModalImg,
    ModalBuy
  },
  computed: {
    Products() {
      return this.$store.getters["Selected/selected/GetSelected"];
    }
  }
};
</script>
