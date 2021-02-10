<template>
  <div>
    <b-form>
      <b-form-radio-group :value="this.$v.Form.$model.dostavka" name="dostavka">
        <template v-for="data in GetDostavka">
          <b-row
            v-if="data.active"
            :key="data.id"
            class="justify-content-between mb-3"
          >
            <b-col class="d-flex">
              <b-form-radio
                :id="'dostavka-' + data.id.toString()"
                :value="data.id"
                @change="changeInput(data)"
              />
              <div>
                <label class="mb-1" :for="'dostavka-' + data.id">{{
                  data.name
                }}</label>
                <div v-html="data.adress" />
              </div>
            </b-col>
            <b-col cols="3" class="cursor-pointer">{{
              data.description
            }}</b-col>
          </b-row>
        </template>
      </b-form-radio-group>
      <!--      {{ error }}-->
      <base-errors-valid name="dostavka" :error="error['dostavka']" :$v="$v" />
    </b-form>
  </div>
</template>
<!--    <cdek v-if="show_cdek"/>-->

<script>
import Mixin from "@/mixins/order-riles/index";
import BaseErrorsValid from "@/components/base/base-errors-valid";
// import shiptor from "@/components/order/widget/shiptor";
// import cdek from "@/components/order/widget/cdek";
export default {
  name: "Dostavka",
  components: { BaseErrorsValid },
  mixins: [Mixin],
  // components: {
  //   shiptor,
  // },
  props: {
    $v: {},
    error: {},
  },
  // data() {
  //   return {
  //     value: "",
  //   };
  // },
  computed: {
    GetDostavka() {
      return this.$store.getters["Order/Payment/Index/GetDostavka"];
    },
    // GetFormDostavka: {
    //   get() {
    //     return this.$store.getters["Order/Form/GetDostavka"];
    //   },
    //   set(val) {},
    // },
  },
  methods: {
    changeInput(data) {
      this.$v.Form.$model.dostavka = data.id;
      this.$store.commit("Order/Form/SetCostDostavka", data.price);
      if (data.city != null) {
        // this.$store.commit("Order/Form/SetFull", {
        //   name: "Town",
        //   value: data.city,
        // });
        this.$v.Form.$model.Town = data.city;
      }
      if (data.TownId !== undefined) {
        this.$v.Form.$model.TownId = data.TownId;
        // this.$store.commit("Order/Form/SetFull", {
        //   name: "TownId",
        //   value: data.TownId,
        // });
      }
      // this.$store.commit("Order/Form/SetDostavka", data.id);
      this.RilesOrder(
        this.$store.getters["Order/Payment/Index/GetPayment"],
        this.$v.Form.$model.dostavka,
        "delivery_type_id",
        "paysystem_type_id"
      );
      // this.RilesOrder(
      //   this.$store.getters["Order/Payment/Index/GetPayment"],
      //   this.$store.getters["Order/Form/GetDostavka"],
      //   "delivery_type_id",
      //   "paysystem_type_id"
      // );
    },
  },
};
</script>
