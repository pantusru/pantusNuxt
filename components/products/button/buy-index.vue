<template>
  <div>
    <!--  Кнопка купить если товара нет в корзине   -->
    <div class="d-lg-flex d-none justify-content-end">
      <base-button
        v-if="!userBasket"
        text="Купить"
        class="py-1 px-2"
        @click="ModalProduct()"
      />
      <!--  Кнопка купить если товар в корзине   -->
<!--      <base-button-->
<!--        v-else-if="userBasket"-->
<!--        :text="text"-->
<!--        class="text-danger py-1 px-1 border-danger bg-light bg-link-danger link-light"-->
<!--        @mouseout="text = 'В корзине'"-->
<!--        @mouseover="text = 'Добавить'"-->
<!--        @click="ModalProduct()"-->
<!--      />-->

      <b-button
        variant="outline-danger"
        v-else-if="userBasket"
        class="py-1 px-1"
        @click="deleteCartProduct"
        style="font-size: 12px;"
      >Удалить</b-button>

<!--      <b-button-->
<!--        v-if="userBasket"-->
<!--        class="border-0 text-danger ml-1 py-0 px-0 bg-transparent"-->
<!--        @click.once="deleteCartProduct"-->
<!--        >X-->
<!--      </b-button>-->
    </div>
    <!--  Кнопка купить если товара нет в корзине мобильная версия  -->
    <div class="d-flex d-lg-none justify-content-end">
      <base-button v-if="!userBasket" class="py-1 px-2" @click="ModalProduct()">
        <b-icon-cart-4 />
      </base-button>
      <!--  Кнопка купить если товар в корзине мобильная версия   -->
      <base-button
        v-else-if="userBasket"
        class="text-danger py-1 px-1 border-danger bg-light bg-link-danger link-light"
        @click="ModalProduct()"
      >
        <b-icon-cart-4 />
      </base-button>
      <b-button
        v-if="userBasket"
        class="border-0 text-danger ml-1 py-0 px-1 bg-transparent"
        @click.once="deleteCartProduct"
        >X
      </b-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";

export default {
  name: "BuyButton",
  components: { BaseButton },
  props: {
    /**
     * @param {Object} LinkOffer - ссылка на предложения продукта
     */
    LinkOffer: {},
    /**
     * @param {Number} LinkProduct - ссылка на продукт
     */
    LinkProduct: {},
  },
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
      /**
       * @type {Number| String}
       * IdCartProduct если товар добавлен в корзину
       */
      CartId: undefined,
    };
  },
  computed: {
    CartProduct() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
  watch: {
    // Следим за  изменение  корзины
    CartProduct() {
      this.checkProductCart();
      // if (this.CartProduct.length > 0) {
      //   // Добавление товара в корзину
      //   for (const keyOffer in this.CartProduct[0].productOffer) {
      //     if (
      //       this.CartProduct[0].productOffer[keyOffer].id === this.LinkOffer.id
      //     ) {
      //       this.userBasket = true;
      //       this.CartId = this.CartProduct[0].productOffer.id;
      //       break;
      //     }
      //   }
      // } else if (this.CartProduct.length === 0) {
      //   // Корзина пустая reset
      //   this.resetAll();
      // }
      // if (this.CartId !== undefined) {
      //   // Этот товар есть в корзине
      //   for (const key in this.CartProduct) {
      //     if (this.CartProduct[key].CartProduct.id === this.LinkProduct.id) {
      //       // Товар есть в корзине
      //       if (
      //         this.CartProduct[key].findIndex(
      //           data => data.productOffer.id === this.CartId
      //         ) === -1
      //       ) {
      //         this.resetAll();
      //       }
      //     }
      //   }
      // }
    },
  },
  created() {
    // ПРОВЕРКА ЕСЛИ ЛИ ТОВАР В
    this.checkProductCart();
  },
  methods: {
    checkProductCart() {
      this.userBasket = false;
      for (const key in this.CartProduct) {
        if (this.CartProduct[key].ProductCard.id === this.LinkProduct.id) {
          for (const offerKey in this.CartProduct[key].productOffer) {
            if (
              this.CartProduct[key].productOffer[offerKey].id ===
              this.LinkOffer.id
            ) {
              this.userBasket = true;
              this.CartId = this.CartProduct[key].productOffer.id;
              return;
            }
          }
        }
      }
    },
    resetAll() {
      this.userBasket = false;
      this.CartId = undefined;
    },
    // Удалить товар с корзины
    async deleteCartProduct() {
      // for (const key in this.CartProduct) {
      const data = await this.$store.dispatch(
        "Cart/axios/_CartProductDelete",
        this.LinkOffer.id
      );
      this.$store.commit("Cart/CartAll/SetCartProduct", data);

      // if (this.CartProduct[key].ProductCard.id === this.LinkProduct.id) {
      //   const index = this.CartProduct[key].productOffer.findIndex(
      //     s => s.id === this.LinkOffer.id
      //   );
      //   this.$store.dispatch(
      //     "Cart/CartAll/DeleteCartProduct",
      //     this.LinkOffer.id
      //   );
      //   // await this.$store.dispatch("Cart/CartAll/CartProductDeleteNotOffers");
      //   return;
      // }
    },
    /**
     * @function ModalProduct - Вызывает мутации для отображение модального окна и открывает модальное окно
     */
    ModalProduct() {
      // console.log("SetModaBuy");
      this.$store.commit("Modal/SetModaBuy", {
        LinkProduct: this.LinkProduct,
        LinkOffer: this.LinkOffer,
        CheckCart: this.userBasket,
      });
      this.$bvModal.show("buy");
    },
  },
};
</script>
