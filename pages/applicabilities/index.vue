<template>
    <b-container>
        <Vinput
            class="w-25 mx-auto" 
            :data="dataset"
        /> 
        <h1 class="mb-5">Применимости</h1>
        <b-row>
            <b-col  cols="12" lg="2" v-for="data in dataset" :key="data.id">
                <b-alert :show="true"  variant="secondary"  v-if="data.visible">
                    <nuxt-link :to="'/search?applicabilities=' + data.id" class="text-danger">
                        {{ data.name }}
                    </nuxt-link>
                </b-alert>
            </b-col>
        </b-row>
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