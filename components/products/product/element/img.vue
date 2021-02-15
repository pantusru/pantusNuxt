<template>
  <div class="text-center">
    <b-img
      :class="{ 'cursor-pointer': getModal }"
      class="w-75"
      fluid
      :src="product.ProductCard.ProductCardImage.url"
      :alt="product.ProductCard.name"
      @click="getImg"
    />
  </div>
</template>

<script>
import Mixin from "@/mixins/modal/product-img";
export default {
  mixins: [Mixin],
  props: {
    product: {},
  },
  data() {
    return {
      getModal: false,
    };
  },
  created() {
    if (
      this.product.ProductCard.ProductCardImage.url !==
      "https://www.pantus.ru/bitrix/images/iblock/no_product.png"
    ) {
      this.getModal = true;
    }
  },
  methods: {
    getImg() {
      if (this.getModal === true) {
        this.ModalImg(this.product);
      }
    },
  },
};
</script>
