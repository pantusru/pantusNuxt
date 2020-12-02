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
  async fetch({ store, dispatch }) {
    await store.dispatch("MyOrder/_MyOrderAll");
  },
  middleware: "CheckGuest",
};
</script>

<style></style>
