<template>
<section class=""  v-if="NewsPage">
    <div class="container">
        <h3 class="mb-3">Новости</h3>
        <NewsPageIndex :dataset="NewsPage" :Count="CountPage" />
    </div>
</section>

</template>

<script>
import NewsPageIndex from "~/components/news/page"
export default {
    async fetch({query, store, getters,params}){
        await store.dispatch("News/NewsCategoriesPage/_NewsCategoriesPage", {page:query.page, id:params.id});
    },
    methods: {
        async Add(){ // Закачка товара при клике на ссылку
            await this.$store.dispatch("News/NewsCategoriesPage/_NewsCategoriesPage", {page:this.$route.query.page, id:this.$route.params.id })
        }
    },
    components:{
        NewsPageIndex,
    },
    computed:{
        NewsPage(){
          return this.$store.getters['News/NewsCategoriesPage/GetNewsVisible']
        },
      CountPage(){
          return this.$store.getters['News/NewsCategoriesPage/GetPage']
        }
    },
    watch:{ // при изменения page
        async $route() {
            window.scrollTo(0, 0);
            await this.Add();
        }
    }
}

</script>
