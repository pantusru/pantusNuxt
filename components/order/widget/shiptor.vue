<template>
  <div>
    <script
      type="text/javascript"
      src="https://widget.shiptor.ru/embed/widget.js"
    ></script>
    <div
      id="shiptor_widget_delivery"
      class="_shiptor_widget"
      data-markup="70"
      data-mode="popup"
      data-country="Россия"
      data-kladrfrom="6400000400000"
    ></div>
  </div>
</template>

<script>
export default {
  name: "shiptor",
  props: {
    text: {}
  },
  mounted() {
    const elemShiptorWidget = document.querySelector(
      "#shiptor_widget_delivery"
    );
    elemShiptorWidget.addEventListener("onWidgetSuccess", data => {
      if (data.detail.pvz !== null) {
        let cons = data.detail.pvz.cost.substr(
          0,
          data.detail.pvz.cost.length - 4
        );
        cons = parseFloat(cons);
        this.$store.commit("Order/Payment/Index/SetNameDostavka", {
          url: this.text,
          valueText: data.detail.pvz.cost,
          valueCons: cons
        });
        this.$store.commit("Order/Form/SetCostDostavka", cons);
      } else if (data.detail.method !== null) {
        let cons = data.detail.method.cost.total.sum;
        cons = parseFloat(cons);
        this.$store.commit("Order/Payment/Index/SetNameDostavka", {
          url: this.text,
          valueText: data.detail.method.cost.total.readable,
          valueCons: cons
        });
        this.$store.commit("Order/Form/SetCostDostavka", cons);
      }
    });
  }
};
</script>

<style scoped></style>
