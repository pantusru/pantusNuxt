<template>
  <b-card class="mb-4">
    <b-card-header header-class="border-0 bg-white p-0">
      <b-row class="align-items-center mb-3 justify-content-between">
        <b-row class="col-5 align-items-center">
          <b-col cols="4">
            <ImgGetModal :product="Product"/>
          </b-col>
          <h2> {{ Product.ProductCard.name }}</h2>
        </b-row>
      </b-row>
    </b-card-header>
    <b-card-body class="py-0 ">
      <b-row class="justify-content-between">
        <b-row no-gutters class="flex-column col-12 col-lg-4 mb-2 mb-lg-0">
          <RowAtr
            name="Бренд"
            :link="'brand/' + Product.ProductCard.brand.id"
            :dataset="Product.ProductCard.brand.name"
          />
          <RowAtr name="Артикул" :dataset="Product.ProductCard.sku.original"/>
          <RowAtr slots=true v-if="Product.ProductCard.applicabilities !== undefined">
            <template v-slot:header>
              <div class="mr-1 fz-6"><b>Применяемость</b></div>
              <nuxt-link :to="'applicabilities/' + Product.ProductCard.applicabilities[0].id"
                         class="text-right text-576b77 text-decoration-none">
                {{ Product.ProductCard.applicabilities[0].name }}
              </nuxt-link>
            </template>
            <template v-slot:body>
              <div
                v-for="data in Product.ProductCard.applicabilities.slice(1, Product.ProductCard.applicabilities.length)"
                :key="data.id">
                <nuxt-link class="text-right text-decoration-none text-576b77" :to="'applicabilities/' + data.id">
                  {{ data.name }}
                </nuxt-link>
              </div>
            </template>
          </RowAtr>
          <RowAtr slots=true v-if="Product.ProductCard.ProductCardOem != undefined">
            <template v-slot:header>
              <div class="mr-1 fz-6"><b>ОЕМ</b></div>
              <nuxt-link
                :to="'search?name=' + Product.ProductCard.ProductCardOem[0]"
                class="text-right text-576b77 text-decoration-none">
                {{ Product.ProductCard.ProductCardOem[0] }}
              </nuxt-link>
            </template>
            <template v-slot:body>
              <div
                v-for="data in Product.ProductCard.ProductCardOem.slice(1,Product.ProductCard.ProductCardOem.length)"
                :key="data.id">
                <nuxt-link
                  :to="'search?name=' + data"
                  class="text-right text-576b77 text-decoration-none ">
                  {{ data }}
                </nuxt-link>
              </div>
            </template>
          </RowAtr>
          <RowAtr slots=true v-if="Product.ProductCard.categories != undefined">
            <template v-slot:header>
              <div class="mr-1 fz-6"><b>Категории</b></div>
              <nuxt-link :to="'categories/' + Product.ProductCard.categories[0].id"
                         class="text-right fz-5_5 text-decoration-none text-576b77">
                {{ Product.ProductCard.categories[0].name }}
              </nuxt-link>
            </template>
            <template v-slot:body>
              <div v-for="data in Product.ProductCard.categories.slice(1, Product.ProductCard.categories.length)"
                   :key="data.id">
                <nuxt-link class="text-right text-decoration-none text-576b77" :to="'categories/' + data.id">
                  {{ data.name }}
                </nuxt-link>
              </div>
            </template>
          </RowAtr>
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
import RowAtr from "@/components/products/product/element/row"
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
