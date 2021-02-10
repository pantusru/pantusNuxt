<template>
  <div class="mb-2">
    <div class="d-flex justify-content-between">
      <label class="mr-3 pl-0" :for="name">{{ items }}</label>
      <autocomplete add-class="w-75" :$v="$v" @input="SetValue" />
      <!-- <b-input class="w-75" v-on:input="goTown" v-model="value" size="sm" :id="name"></b-input> -->
    </div>
    <base-errors-valid
      class="text-center"
      :error="error"
      :$v="$v"
      :name="name"
    />
  </div>
</template>

<script>
import autocomplete from "@/components/vue-suggestion";
import mixitProps from "@/mixins/input/props/index";
import BaseErrorsValid from "@/components/base/base-errors-valid";

export default {
  components: {
    BaseErrorsValid,
    autocomplete,
  },
  mixins: [mixitProps],
  // data() {
  //   return {
  //     nameSet: "Order/Form/SetFull", // Изменить
  //     nameSetTown: "Order/Form/SetFull",
  //   };
  // },
  methods: {
    SetValue(data) {
      // Сохранение в VUEX для дальшейшей отправки на API
      // this.$v.Form.$model.Town = data.data;
      // this.$v.Form.$model.TownId = data.id;
      // this.$v.Form.$model[this.name] = data.data;
      // this.$store.commit(this.nameSetTown, { name: "Town", value: data.data });
      // this.$store.commit(this.nameSetTown, { name: "TownId", value: data.id });
    },
  },
};
</script>
