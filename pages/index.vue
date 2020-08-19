<template>
  <main>
      <VueNewsIndex/>
  </main>
</template>

<script>
import VueNewsIndex from "../components/News/index"
export default {
    components:{
        VueNewsIndex
    },
    async fetch({store}){
        await store.dispatch("News/NewsIndex/_NewsIndex");
    }
}
</script>

<style>

</style>