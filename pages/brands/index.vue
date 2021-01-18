<template>
  <b-container>
    <Vinput
      class="col-12 col-lg-3 mx-auto"
      :get-name="'Brand/BrandAll/GetBrand'"
      :placeholders="'Поиск по брендам'"
      @Vsearch="ValueSet"
    />
    <base-title-catalog text="Бренды" />
    <b-row class="mt-3 mt-lg-5">
      <Brand v-for="source in SearchElem" :key="source.id" :source="source" />
    </b-row>
    <b-pagination-nav
      v-if="CountPages !== 1"
      use-router
      :number-of-pages="CountPages"
      :link-gen="linkGen"
      align="center"
      first-number
      last-number
      hide-goto-end-buttons
      limit="3"
      size="sm"
    />
  </b-container>
</template>

<script>
import Vinput from "@/components/search/panel-brand/input/index";
import Brand from "@/components/catalog/brand/brand-blog-get";
import PageMixins from "@/mixins/page/index";
import BaseTitleCatalog from "@/components/base/title/base-title-catalog";
export default {
  components: {
    BaseTitleCatalog,
    Vinput,
    Brand,
  },
  mixins: [PageMixins],
  data() {
    return {
      CountPages: this.$store.getters["Brand/BrandAll/GetBrandLength"],
      NameComponents: Brand,
      SearchElem: "",
    };
  },
  async fetch({ store, getters, commit, query }) {
    await store.dispatch("Brand/BrandAll/_Brands");
  },
  head() {
    return {
      title: "Pantus бренды товаров",
    };
  },
  computed: {
    BrandLength() {
      return this.$store.getters["Brand/BrandAll/GetBrandLength"];
    },
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
      if (this.$route.query.page !== undefined) {
        this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](
          this.$route.query.page
        );
      } else {
        this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](1);
      }
    },
  },
  created() {
    if (this.$route.query.page !== undefined) {
      this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](
        this.$route.query.page
      );
    } else {
      this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](1);
    }
  },
  methods: {
    // получение результата от компонента поиска
    ValueSet(data) {
      if (data.search > 0) {
        this.SearchElem = data.data;
        this.CountPages = 1;
      } else {
        this.SearchElem = this.$store.getters["Brand/BrandAll/GetBrandPage"](
          this.$route.query.page
        );
        this.CountPages = this.BrandLength;
      }
    },
  },
};
</script>
