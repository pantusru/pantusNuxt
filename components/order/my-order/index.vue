<template>
  <div class="mt-4">
    <MyOrderBLog v-for="data in MyOrder" :key="data.id" :data="data" />
    <b-pagination-nav
      :link-gen="linkGen"
      :number-of-pages="MyOrder.length"
      use-router
      align="center"
      />
  </div>
</template>

<script>
import PageMixins from "@/mixins/page/index";
import MyOrderBLog from "@/components/order/my-order/order-blog-get";
export default {
  mixins: [PageMixins],
  computed: {
    MyOrder() {
      return this.$store.getters["MyOrder/GetMyOrder"];
    },
  },
  components: {
    MyOrderBLog,
  },
   watch:{
      $route(){
        window.scrollTo(0, 0);
      }
  }
}
</script>

<style>
</style>
