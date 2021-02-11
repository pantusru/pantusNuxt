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
    formGo() {
      // Отправить заказ
      this.$v.Form.$touch();
      console.log(this.$v.Form.$model);
    },
  },
};
</script>
