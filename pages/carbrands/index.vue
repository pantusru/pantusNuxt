<template>
  <b-container>
    <Vinput
      class="col-12 col-lg-3 mx-auto"
      :data="dataset"
      :placeholders="'Поиск по применимостям'"
    />
    <base-title-catalog text="Применимости" />
    <b-row>
      <Applicabilities v-for="data in dataset" :key="data.id" :dataset="data" />
    </b-row>
  </b-container>
</template>

<script>
import Applicabilities from "@/components/catalog/applicabilities/applicabilities-blog-get";
import Vinput from "@/components/search/panel/input/index";
import BaseTitleCatalog from "@/components/base/title/base-title-catalog";
export default {
  components: {
    BaseTitleCatalog,
    Vinput,
    Applicabilities,
  },
  provide() {
    return {
      SetValue: "Applicabilities/ApplicabilitiessAll/SetApplicabilities",
    };
  },
  async fetch({ store }) {
    await store.dispatch(
      "Applicabilities/ApplicabilitiessAll/_Applicabilitiess"
    );
  },
  head() {
    return {
      title: `Автозапчасти по маркам автомобилей - Интернет-магазин запчастей Pantus.ru`,
      meta: [
        {
          name: "description",
          content: `Подбор запчастей по маркам автомобилей. Найти и купить запчасти мо марке и модели машины, каталог запчастей по маркам автомобилей`,
        },
        {
          name: "keywords",
          content: `марки автомобилей запчасти подбор сравнение`,
        },
      ],
    };
  },
  computed: {
    dataset() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ];
    },
  },
  created() {
    this.$store.dispatch("Catalog/All/_AllVisible", this.dataset);
  },
};
</script>
