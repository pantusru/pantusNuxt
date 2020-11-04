<template>
  <b-row no-gutters class="mb-3">
    <Metka
      v-for="(data, index) in Metks"
      :key="data.id"
      :link="data"
      :index="index"
    />
  </b-row>
</template>

<script>
import Metka from "@/components/Metka/Filter/index";
export default {
  computed: {
    Metks() {
      return this.$store.getters["Catalog/Metks/GetMetks"];
    },
  },
  components:{
    Metka,
  }
};
</script>

<style>
</style>