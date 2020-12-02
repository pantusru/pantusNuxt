<template>
  <b-container>
    <h3>Корзина</h3>
    <b>
      Доступные способы доставки и оплаты вы сможете выбрать при оформлении
      заказа
    </b>
    <vTable v-if="CartLength !== 0" class="d-none d-lg-block" />
    <VBlogCart v-if="CartLength !== 0" class="d-flex d-lg-none" />
    <div v-if="CartLength === 0" class="mt-3">
      <base-title-info text="Корзина пустая"></base-title-info>
    </div>
    <vButton class="mt-3" v-if="CartActual === true && CartLength !== 0" />
    <CartButtonUpdate v-if="CartActual === false" />
  </b-container>
</template>
<script>
import vButton from "@/components/cart/button/order-button-arrange";
import CartButtonUpdate from "@/components/cart/button/cart-button-update";
import vTable from "@/components/table/table-cart-get";
import VBlogCart from "@/components/cart/blog/cart-row-get";
import BaseTitleInfo from "@/components/base/title/base-title-info";
export default {
  components: {
    BaseTitleInfo,
    vTable,
    vButton,
    VBlogCart,
    CartButtonUpdate,
  },
  computed: {
    CartLength() {
      return this.$store.getters["Cart/CartAll/GetLength"];
    },
    CartActual() {
      return this.$store.getters["Cart/CartAll/GetCartActual"];
    },
  },
  head() {
    return {
      title: "Pantus корзина",
    };
  },
};
</script>
