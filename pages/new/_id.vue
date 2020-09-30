<template>
<div class="container">
    <div class="content" v-html="NewsId.body">

    </div>
</div>
</template>

<script>
import VueBlogNews from "@/components/News/blog"
export default {
    async fetch({query, store, getters,params}){
        await store.dispatch("News/NewsId/_NewsId", params.id);
    },
    computed:{
        NewsId(){ 
            return this.$store.getters['News/NewsId/GetNewsId']
        },
    },
    components:{
        VueBlogNews,
    },
    mounted(){
        let img = document.querySelectorAll(".content img")
        img.forEach(element => {
             console.log(element);
           console.log(element.getAttribute("src"));
           element.setAttribute("src" , process.env.apiMedia + element.getAttribute("src"));
       });
    }
    
}
</script>