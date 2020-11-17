<template>
  <b-card class="mb-4" no-body>
    <b-card-header header-class="border-0 bg-white p-0 py-3">
      <b-row class="align-items-center mb-3 justify-content-between">
        <b-row no-gutters class="col-5 align-items-center">
          <b-col cols="4">
            <ImgGetModal :product="Product"/>
          </b-col>
          <h2> <nuxt-link class="text-555" :to="'product/'+Product.ProductCard.id"> {{ Product.ProductCard.name }}</nuxt-link></h2>
        </b-row>
      </b-row>
    </b-card-header>
    <b-card-body class="py-2 px-15px">
      <b-row class="justify-content-between">
        <b-row no-gutters class="flex-column col-12 col-lg-4 mb-2 mb-lg-0">
          <!--  Бренд  -->
          <RowAtr
            name="Бренд"
            :link="'search?brand=' + Product.ProductCard.brand.id"
            :dataset="Product.ProductCard.brand.name"
          />
          <!--  Артикул  -->
          <RowAtr
            name="Артикул"
            :dataset="Product.ProductCard.sku.original"
          />
          <!--  Применяемость  -->
          <RowAtr v-if="Product.ProductCard.applicabilities !== undefined"
                  name="Применяемость"
                  :dataset="Product.ProductCard.applicabilities[0].name"
                  :link="'search?applicabilities=' + Product.ProductCard.applicabilities[0].id"
          />

          <template v-if="Product.ProductCard.applicabilities !== undefined && Product.ProductCard.applicabilities.length > 1">
            <RowAtr
              v-for="data in Product.ProductCard.applicabilities.slice(1, Product.ProductCard.applicabilities.length)"
              :key="data.id"
              :dataset="data.name"
              :link="'search?applicabilities=' + data.id"
            />
          </template>
          <!--  ОЕМ  -->
          <RowAtr
            v-if="Product.ProductCard.ProductCardOem !== undefined"
            name="ОЕМ"
            :link="'search?name=' + Product.ProductCard.ProductCardOem[0]"
            :dataset="Product.ProductCard.ProductCardOem[0]"
          />
          <template v-if="Product.ProductCard.ProductCardOem !== undefined && Product.ProductCard.ProductCardOem.length > 1">
            <RowAtr
              v-for="data in Product.ProductCard.ProductCardOem.slice(1, Product.ProductCard.ProductCardOem.length)"
              :key="data"
              :dataset="data"
              :link="'search?name=' + data"
            />
          </template>
          <!--  Категории  -->
          <RowAtr
            v-if="Product.ProductCard.categories !== undefined"
            name="Категории"
            :link="'search?categories=' + Product.ProductCard.categories[0].id"
            :dataset="Product.ProductCard.categories[0].name"
          />
          <template v-if="Product.ProductCard.categories !== undefined && Product.ProductCard.categories.length > 1">
            <RowAtr
              v-for="data in Product.ProductCard.categories.slice(1, Product.ProductCard.categories.length)"
              :key="data.id"
              :dataset="data.name"
              :link="'search?categories=' + data.id"
            />
          </template>

        </b-row>
        <b-row no-gutters class="justify-content-between flex-column col-12 col-lg-8">
          <TableOffset
            :Linkoffset="Product.productOffer"
            :LinkProduct="Product.ProductCard"
          />
        </b-row>
        <b-button
          @click="DeleteSelected"
          v-if="Selected"
          class="position-absolute bnt-delete-selected bg-danger border-0"
        >
          X
        </b-button>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import ImgGetModal from "@/components/products/product/element/img"
import BuyButton from "@/components/products/button/buy-index"
import RowAtr from "@/components/products/product/element/product-element-row-get"
import TableOffset from "@/components/table/table-offset-get"

export default {
  methods: {
    DeleteSelected() {
      let index = this.SelectedProducts.findIndex(s => s.ProductCard.id == this.Product.ProductCard.id);
      this.$store.commit("Selected/selected/DeleteSelected", index);
    }
  },
  name: "ProductBlogRow",
  props: {
    Product: {},
    Selected: {
      default: false,
    }
  },
  components: {
    RowAtr,
    BuyButton,
    TableOffset,
    ImgGetModal
  },
  computed: {
    SelectedProducts() {
      return this.$store.getters["Selected/selected/GetSelected"];
    }
  }
}
</script>
