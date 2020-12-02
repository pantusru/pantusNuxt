<template>
  <b-modal :id="'buy'" @show="ShowModal">
    <template #modal-header="{ close }">
      <h5>Товар будет добавлен в корзину</h5>
      <b-button
        class="font-weight-bolder"
        variant="outline-danger"
        @click="close()"
      >
        X
      </b-button>
    </template>
    <div v-if="LinkProducts != undefined">
      <div class="mb-2">
        <div><b>Название:</b></div>
        <div>{{ LinkProducts.name }}</div>
      </div>
      <div class="mb-2">
        <div><b>Артикул:</b></div>
        <div>{{ LinkProducts.sku.original }}</div>
      </div>
      <div class="mb-2">
        <div><b> Цена:</b></div>
        <div>{{ LinkOffer.prices }} Р</div>
      </div>
      <div class="mb-2">
        <div><b> Кратность:</b></div>
        <div>{{ LinkOffer.multiplicity }}</div>
      </div>
      <div class="mb-2">
        <div class="mb-2"><b> Кол-во, шт:</b></div>
        <VInput
          @Count="SetCount"
          :AddClassForm="'col-6 col-md-4'"
          :CountProps="count"
          :multiplicity="LinkOffer.multiplicity"
        />
      </div>
      <div class="mb-2">
        <div><b> Стоимость:</b></div>
        <div>{{ stoimost }} Р</div>
      </div>
    </div>
    <template #modal-footer="">
      <base-button class="py-1 px-2" @click="buy" text="Купить"></base-button>
    </template>
  </b-modal>
</template>

<script>
import VInput from "@/components/products/input/product-input-count";
import BaseButton from "@/components/base/button/base-button";

export default {
  name: "modal-buy-product",
  data() {
    return {
      close: false,
      count: "",
      CartProduct: undefined,
    };
  },
  methods: {
    ShowModal() {
      this.CartProduct = this.$store.getters["Cart/CartAll/GetCartProductId"](
        this.LinkOffer.id
      )[0];
      if (this.CheckCart === true) {
        // Есть в корзине
        this.count = this.CartProduct.Count;
      } else {
        // Нет в корзине
        this.count = this.LinkOffer.multiplicity;
      }
    },
    SetCount(Count) {
      // Emit
      this.count = Count.Count;
    },
    // Кнопка купить
    buy() {
      let Index = this.$store.getters[
        "Cart/CartAll/GetCartProduct_offersIndex"
      ](this.LinkOffer.id);
      if (this.CheckCart === false) {
        //Добавить товар в корзину
        let data = {};
        data.Count = this.count;
        data.ProductOffer = this.LinkOffer;
        data.ProductCard = this.LinkProducts;
        data.checkCount = false;
        this.$store.commit("Cart/CartAll/PushCartProduct", data);
        // this.$bvModal.hide('buy');
      } else {
        // ИЗМЕНИТЬ КОЛИЧЕСТВО ТОВАРА В КОРЗИНЕ
        this.$store.commit("Cart/CartAll/SetCountProduct", {
          index: Index,
          value: this.count,
        });
      }
      this.$bvModal.hide("buy");
    },
  },
  components: {
    BaseButton,
    VInput,
  },
  computed: {
    stoimost() {
      return (this.count * this.LinkOffer.prices).toFixed(2);
    },
    LinkProducts() {
      return this.$store.getters["Modal/GetModaBuyLinkProduct"];
    },
    LinkOffer() {
      return this.$store.getters["Modal/GetModaBuyLinkOffer"];
    },
    CheckCart() {
      return this.$store.getters["Modal/GetCheckCart"];
    },
  },
};
</script>
