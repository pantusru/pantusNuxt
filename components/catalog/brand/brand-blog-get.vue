<template>
  <b-col lg="3" cols="12" sm="6" md="4" class="mb-4 brand-blog">
    <div class="mb-2 catalog-blog-name">{{ source.name }}</div>
    <div class="d-flex flex-column align-items-start">
      <nuxt-link
        class="catalog-blog-link text-decoration"
        :to="'/search?filter_brands=' + source.id"
        >Перейти к товарам
      </nuxt-link>
      <nuxt-link
        v-if="source.active"
        :to="'brands/' + source.code"
        class="catalog-blog-link text-decoration"
        >О бренде
      </nuxt-link>
      <!--      <span v-else>О брэнде</span>-->
    </div>
  </b-col>
</template>

<script>
export default {
  name: "BrandBlogGet",
  props: {
    source: {
      type: Object,
    },
  },
};
</script>
<style></style>
