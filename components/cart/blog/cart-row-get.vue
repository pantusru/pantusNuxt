<template>
  <b-row class="mt-3">
      <b-col class="mb-3" cols="11" sm="6"  v-for="(data, index) in Cart" :key="data.id">
      <BlogCart :datasetProduct="data" :index="index" />
      </b-col>
  </b-row>
</template>

<script>
import BlogCart from "@/components/cart/blog/cart-blog-get"
export default {
  name:"cart-row-get",
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

