<template>
<section class="my-5"  v-if="NewsPage"> 
    <div class="container">
        <b-row>
            <VueBlogNews v-for="data in NewsPage" :key="data.id" :data="data" />
        </b-row>   
        <div class="overflow-auto">
            <b-pagination-nav :link-gen="linkGen" :number-of-pages="Kovlo" align="center" use-router></b-pagination-nav>
        </div>
    </div>
</section>
 
</template>

<script>
import VueBlogNews from "~/components/News/blog"
  export default {
      async fetch({query, store, getters}){
          if(query.page != undefined){
              await store.dispatch("News/NewsPage/_NewsPage", query.page)
          }else{
            await store.dispatch("News/NewsPage/_NewsPage")
          }
      },
      data(){
          return{
              Kovlo: this.$store.getters['News/NewsPage/GetPage']
          }
      },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`;
      } 
    }, 
    components:{
        VueBlogNews,
    },
    computed:{
        NewsPage(){ 
            return this.$store.getters['News/NewsPage/GetNewsVisible']
        },
    }
  }
</script>
