<template>
  <b-container>
    <b-row>
      <NavProfile />
      <b-col>
        <h1>Мой Заказы</h1>
        <MyOrder />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MyOrder from "@/components/order/my-order/index";
import NavProfile from "@/components/nav/profile/index";
export default {
  components: {
    NavProfile,
    MyOrder,
  },
  middleware: "CheckGuest",
  async fetch({ store, dispatch, query }) {
    let page;
    if (query.page === undefined) {
      page = 1;
    } else {
      page = query.page;
    }
    await store.dispatch("MyOrder/_MyOrderAll", { page });
  },
};
</script>

<style></style>
