<template>
  <div class="text-center">
    <a :href="product.ProductCard.ProductCardImage.url" @click.prevent="" />
    <div @click="getImg">
      <b-img-lazy
        :class="{ 'cursor-pointer': getModal }"
        class="w-75"
        fluid
        :src="product.ProductCard.ProductCardImage.url"
        :alt="product.ProductCard.name"
      />
    </div>
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
      `${process.env.pantus}/bitrix/images/iblock/no_product.png`
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
