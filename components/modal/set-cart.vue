<template>
  <b-modal :id="'SetCart'" no-close-on-backdrop>
    <template #modal-header="{ close }">
      <h5>Сохранить товары в вашу корзину?</h5>
      <b-button
        class="font-weight-bolder"
        variant="outline-danger"
        @click="close()"
      >
        X
      </b-button>
    </template>
    <div>
      <p>
        Корзина Вашего профиля не пуста! Там уже имеются ранее добавленные
        товары. Хотите ли Вы объединить их с теми, которые были положены только
        что?
      </p>
    </div>
    <template #modal-footer="">
      <base-button class="py-1 px-2" text="Сохранить товар" @click.once="set" />
    </template>
  </b-modal>
</template>

<script>
import BaseButton from "@/components/base/button/base-button";
import MixinSetCart from "@/mixins/cart-set/index";
export default {
  name: "SetCart",
  components: {
    BaseButton,
  },
  mixins: [MixinSetCart],
  computed: {
    oldCart() {
      return this.$store.getters.getSetCartGuest;
    },
    Cart() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
  methods: {
    async set() {
      if (this.oldCart) {
        const Cart = [...this.oldCart, ...this.Cart];
        await this.updateCart(Cart);
        this.$store.commit("setCartGuest", false);
      }
      this.$bvModal.hide("SetCart");
    },
  },
};
</script>
