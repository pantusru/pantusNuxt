<template>
  <b-row class="align-items-center mb-2">
    <b-col cols="2" class="mr-4"
      ><label :for="name"> {{ items }}</label></b-col
    >
    <b-col cols="5">
      <b-form-input
        v-mask="Vmask"
        :type="type"
        v-model.trim="$v.Form[name].$model"
        :id="name"
        class="w-75"
        size="sm"
      >
      </b-form-input>
      <div class="error-full" v-for="data in error" :key="data.id">
        <div
          class="error"
          v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"
        >
          {{ data.text }}
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import mixitProps from "@/mixins/Input/Props/index";
export default {
  inject: ["$v"],
  created() {
    if (this.dataset != undefined) {
      this.$v.Form[this.name].$model = this.dataset;
    }
  },
  mixins: [mixitProps],
  data() {
    return {
      nameSet: "User/SetFull",
      value: "",
    };
  },
  computed: {
    dataset() {
      return this.$store.getters["User/FormData"][this.name];
    },
  },
};
</script>

