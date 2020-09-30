<template>
    <div class="page-news">
        <b-row>
            <VueBlogNews v-for="data in dataset" :key="data.id" :data="data" />
        </b-row>   
        <div class="overflow-auto">
            <b-pagination-nav :link-gen="linkGen" :number-of-pages="Kovlo" use-router align="center"></b-pagination-nav>
        </div>
    </div>
</template>

<script>
import VueBlogNews from "./blog"
export default {
    props:{
        dataset:{},
        Kovlo:{},
    },
    methods: {
        linkGen(pageNum) { // генерация ссылок Page
            return pageNum === 1 ? '?' : `?page=${pageNum}`
        },
    },
    components:{
        VueBlogNews,
    },
}
</script>