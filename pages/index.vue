<template>
  <main>
      <VuepopularProduct/>
      <VueNewsIndex/>
  </main>
</template>

<script>
import VueNewsIndex from "../components/News/index"
import VuepopularProduct from "../components/Index/Carousel/popularProduct"
export default {
    components:{
        VuepopularProduct,
        VueNewsIndex
    },
    async fetch({store}){
        await store.dispatch("News/NewsIndex/_NewsIndex");
    }
}
</script>

<style>

</style>