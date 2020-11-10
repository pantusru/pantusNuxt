<template>
  <div>
    <b-form>
      <b-row v-for="data in GetDostavka" :key="data.id" class="justify-content-between mb-3 ">
        <b-col class="d-flex flex-wrap">
          <b-form-radio-group name="dostavka"  v-model="value" @change="changeInput(data)">
            <b-form-radio :value="data.id" :id="data.id" > </b-form-radio>
          </b-form-radio-group>
          <div>
            <!-- shiptor_widget_show   -->
            <template v-if="data.nameWidget === false">
              <label :data-role="data.nameWidget" class="mb-1" :for="data.id">{{ data.name }}</label>
            </template>
            <!-- all   -->
            <template v-else>
              <label class="mb-1" :for="data.id">{{ data.name }}</label>
            </template>
            <div>{{ data.adress}}</div>
          </div>
        </b-col>
        <!--   shiptor  -->
        <template v-if="data.nameWidget === 'shiptor_widget_show'">
          <b-col cols="3" class="cursor-pointer" :data-role="data.nameWidget">{{data.description}}</b-col>
<!--          <shiptor :text="data"/>-->
        </template>
<!--        <template v-else-if="data.nameWidget = '' ">-->

<!--        </template>-->
          <!--    all    -->
        <template v-else>
          <b-col cols="3" class="cursor-pointer">{{data.description}}</b-col>
        </template>
      </b-row>
    </b-form>
<!--    <cdek v-if="show_cdek"/>-->
  </div>
</template>

<script>
// import shiptor from "@/components/order/widget/shiptor";
// import cdek from "@/components/order/widget/cdek";
export default {
  name: "dostavka",
  components: {
    // shiptor,
    // cdek,
  },
  props:{
    $v:{}
  },
  data() {
    return {
      // show_cdek: true,
      value: "",
    }
  },
  computed:{
    GetDostavka(){
      return this.$store.getters["Order/Payment/Index/GetDostavka"]
    },
  },
  methods:{
    changeInput(data){
       console.log(data);
      this.$store.commit("Order/Form/SetCostDostavka", data.cost);
      if(data.TownId !== undefined){
        this.$store.commit("Order/Form/SetFull", {name: "Town", value: data.Town});
        this.$store.commit("Order/Form/SetFull", {name: "TownId", value: data.TownId});
        this.$store.commit("Order/Form/SetDostavka", this.value);
        this.$v.Form.$model.Town = data.Town;
      }
    },
    WidgetShow(data){
      this[data] = true;

      console.log(this.ShowShiptor);

    }

  }

}
</script>

