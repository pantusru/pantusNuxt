<template>
  <b-form>
    <b-form-radio-group
      @input="setPayment($event)"
      v-model="value"
      class="d-flex flex-column"
    >
      <template v-for="data in chexbox">
        <b-form-radio
          v-if="data.active"
          :id="'payment-' + data.id.toString()"
          :key="data.id"
          :value="data.id"
        >
          {{ data.name }}
        </b-form-radio>
      </template>
    </b-form-radio-group>
  </b-form>
</template>

<script>
import Mixin from "@/mixins/order-riles/index";
export default {
  mixins: [Mixin],
  data() {
    return {
      value: this.$store.getters["Order/Form/GetPayment"],
    };
  },
  computed: {
    chexbox() {
      return this.$store.getters["Order/Payment/Index/GetPayment"];
    },
  },
  methods: {
    setPayment(event) {
      this.RilesOrder(
        this.$store.getters["Order/Payment/Index/GetDostavka"],
        this.value,
        "paysystem_type_id",
        "delivery_type_id"
      );
      this.$store.commit("Order/Form/SetPayment", this.value);
    },
  },
};
</script>
