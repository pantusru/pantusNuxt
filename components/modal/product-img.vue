<template>
  <b-modal id="img" hide-footer @show="MainTrue">
    <div v-if="dataset != undefined">
      <div class="col-7 mb-4">
        <b-img class="img-100" :src="UrlMain" />
      </div>
      <b-row>
        <!-- БЛОК с альбомом -->
        <b-col cols="2">
          <b-img
            class="img-100 cursor-pointer"
            :src="dataset.ProductCard.ProductCardImage.url"
            :alt="dataset.ProductCard.name"
            @click="MainTrue()"
          />
        </b-col>
        <b-col
          v-for="(data, index) in dataset.ProductCard.album"
          :key="data.id"
          cols="2"
        >
          <!-- БЛОК с альбомом -->
          <b-img
            class="img-100 cursor-pointer"
            :src="data.url"
            :alt="data.url"
            @click="MainUrl(index)"
          />
        </b-col>
      </b-row>
      <div>
        <h3 class="text-left ml-3 mt-4 wbba">{{ dataset.ProductCard.name }}</h3>
      </div>
    </div>
  </b-modal>
</template>

<script>
import mixins from "@/mixins/product/album";
export default {
  mixins: [mixins],
  computed: {
    dataset() {
      return this.$store.getters["Modal/GetModaImgLinkProduct"];
    },
  },
};
</script>
