<template>
    <b-container>
        <Vinput
            class="w-25 mx-auto" 
            :data="dataset"
        /> 
         <h1>Применимости</h1>
         {{dataset }}
    </b-container>
</template>

<script>
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
    },
    computed:{
        dataset(){
            return this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]
        }   
    }
}
</script>

<style>

</style>