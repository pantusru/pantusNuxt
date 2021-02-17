<template>
  <b-container>
    <Product v-if="ProductData.length !== 0" :dataset="ProductData[0]" />
    <h1 v-else class="error">Товар не найден</h1>
  </b-container>
</template>

<script>
import Product from "@/components/products/product/index";
export default {
  components: {
    Product,
  },
  async asyncData({ store, params, getters, redirect }) {
    // const ProductAll = store.getters["Products/GetProducts"]; // Все подгруженные товары
    // if (ProductAll.length !== 0) {
    //   const datasetCheck = ProductAll.filter(
    //     data => data.ProductCard.id == params.id
    //   );
    //   if (datasetCheck !== undefined) {
    //     store.commit("Products/SetProduct", datasetCheck);
    //     return;
    //   }
    // }
    await store.dispatch("Products/_ProductId", params.id);
    const Productid = store.getters["Products/GetProduct"];
    // console.log(Productid);
    if (Productid.length === 0) {
      redirect("/404");
    }
  },
  head() {
    return {
      title: `${this.ProductData[0]?.ProductCard?.name} -  ${this.ProductData[0]?.ProductCard?.sku?.original} -  ${this.ProductData[0]?.ProductCard?.brand?.name}`,
      meta: [
        {
          name: "description",
          content: `${this.ProductData[0]?.ProductCard?.name}
          . Производитель - ${this.ProductData[0]?.ProductCard?.brand?.name}.
          Артикул -  ${
            this.ProductData[0]?.ProductCard?.sku?.original
          }. OEM - ${this.ProductData[0]?.ProductCard?.ProductCardOem?.join(
            ", "
          )}`,
        },
        {
          name: "keywords",
          content: `${
            this.ProductData[0]?.ProductCard?.sku?.original
          } ${this.ProductData[0]?.ProductCard?.ProductCardOem?.join(", ")} ,${
            this.ProductData[0]?.ProductCard?.name
          }`,
        },
      ],
    };
  },
  computed: {
    ProductData() {
      return this.$store.getters["Products/GetProduct"];
    },
  },
};
</script>
