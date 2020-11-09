<template>
  <div class="w-100">
    <span v-if="data.status.code !== 'ОТ'" @click="CancelOrder(data.status)" class="text-body cursor-pointer">Отменить заказ</span>
    <base-alert class="w-50" :dismissSecs="200" :text="text" :variant="variant" :routerHome="false" :get-alert.sync="GetAlert"></base-alert>
  </div>
</template>

<script>
import BaseAlert from "@/components/alert/base-alert";

export default {
  name: "order-button-cancel",
  components: {BaseAlert},
  data() {
    return {
      GetAlert: false,
      variant: undefined,
      text: undefined,
    }
  },
  props: {
    data: {
      type: Object,
    }
  },
  methods: {
    CancelOrder(data) {
      this.GetAlert = true;
      if(false){ // Заказ отменен
        this.variant = undefined;
        this.$store.commit("MyOrder/SetDataMyOrder", data);
      }else { // ошибка
        this.variant = "danger";
        this.text = "Невозможно отменить заказ"
      }
    }
  }
}
</script>

<style>

</style>
