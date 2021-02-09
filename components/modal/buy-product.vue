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
          :add-class-form="'col-6 col-md-4'"
          :count-props="count"
          :multiplicity="LinkOffer.multiplicity"
          @Count="SetCount"
        />
      </div>
      <div class="mb-2">
        <div><b> Стоимость:</b></div>
        <div>{{ stoimost }} Р</div>
      </div>
    </div>
    <template #modal-footer="">
      <base-button class="py-1 px-2" text="Купить" @click.once="buy" />
    </template>
  </b-modal>
</template>

<script>
import VInput from "@/components/products/input/product-input-count";
import BaseButton from "@/components/base/button/base-button";

export default {
  name: "ModalBuyProduct",
  components: {
    BaseButton,
    VInput,
  },
  data() {
    return {
      close: false,
      count: "",
      CartProduct: undefined,
    };
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
  methods: {
    ShowModal() {
      this.CartProduct = this.$store.getters["Cart/CartAll/GetCartProductId"](
        this.LinkOffer.id
      );
      if (this.CartProduct !== undefined) {
        this.count = this.CartProduct[0].Count;
      } else {
        this.count = this.LinkOffer.multiplicity;
      }
      // console.log(this.CartProduct);
    },
    SetCount(Count) {
      // Emit
      this.count = Count.Count;
    },
    // Кнопка купить
    async buy() {
      const data = await this.$store.dispatch("Cart/axios/_CartProductPut", {
        id: this.LinkOffer.id,
        quantity: this.count,
      });
      if (data.error === undefined) {
        this.$store.commit("Cart/CartAll/SetCartProduct", data);
      }
      this.$bvModal.hide("buy");
    },
  },
};
</script>
