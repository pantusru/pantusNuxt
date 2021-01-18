<template>
  <b-container>
    <div
      v-if="brand.description !== ''"
      class="container-static"
      v-html="brand.description"
    />
    <h2 v-if="brand.description === undefined" class="text-danger">
      Нету описания Бренда
    </h2>
    <h2 v-if="brand.name === null" class="text-danger">Бренд не найден</h2>
  </b-container>
</template>

<script>
export default {
  name: "IdVue",
  async fetch({ params, store, getters, commit }) {
    await store.dispatch("Brand/BrandAll/_BrandId", params.id);
  },
  computed: {
    brand() {
      return this.$store.getters["Brand/BrandAll/GetBrandId"];
    },
  },
};
</script>
<style>
.container-static li::before {
  content: "";
  width: 5px;
  height: 5px;
  margin-left: -12px;
  margin-top: 8px;
  border-radius: 5px;
  background: #c8312b;
  position: absolute;
  color: #c8312b;
}
.container-static .btn {
  color: #fff;
  background: darkred;
}
</style>
