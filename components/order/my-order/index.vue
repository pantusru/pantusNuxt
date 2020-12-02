<template>
  <div class="mt-4">
    <template v-if="MyOrder !== null">
      <MyOrderBLog v-for="data in MyOrder" :key="data.id" :data="data" />
    </template>
    <b-pagination-nav
      v-if="MyOrder !== null && countPage !== 1"
      limit="3"
      hide-goto-end-buttons
      size="sm"
      :value="$route.query.page || 1"
      first-number
      last-number
      align="center"
      :link-gen="linkGen"
      :number-of-pages="countPage"
      use-router
    />
    <base-title-info v-if="MyOrder === null" text="У вас нету заказов" />
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
    countPage() {
      const data = Math.ceil(this.MyOrder.length / 4);
      if (data === 0) {
        return 1;
      } else {
        return data;
      }
    },
  },
  components: {
    BaseTitleInfo,
    MyOrderBLog,
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
