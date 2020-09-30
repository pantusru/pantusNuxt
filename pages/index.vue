<template>
  <main>
      <!-- <VueNewsIndex/> Популярные новости -->
      <VueProductsIndex/> <!-- Популярные Товары -->
  </main>
</template>

<script>
import VueNewsIndex from "@/components/News/index"
import VueProductsIndex from "@/components/Products/Popular/index"
export default {
    components:{
        VueNewsIndex,
        VueProductsIndex
    },
    async fetch({store}){
        await Promise.all([
            // store.dispatch("News/NewsIndex/_NewsIndex"),
            store.dispatch("Products/_ProductAll"),
            store.dispatch("Cart/CartAll/_CartProduct"), // Товар в корзине
        ])
    },
}
</script>

