<template>
  <b-container>
    <div
      v-if="brand !== undefined"
      class="container-static"
      v-html="brand.description"
    />
    <h2 v-if="!brand.active" class="text-danger">Нет описания бренда</h2>
  </b-container>
</template>

<script>
import Img from "@/mixins/document-selector/img";
import Row from "@/mixins/document-selector/row";
import LinkBrand from "@/mixins/document-selector/link";
export default {
  name: "IdVue",
  mixins: [Img, Row, LinkBrand],
  async fetch({ params, store, getters, commit, redirect }) {
    await store.dispatch("Brand/BrandAll/_Brands");
    await store.dispatch("Brand/BrandAll/_BrandId", params.id);
    if (store.getters["Brand/BrandAll/GetBrandId"].id === undefined) {
      redirect("/404");
    }
  },
  head() {
    return {
      title: `Купить автозапчасти ${this.brand.name}`,
      meta: [
        {
          name: "description",
          content: `Производитель запчастей ${this.brand.name} - страна происхождения, преимущества, категории запчастей, условия гарантии. Купить запчасти ${this.brand.name} оптом и в розницу с доставкой.`,
        },
        {
          name: "keywords",
          content: `${this.brand.name}, запчасти, производитель автозапчастей, оптом, в розницу, купить`,
        },
      ],
    };
  },
  computed: {
    brand() {
      return this.$store.getters["Brand/BrandAll/GetBrandId"];
    },
  },
  mounted() {
    this.imgAll();
    this.rowAll();
    this.linkBrand();
  },
};
</script>
<style>
@import "assets/css/static-page-main.css";
</style>
