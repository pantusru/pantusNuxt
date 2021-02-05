<template>
  <div>
    <b-form>
      <template v-for="data in GetDostavka">
        <b-row
          v-if="data.active"
          :key="data.id"
          class="justify-content-between mb-3"
        >
          <b-col class="d-flex">
            <b-form-radio-group
              v-model="GetFormDostavka"
              name="dostavka"
              @change="changeInput(data)"
            >
              <b-form-radio
                :id="'dostavka-' + data.id.toString()"
                :value="data.id"
              />
            </b-form-radio-group>
            <div>
              <label class="mb-1" :for="'dostavka-' + data.id">{{
                data.name
              }}</label>
              <div v-html="data.adress" />
            </div>
          </b-col>
          <b-col cols="3" class="cursor-pointer">{{ data.description }}</b-col>
        </b-row>
      </template>
    </b-form>
    <!--    <cdek v-if="show_cdek"/>-->
  </div>
</template>

<script>
import Mixin from "@/mixins/order-riles/index";
// import shiptor from "@/components/order/widget/shiptor";
// import cdek from "@/components/order/widget/cdek";
export default {
  name: "Dostavka",
  mixins: [Mixin],
  // components: {
  //   shiptor,
  // },
  props: {
    $v: {},
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    GetDostavka() {
      return this.$store.getters["Order/Payment/Index/GetDostavka"];
    },
    GetFormDostavka: {
      get() {
        return this.$store.getters["Order/Form/GetDostavka"];
      },
      set(val) {
        // console.log(val);
        // this.$store.commit("Order/Form/SetDostavka", val);
      },
    },
  },
  methods: {
    changeInput(data) {
      console.log(data);
      this.$store.commit("Order/Form/SetCostDostavka", data.price);
      if (data.city != null) {
        this.$store.commit("Order/Form/SetFull", {
          name: "Town",
          value: data.city,
        });
      }
      if (data.TownId !== undefined) {
        this.$store.commit("Order/Form/SetFull", {
          name: "Town",
          value: data.Town,
        });
        this.$store.commit("Order/Form/SetFull", {
          name: "TownId",
          value: data.TownId,
        });
        this.$v.Form.$model.Town = data.Town;
      }
      this.$store.commit("Order/Form/SetDostavka", data.id);
      this.RilesOrder(
        this.$store.getters["Order/Payment/Index/GetPayment"],
        this.$store.getters["Order/Form/GetDostavka"],
        "delivery_type_id",
        "paysystem_type_id"
      );
    },
    // WidgetShow(data) {
    //   this[data] = true;
    //
    //   console.log(this.ShowShiptor);
    // },
  },
};
</script>
