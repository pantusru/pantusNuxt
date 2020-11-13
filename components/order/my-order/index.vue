<template>
  <div class="mt-4">
    <MyOrderBLog v-if="MyOrder !== null" v-for="data in MyOrder" :key="data.id" :data="data" />
    <b-pagination-nav
        v-if="MyOrder !== null"
      :link-gen="linkGen"
      :number-of-pages="MyOrder.length"
      use-router
      align="center"
      />
    <base-title-info v-else text="У вас нету заказов" />
  </div>
</template>

<script>
import PageMixins from "@/mixins/page/index";
import MyOrderBLog from "@/components/order/my-order/order-blog-get";
import BaseTitleInfo from "@/components/base/title/base-title-info";
export default {
  mixins: [PageMixins],
  computed: {
    MyOrder() {
      return this.$store.getters["MyOrder/GetMyOrder"];
    },
  },
  components: {
    BaseTitleInfo,
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
