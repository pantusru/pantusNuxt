<template>
    <b-container>
        <Vinput
            class="w-25 mx-auto" 
            :data="dataset"
        /> 
        <h1 class="mb-5">Применимости</h1>
        <b-row>
            <Applicabilities :dataset="data" v-for="data in dataset" :key="data.id" />
        </b-row>
    </b-container>
</template>

<script>
import Applicabilities from "@/components/Catalog/Applicabilities/full"
import Vinput from "@/components/Search/Panel/Input/index"
export default {
    async fetch({query, store, getters, commit}){
        await store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess");
    },
    provide(){
        return{
            SetValue: "Applicabilities/ApplicabilitiessAll/SetApplicabilities"        
        }
    },
    components:{
        Vinput,
        Applicabilities
    },
    computed:{
        dataset(){
            return this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]
        }, 
    },
    created(){
        this.$store.dispatch("Catalog/All/_AllVisible" , this.dataset);
    },
}
</script>

<style>

</style>