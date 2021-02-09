<template>
  <b-form>
    <b-form-radio-group
      v-model="value"
      class="d-flex flex-column"
      @input="setPayment($event)"
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
    <base-errors-valid name="sistemPay" :error="error['sistemPay']" :$v="$v" />
  </b-form>
</template>

<script>
import Mixin from "@/mixins/order-riles/index";
import BaseErrorsValid from "@/components/base/base-errors-valid";
export default {
  components: { BaseErrorsValid },
  mixins: [Mixin],
  props: {
    $v: {},
    error: {},
  },
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
      this.$v.Form.$model.sistemPay = event;
      this.$store.commit("Order/Form/SetPayment", event);
      this.RilesOrder(
        this.$store.getters["Order/Payment/Index/GetDostavka"],
        this.$store.getters["Order/Form/GetPayment"],
        "paysystem_type_id",
        "delivery_type_id"
      );
    },
  },
};
</script>
