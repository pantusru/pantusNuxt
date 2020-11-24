<template>
  <div>
    <h2 class="d-lg-none">{{ dataset.ProductCard.name }}</h2>
    <b-row class="mt-5 mb-3" v-if="dataset !== undefined">
      <b-col cols="12" sm="8" lg="4" class="d-flex flex-wrap">
        <!-- БЛОК с альбомом -->
        <b-col cols="3" class="">
          <b-img
            class="mb-3"
            :src="dataset.ProductCard.ProductCardImage.url"
            @click="MainTrue"
          ></b-img>
          <b-img
            :key="data.id"
            v-for="(data, index) in dataset.ProductCard.album"
            class="mb-3"
            :src="data.url"
            @click="MainUrl(index)"
          />
        </b-col>
        <!-- БЛОК с альбомом -->
        <b-col cols="8">
          <div>
            <b-img class="img-100 hover-img" :src="UrlMain"></b-img>
            <!--                        <ProductZoomer :base-images="UrlMain"/>-->
          </div>
        </b-col>
      </b-col>
      <b-col class="mt-lg-0 mt-2" lg="7" cols="12">
        <h2 class="d-none d-lg-block">{{ dataset.ProductCard.name }}</h2>
        <b-row class="mb-3 align-items-center mt-3">
          <b-col class="mb-2" cols="12">
            <b>Производитель</b> :
            <nuxt-link
              class="text-decoration-none text-436174"
              :to="'/search?filter_brand=' + dataset.ProductCard.brand.id"
            >
              {{ dataset.ProductCard.brand.name }}
            </nuxt-link>
          </b-col>
          <b-col class="mb-2" cols="12">
            <b>Артикул</b>: <span>{{ dataset.ProductCard.sku.original }}</span>
          </b-col>
          <b-col class="mb-2" cols="12">
            <b>Категория</b> :
            <nuxt-link
              v-for="dataCategories in dataset.ProductCard.categories"
              :key="dataCategories.id"
              class="text-decoration-none text-436174 pr-1"
              :to="'/search?filter_categories=' + dataCategories.id"
            >
              {{ dataCategories.name }}
            </nuxt-link>
          </b-col>
          <b-col class="mb-2" cols="12">
            <b>Применяемость</b> :
            <nuxt-link
              v-for="dataApplicabilities in dataset.ProductCard.applicabilities"
              :key="dataApplicabilities.id"
              class="text-decoration-none text-436174 pr-1"
              :to="'/search?filter_applicabilities=' + dataApplicabilities.id"
            >
              {{ dataApplicabilities.name }}
            </nuxt-link>
          </b-col>
        </b-row>
        <b-col cols="12" class="text-right p-0">
          <button-reply-show />
          <Share />
        </b-col>
        <b-row
          no-gutters
          class="justify-content-between align-items-center mb-2"
        >
          <h4><b>Предложение</b></h4>
          <div>Уровень цен: Розничный</div>
        </b-row>
        <TableOffer
          :Linkoffset="dataset.productOffer"
          :LinkProduct="dataset.ProductCard"
        />
        <ModalBuy />
      </b-col>
    </b-row>
    <h4 class="mb-4" v-if="analogs.length !== 0">Аналоги и заменители</h4>
    <Table
      v-if="analogs.length !== 0"
      class="mb-4"
      :array="analogs"
      :CheckAnalogs="true"
    />
    <h5 class="mb-3 text-515151">Кроссы по ОЕМ-номерам и аналогам</h5>
    <b-row class="justify-content-between col-12" lg="8">
      <b-col
        cols="12"
        sm="6"
        lg="4"
        class="mb-1"
        v-for="oem in dataset.ProductCard.ProductCardOem"
        :key="oem"
      >
        <nuxt-link :to="'/search?filter_substr=' + oem" class="pr-3">
          {{ oem }}
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Table from "@/components/table/table-product-get";
import ModalBuy from "@/components/modal/buy-product";
import TableOffer from "@/components/table/table-offset-get";
import Share from "@/components/modal/share";
import mixins from "@/mixins/product/album";
import ButtonReplyShow from "@/components/base/button/button-reply-show";

export default {
  mixins: [mixins],
  props: {
    dataset: {}
  },
  created() {
    this.MainTrue();
  },
  computed: {
    analogs() {
      return this.$store.getters["Products/analogs/GetProducts"];
    }
  },
  components: {
    ButtonReplyShow,
    Share,
    TableOffer,
    ModalBuy,
    Table
  }
};
</script>
