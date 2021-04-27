<template>
  <div>
    <h1 class="d-lg-none wbba h2 position-relative pr-2">
      {{ dataset.ProductCard.name }}
      <Chosen
        :id="dataset.ProductCard.id"
        class-chosen="icons-chosen__blog"
        :link="dataset"
      />
    </h1>
    <b-row v-if="dataset !== undefined" class="mt-5 mb-3">
      <b-col cols="12" sm="8" lg="4" class="d-flex flex-wrap">
        <!-- БЛОК с альбомом -->
        <b-col cols="3" class="">
          <b-img
            class="mb-3 img-100-auto"
            :src="dataset.ProductCard.ProductCardImage.url"
            @click="MainTrue"
          />
          <b-img
            v-for="(data, index) in dataset.ProductCard.album"
            :key="data.id"
            class="mb-3 img-100-auto"
            :src="data.url"
            @click="MainUrl(index)"
          />
        </b-col>
        <!-- БЛОК с альбомом -->
        <b-col cols="8">
          <div>
            <b-img class="img-100 hover-img" :src="UrlMain" />
            <!--                        <ProductZoomer :base-images="UrlMain"/>-->
          </div>
        </b-col>
      </b-col>
      <b-col class="mt-lg-0 mt-2" lg="7" cols="12">
        <h2 class="d-none d-lg-block wbba">
          {{ dataset.ProductCard.name }}
          <Chosen
            :id="dataset.ProductCard.id"
            class-chosen="icons-chosen__blog"
            :link="dataset"
          />
        </h2>
        <b-row class="mb-3 align-items-center mt-3">
          <b-col class="mb-2" cols="12">
            <b>Производитель</b> :
            <nuxt-link
              class="text-decoration-none text-436174 link-danger"
              :to="'/search?filter_brands=' + dataset.ProductCard.brand.id"
            >
              {{ dataset.ProductCard.brand.name }}
            </nuxt-link>
          </b-col>
          <b-col class="mb-2" cols="12">
            <b>Артикул</b>: <span>{{ dataset.ProductCard.sku.original }}</span>
          </b-col>
          <b-col
            v-if="dataset.ProductCard.categories.length !== 0"
            class="mb-2"
            cols="12"
          >
            <b>Категория</b> :
            <nuxt-link
              v-for="dataCategories in dataset.ProductCard.categories"
              :key="dataCategories.id"
              class="text-decoration-none text-436174 pr-1 link-danger"
              :to="'/search?filter_categories=' + dataCategories.id"
            >
              {{ dataCategories.name }}
            </nuxt-link>
          </b-col>
          <b-col
            v-if="dataset.ProductCard.applicabilities.length !== 0"
            class="mb-2"
            cols="12"
          >
            <b>Применяемость (для а/м)</b> :
            <nuxt-link
              v-for="dataApplicabilities in dataset.ProductCard.applicabilities"
              :key="dataApplicabilities.id"
              class="text-decoration-none text-436174 pr-1 link-danger"
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
          v-if="dataset.productOffer.length !== 0"
          no-gutters
          class="justify-content-between align-items-center mb-2"
        >
          <h4><b>Предложение</b></h4>
          <div v-if="userType === 'wholesale'">Уровень цен: Оптовый</div>
          <div v-else>Уровень цен: Розничный</div>
        </b-row>
        <TableOffer
          :linkoffset="dataset.productOffer"
          :link-product="dataset.ProductCard"
        />
        <ModalBuy />
      </b-col>
    </b-row>
    <h4 v-if="analogs.length !== 0" class="mb-4">Аналоги и заменители</h4>
    <Table
      v-if="analogs.length !== 0"
      class="mb-4"
      :array="analogs"
      :check-analogs="true"
    />
    <h5
      v-if="dataset.ProductCard.ProductCardOem.length !== 0"
      class="mb-3 text-515151"
    >
      Кроссы по ОЕМ-номерам и аналогам
    </h5>
    <b-row class="justify-content-between col-12" lg="8">
      <b-col
        v-for="oem in dataset.ProductCard.ProductCardOem"
        :key="oem"
        cols="12"
        sm="6"
        lg="4"
        class="mb-1"
      >
        <nuxt-link
          :to="'/search?filter_substr=' + oem"
          class="pr-3 link-danger text-436174"
        >
          {{ oem }}
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Table from "@/components/table/product/table-product-get";
import ModalBuy from "@/components/modal/buy-product";
import TableOffer from "@/components/table/table-offset-get";
import Share from "@/components/modal/share";
import mixins from "@/mixins/product/album";
import ButtonReplyShow from "@/components/base/button/button-reply-show";
import TableProductGet from "~/components/table/product/table-product-get";

export default {
  components: {
    TableProductGet,
    ButtonReplyShow,
    Share,
    TableOffer,
    ModalBuy,
    Table,
  },
  mixins: [mixins],
  props: {
    dataset: {},
  },
  computed: {
    analogs() {
      return this.$store.getters["Products/analogs/GetProducts"];
    },
    userType() {
      return this.$store.getters["User/FormData"].type;
    },
  },
  created() {
    this.MainTrue();
  },
};
</script>
