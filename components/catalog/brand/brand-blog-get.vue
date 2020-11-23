<template>
  <b-col lg="3" cols="12" sm="6" md="4" class="mb-4 brand-blog">
    <div class="mb-2 catalog-blog-name">{{ source.name }}</div>
    <div class="d-flex flex-column">
      <nuxt-link
        class="catalog-blog-link text-decoration"
        :to="'/search?filter_brands=' + source.id"
        >Перейти к товарам
      </nuxt-link>
      <nuxt-link to="" class="catalog-blog-link text-decoration"
        >О брэнде
      </nuxt-link>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "brand-blog-get",
  props: {
    source: {
      type: Object
    }
  }
};
</script>
<style></style>
