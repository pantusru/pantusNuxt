<template>
    <b-col cols=12 md="6" lg=4 class="mb-4">
        <b-row no-gutters>
            <b-col cols="5">
                <b-img-lazy class="img-100" :src="MediaUrl + data.image" alt="" />
            </b-col>
            <b-col cols="7" class="pl-3">
                <div class="date">
                    <time class="day">{{ data.created_at[0].day }} </time>
                    <time class="month">{{data.created_at[0].month}}</time>
                    <time class="year">{{data.created_at[0].year}}</time>
                </div>
                <nuxt-link class="text-body fz-5" :to="'/new/' + data.id">{{data.title}}</nuxt-link>
            </b-col>
        </b-row>
        <p class="mt-3 fz-5">{{data.body_text_preview}}</p>
    </b-col>
</template>

<script>
export default {
    data(){
        return{
            MediaUrl: process.env.apiMedia,
        }
    },
    props:{
        data:{},
    }
}
</script>

<style>

</style>