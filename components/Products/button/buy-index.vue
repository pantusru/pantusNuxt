<template>
  <div>
    <div class="d-lg-flex d-none justify-content-end">
      <base-button
        text="Купить"
        @click="ModalProduct()"
        v-if="!userBasket"
        class="py-1 px-2">
        </base-button>
        <base-button
          v-else-if="userBasket"
          :text="text"
          @mouseout="text = 'В корзине'"
          @mouseover="text = 'Добавить'"
          @click="ModalProduct()"
          class="text-danger py-1 px-1 border-danger bg-light bg-link-danger link-light"
        ></base-button>
      <b-button v-if="userBasket"  @click="deleteCartProduct" class="border-0 text-danger ml-1 py-0  px-1 bg-transparent">X
      </b-button>
    </div>
    <div class="d-flex d-lg-none justify-content-end">
      <base-button
        @click="ModalProduct()"
        v-if="!userBasket"
        class="py-1 px-2">
        <b-icon-cart-4></b-icon-cart-4>
      </base-button>
      <base-button
        v-else-if="userBasket"
        @click="ModalProduct()"
        class="text-danger py-1 px-1 border-danger bg-light bg-link-danger link-light"
      >
        <b-icon-cart-4></b-icon-cart-4>
      </base-button>
      <b-button v-if="userBasket"  @click="deleteCartProduct" class="border-0 text-danger ml-1 py-0  px-1 bg-transparent">X
      </b-button>
    </div>
  </div>
</template>

<script>
// import mixitBuy from "@/mixins/Modal/buyProduct"
import BaseButton from "@/components/base/base-button";

export default {
  components: {BaseButton},
  // mixins:[mixitBuy],
  data() {
    return {
      /**
       * @type {Boolean}
       * @property Есть ли товар в корзине
       */
      userBasket: false,
      /**
       * @type {String}
       * @property Есть ли товар в корзине
       */
      text: "В корзине",
    }
  },
  props: {
    /**
     * @param {Object} LinkOffer - ссылка на предложения продукта
     */
    LinkOffer: {},
    /**
     * @param {Number} LinkProduct - ссылка на продукт
     */
    LinkProduct: {},
    /**
     * @param {Number} NameGettersModal - Названия геттера для отображеия товара в modal buy
     */
  },
  methods: {
    // Удалить товар с корзины
    deleteCartProduct() {
      let index = this.CartProduct.findIndex(s => s.ProductOffer.id == this.LinkOffer.id);
      this.userBasket = false;
      this.$store.commit("Cart/CartAll/DeleteCartProduct", index);
    },
    /**
     * @function ModalProduct - Вызывает мутации для отображение модального окна и открывает модальное окно
     */
    ModalProduct() {
      this.$store.commit("Modal/SetModaBuy", {
        LinkProduct: this.LinkProduct,
        LinkOffer: this.LinkOffer,
        CheckCart: this.userBasket,
      });
      this.$bvModal.show('buy');
    },
  },
  watch: {
    // Следим за  добавление товара в корзину
    CartProduct() {
      if (this.CartProduct.length > 0) {
        if (this.CartProduct[0].ProductOffer.id === this.LinkOffer.id) {
          this.userBasket = true;
        }
      }
    },
  },
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
  created() { // ПРОВЕРКА ЕСЛИ ЛИ ТОВАР В КОРЗИНЕ
    for (const key in this.CartProduct) {
      if (this.CartProduct[key].ProductOffer.id === this.LinkOffer.id) {
        this.userBasket = true;
        break;
      }
    }
  }
}
</script>

