<template>
  <b-form>
    <div class="mb-2">Товары: {{ GetCostProduct }} Р</div>
    <div class="mb-4">Доставка: {{ GetCostDostavka }}р</div>
    <h3>Итог {{ GetCostOrder }}Р</h3>
    <b-button class="bg-danger border-0" @click="formGo"
      >Отправить заказ</b-button
    >
  </b-form>
</template>

<script>
export default {
  props: {
    $v: {},
  },
  computed: {
    GetCostProduct() {
      return this.$store.getters["Cart/CartAll/GetSymmaAll"];
    },
    GetCostDostavka() {
      return this.$store.getters["Order/Form/GetCostDostavka"];
    },
    GetCostOrder() {
      const data = this.GetCostProduct + this.GetCostDostavka;
      return data.toFixed(2);
    },
  },
  methods: {
    async formGo() {
      // Отправить заказ
      this.$v.Form.$touch();
      if (!this.$v.Form.$error) {
        const res = await this.$store.dispatch(
          "Order/axios/PostOrder",
          this.$v.Form.$model
        );
        // console.log(res);
        if (!res) {
          // Ошибка
          this.$store.commit("SetFormApi", {
            data: "errorOrder",
            value: true,
          });
        } else {
          this.$store.commit("Cart/CartAll/ResetCartProduct");
          // Гут
          this.$store.commit("SetFormApi", {
            data: "errorOrder",
            value: false,
          });
          await this.$router.push("/profile/orders/" + res.success.order_id);
        }
      }
    },
  },
};
</script>
