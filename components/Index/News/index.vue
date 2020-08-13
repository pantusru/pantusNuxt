<template>
    <section class="my-5">
        <div class="container">
            <h2 class="mb-3">Новости</h2>
            <b-row v-if="NewsIndex">
                <!-- Одна новость -->
                <b-col cols=12 md="6" lg=4 class="mb-4" v-for="data in NewsIndex" :key="data.id">
                    <b-row no-gutters>
                        <b-col cols="5">
                            <img class="img-100" :src="MediaUrl + data.image" alt="">
                        </b-col>
                        <b-col cols="7" class="pl-3">
                            <div class="date">
                                <time class="day">{{ data.created_at[0].day }} </time>
                                <time class="month">{{data.created_at[0].month}}</time>
                                <time class="year">{{data.created_at[0].year}}</time>
                            </div>
                            <nuxt-link class="text-body fz-5" :to="'news/' + data.id">{{data.title}}</nuxt-link>
                        </b-col>
                    </b-row>
                    <p class="mt-3 fz-5">{{data.body_text_preview}}</p>
                </b-col>
                <!-- Одна новость -->
            </b-row>
            <b-link to="news/" class=" d-block text-center text-body link-danger"> <b>Все новости</b></b-link>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            MediaUrl: process.env.apiMedia,
        }
    },
    computed:{
        NewsIndex(){ 
            return this.$store.getters['News/NewsIndex/GetNewsIndex']
        }
    }
}
</script>

<style>
 
</style>