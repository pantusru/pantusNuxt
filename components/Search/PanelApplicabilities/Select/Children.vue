<template>
  <b-col cols="4">
    <div class="mr-3 form-control">
      <!-- ПЕРЕДЕЛАТЬ ПОСЛЕ ПОЯВЛЕНИЕ АДЕКВАТНОГО VUEX -->
      <span>
      </span>
      <!-- ПЕРЕДЕЛАТЬ ПОСЛЕ ПОЯВЛЕНИЕ АДЕКВАТНОГО VUEX -->
    </div>
    <b-form-select multiple :select-size="4" v-model="Panel">
      <template v-slot:first>
        <b-form-select-option
          v-for="element in data"
          :key="element.id"
          :value="element.id"
          >{{ element.name }}</b-form-select-option
        >
      </template>
    </b-form-select>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      data: "",
    }
  },
  props: {
    Name: {},
    NameParent: {},
    PanelId:{},
  },
  computed: {
    Panel: {
      get() {
        return this.$store.getters["Applicabilities/Panel/PanelId"](
          this.PanelId
        )[0][this.Name]
      },
      set(value) {},
    },

  },
};
</script>

<style>
</style>