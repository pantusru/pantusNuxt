<template>
  <b-card class="mb-4" no-body>
    <b-card-header header-class="border-0 bg-white">
      <b-row class="align-items-center mb-3 justify-content-between">
        <b-row no-gutters class="col-12 align-items-center">
          <b-col cols="4">
            <ImgGetModal :product="Product" />
          </b-col>
          <div class="col-8 d-flex justify-content-between align-items-start">
            <h2 class="fz-3">
              <nuxt-link
                :title="Product.ProductCard.name"
                class="text-555 reset-title"
                :to="
                  '/products/' +
                  Product.ProductCard.id +
                  '/' +
                  Product.ProductCard.sku.normalized +
                  '-' +
                  Product.ProductCard.brand.code
                "
              >
                {{ Product.ProductCard.name }}</nuxt-link
              >
            </h2>
            <base-button v-if="Selected" class="ml-3" @click="DeleteSelected">
              X
            </base-button>
            <Chosen
              class-chosen="icons-chosen__row"
              v-if="CheckUser && !Selected"
              :id="Product.ProductCard.id"
              :link="Product"
            />
          </div>
        </b-row>
      </b-row>
      <!--      <div>{{Product}}</div>-->
    </b-card-header>
    <b-card-body class="py-2">
      <b-row class="justify-content-between">
        <b-row no-gutters class="flex-column col-12 col-lg-4 mb-2 mb-lg-0">
          <!--            Бренд  -->
          <RowAtr
            name="Бренд"
            :link="'/search?filter_brands=' + Product.ProductCard.brand.id"
            :dataset="Product.ProductCard.brand.name"
          />
          <!--  Артикул  -->
          <RowAtr name="Артикул" :dataset="Product.ProductCard.sku.original" />
          <!--  Применяемость  -->
          <RowAtr
            v-if="
              Product.ProductCard.applicabilities !== undefined &&
              Product.ProductCard.applicabilities.length !== 0
            "
            name="Применяемость"
            :dataset="Product.ProductCard.applicabilities[0].name"
            :link="
              '/search?filter_applicabilities=' +
              Product.ProductCard.applicabilities[0].id
            "
          />

          <template
            v-if="
              Product.ProductCard.applicabilities !== undefined &&
              Product.ProductCard.applicabilities.length > 1
            "
          >
            <RowAtr
              v-for="data in Product.ProductCard.applicabilities.slice(1, 5)"
              :key="data.id"
              :dataset="data.name"
              :link="'/search?filter_applicabilities=' + data.id"
            />
          </template>
          <!--  ОЕМ  -->
          <RowAtr
            v-if="
              Product.ProductCard.ProductCardOem !== undefined &&
              Product.ProductCard.ProductCardOem.length !== 0
            "
            name="ОЕМ"
            :link="
              '/search?filter_substr=' + Product.ProductCard.ProductCardOem[0]
            "
            :dataset="Product.ProductCard.ProductCardOem[0]"
          />
          <template
            v-if="
              Product.ProductCard.ProductCardOem !== undefined &&
              Product.ProductCard.ProductCardOem.length > 1
            "
          >
            <RowAtr
              v-for="data in Product.ProductCard.ProductCardOem.slice(1, 5)"
              :key="data"
              :dataset="data"
              :link="'/search?filter_substr=' + data"
            />
          </template>
          <!--  Категории  -->
          <RowAtr
            v-if="
              Product.ProductCard.categories !== undefined &&
              Product.ProductCard.categories.length !== 0
            "
            name="Категории"
            :link="
              '/search?filter_categories=' +
              Product.ProductCard.categories[0].id
            "
            :dataset="Product.ProductCard.categories[0].name"
          />
          <template
            v-if="
              Product.ProductCard.categories !== undefined &&
              Product.ProductCard.categories.length > 1
            "
          >
            <RowAtr
              v-for="data in Product.ProductCard.categories.slice(1, 5)"
              :key="data.id"
              :dataset="data.name"
              :link="'/search?filter_categories=' + data.id"
            />
          </template>
        </b-row>
        <b-row
          no-gutters
          class="justify-content-between flex-column col-12 col-lg-8"
        >
          <TableOffset
            :link-product="Product.ProductCard"
            :linkoffset="Product.productOffer"
          />
        </b-row>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import ImgGetModal from "@/components/products/product/element/img";
import RowAtr from "@/components/products/product/element/product-element-row-get";
import TableOffset from "@/components/table/table-offset-get";
import BaseButton from "@/components/base/button/base-button";
import Chosen from "@/components/metka/chosen"; // Метка избранный товар
export default {
  name: "ProductBlogRow",
  components: {
    BaseButton,
    RowAtr,
    TableOffset,
    ImgGetModal,
    Chosen,
  },
  props: {
    Product: {},
    Selected: {
      default: false,
    },
  },
  computed: {
    SelectedProducts() {
      return this.$store.getters["Selected/selected/GetSelected"];
    },
    CheckUser() {
      return this.$store.getters["User/CheckUser"];
    },
  },
  methods: {
    DeleteSelected() {
      const index = this.SelectedProducts.findIndex(
        s => s.ProductCard.id == this.Product.ProductCard.id
      );
      this.$store.dispatch("Selected/selected/_DeleteSelected", {
        id: this.Product.ProductCard.id,
        index,
      });
    },
  },
};
</script>
