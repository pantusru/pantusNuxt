<template>
  <b-container>
    <h3>Корзина</h3>
    <b>
      Доступные способы доставки и оплаты вы сможете выбрать при оформлении
      заказа
    </b>
    <vTable class="d-none d-lg-block" v-if="CartLength !== 0" />
    <VBlogCart class="d-flex d-lg-none" v-if="CartLength !== 0" />
    <div class="mt-3" v-if="CartLength === 0">
      <base-title-info text="Корзина пустая"></base-title-info>
    </div>
    <vButton class="mt-3" v-if="CartActual === true" />
    <CartButtonUpdate v-if="CartActual === false" />
  </b-container>
</template>

<script>
import vButton from "@/components/cart/button/order-button-arrange";
import CartButtonUpdate from "@/components/cart/button/cart-button-update";
// import Modal from "@/components/modal/authorization";
import vTable from "@/components/table/table-cart-get";
import VBlogCart from "@/components/cart/blog/cart-row-get";
import BaseTitleInfo from "@/components/base/title/base-title-info";
export default {
  head() {
    return {
      title: "Pantus корзина"
    };
  },
  components: {
    BaseTitleInfo,
    vTable,
    // Modal,
    vButton,
    VBlogCart,
    CartButtonUpdate
  },
  computed: {
    CartLength() {
      return this.$store.getters["Cart/CartAll/GetLength"];
    },
    CartActual() {
      return this.$store.getters["Cart/CartAll/GetCartActual"];
    }
  }
};
</script>
