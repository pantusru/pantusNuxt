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
  components: {
    BaseTitleInfo,
    MyOrderBLog,
  },
  mixins: [PageMixins],
  computed: {
    MyOrder() {
      return this.$store.getters["MyOrder/GetMyOrder"];
    },
    MyOrderCount() {
      return this.$store.getters["MyOrder/GetCount"];
    },
    countPage() {
      const data = Math.ceil(this.MyOrderCount / 15);
      if (data === 0) {
        return 1;
      } else {
        return data;
      }
    },
  },
  watch: {
    async $route() {
      window.scrollTo(0, 0);
      let page;
      if (this.$route.query.page === undefined) {
        page = 1;
      } else {
        page = this.$route.query.page;
      }
      await this.$store.dispatch("MyOrder/_MyOrderAll", { page });
    },
  },
};
</script>

<style></style>
