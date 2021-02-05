<template>
  <div class="mb-2">
    <div class="d-flex justify-content-between">
      <label class="mr-3 pl-0" :for="name">{{ items }}</label>
      <autocomplete add-class="w-75" @input="SetValue" />
      <!-- <b-input class="w-75" v-on:input="goTown" v-model="value" size="sm" :id="name"></b-input> -->
    </div>
    <div class="error-full text-center">
      <div v-for="data in error" :key="data.id" class="error">
        <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty"
          >{{ data.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import autocomplete from "@/components/vue-suggestion";
import mixitProps from "@/mixins/input/props/index";

export default {
  components: {
    autocomplete,
  },
  mixins: [mixitProps],
  data() {
    return {
      nameSet: "Order/Form/SetFull", // Изменить
      nameSetTown: "Order/Form/SetFull",
    };
  },
  methods: {
    SetValue(data) {
      // Сохранение в VUEX для дальшейшей отправки на API
      this.$v.Form.$model[this.name] = data.data;
      this.$store.commit(this.nameSetTown, { name: "Town", value: data.data });
      this.$store.commit(this.nameSetTown, { name: "TownId", value: data.id });
    },
  },
};
</script>
