<template>
<section class="my-5"  v-if="NewsPage"> 
    <div class="container">
        <b-row class="mb-4">
            <b-col cols=12 sm=6 lg=3  v-for="data in CategoriesAll" :key="data.id">
                <NewsCategoriesAll :dataset="data" />
            </b-col>
        </b-row>
        <h3 class="mb-3">Новости</h3>
        <NewsPageIndex :dataset="NewsPage" />
    </div>
</section>
 
</template>

<script>
import NewsCategoriesAll from "~/components/News/Categories/index"
import NewsPageIndex from "~/components/News/page"
export default {
    async fetch({query, store, getters}){
        console.log(query.page);
        await store.dispatch("News/CategoriesAll/_NewsCategories")
        await store.dispatch("News/NewsPage/_NewsPage", query.page);
    },
    methods: {
        async Add(){ // Закачка товара при клике на ссылку
            await this.$store.dispatch("News/NewsPage/_NewsPage", this.$route.query.page)
        }
    }, 
    components:{
        NewsPageIndex,
        NewsCategoriesAll,
    },
    computed:{
        NewsPage(){ 
            return this.$store.getters['News/NewsPage/GetNewsVisible']
        },
         CategoriesAll(){ 
            return this.$store.getters['News/CategoriesAll/GetNewsCategories']
        },
    },
    watch:{ // при изменения page 
        $route() {
            this.Add();
            window.scrollTo(0, 0);
        }
    }
}

</script>
