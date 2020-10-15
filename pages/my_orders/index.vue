<template>
  <b-container>
    <b-row>
      <b-col cols="3">
        <NavProfile />
      </b-col>
      <b-col>
            <h1>Мой Заказы</h1>
            <MyOrder/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MyOrder from "@/components/Order/MyOrder/index"
import NavProfile from "@/components/Nav/Profile/index"
export default {
    components:{
        NavProfile,
        MyOrder
    }
};
</script>

<style>
</style>