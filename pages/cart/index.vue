<template>
  <b-container>
    <h3>Корзина</h3>
    <b>
      Доступные способы доставки и оплаты вы сможете выбрать при оформлении
      заказа
    </b>
    <div class="mt-3">
      <div class="row no-gutters align-items-center justify-content-end">
        <CartActiveAll class="mr-2" />
        <vButton v-if="CartActual === true && CartLength !== 0" />
        <CartButtonUpdate v-if="CartActual === false" />
      </div>
    </div>

    <template v-if="CartLength !== 0">
      <vTable class="d-none d-lg-block" />
      <VBlogCart class="d-flex d-lg-none" />
      <div class="text-right">Итого: {{ SymmaAll }} Р</div>
    </template>
    <div v-if="CartLength === 0" class="mt-3">
      <base-title-info text="Корзина пустая" />
    </div>
    <div class="mt-3">
      <div class="row no-gutters align-items-center justify-content-end">
        <CartActiveAll class="mr-2" />
        <vButton v-if="CartActual === true && CartLength !== 0" />
        <CartButtonUpdate v-if="CartActual === false" />
      </div>
    </div>
    <advantage />
  </b-container>
</template>
<script>
import vButton from "@/components/cart/button/order-button-arrange";
import CartButtonUpdate from "@/components/cart/button/cart-button-update";
import vTable from "@/components/table/table-cart-get";
import VBlogCart from "@/components/cart/blog/cart-row-get";
import BaseTitleInfo from "@/components/base/title/base-title-info";
import Advantage from "@/components/home/advantage";
import CartActiveAll from "~/components/cart/cart-active/cart-active-all";
export default {
  components: {
    CartActiveAll,
    Advantage,
    BaseTitleInfo,
    vTable,
    vButton,
    VBlogCart,
    CartButtonUpdate,
  },
  head() {
    return {
      title: `Корзина список товара`,
      meta: [
        {
          name: "description",
          content: ``,
        },
        {
          name: "keywords",
          content: ``,
        },
      ],
    };
  },
  computed: {
    SymmaAll() {
      return this.$store.getters["Cart/CartAll/GetSymmaAll"];
    },
    CartLength() {
      return this.$store.getters["Cart/CartAll/GetLength"];
    },
    CartActual() {
      return this.$store.getters["Cart/CartAll/GetCartActual"];
    },
  },
};
</script>
