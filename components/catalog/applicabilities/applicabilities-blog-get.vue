<template>
  <b-col cols="12" lg="2" sm="6" md="4" v-if="dataset.visible">
    <nuxt-link
      :to="'/carbrands/' + dataset.code"
      class="catalog-blog-link mb-2 d-block text-decoration fz-3"
    >
      {{ dataset.name }}
    </nuxt-link>
  </b-col>
</template>

<script>
export default {
  name: "applicabilities-blog-get",
  props: ["dataset"],
};
</script>
