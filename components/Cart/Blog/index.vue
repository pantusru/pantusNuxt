<template>
  <b-row class="mt-3">
      <b-col cols="11" sm="6" lg="4" v-for="(data, index) in Cart" :key="data.id">
      <BlogCart :datasetProduct="data" :index="index" />
      </b-col>
  </b-row>
</template>

<script>
import BlogCart from "@/components/Cart/Blog/cart-blog-get"
export default {
    components:{
        BlogCart,
    },
    computed:{
        Cart(){
            return this.$store.getters["Cart/CartAll/GetCartProduct"];
        }
    }
}
</script>

<style>

</style>

