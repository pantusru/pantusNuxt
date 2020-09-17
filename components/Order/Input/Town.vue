<template>
  <div>
      <div class="d-flex justify-content-between">
            <label class="mr-3  pl-0" :for="name">{{ items }}</label>
            <autocomplete addClass="w-75" @input="SetValue"  :items="itemsTown"></autocomplete>
            <!-- <b-input class="w-75" v-on:input="goTown" v-model="value" size="sm" :id="name"></b-input> -->
      </div>
        <div class="error-full text-center">
            <div class="error" v-for="data in error" :key="data.id">
                <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty">{{data.text}} </span>     
            </div>
        </div>
    </div>
</template>

<script>
import autocomplete from "@/components/vue-suggestion"
import mixitProps from "@/mixins/Input/Props/index"
import mixit from "@/mixins/Input/VuexInput"
export default {
    data() {
        return {
            nameSet: "Order/Form/SetFull",
            itemsTown: [],
        }
    },
    mixins:[mixit,mixitProps],
    props:{
        name:{}
    },
    methods:{
        async SetValue(data){
            this.value = data.data; 
            let dataset = await this.$store.dispatch("API/axios/_API_Town", this.value);
            let result = dataset.result;
            this.itemsTown = [];
            if(result.length > 1){
                result = result.slice(1, result.length);
                for(let index in result){
                    this.itemsTown.push({
                        id: result[index].id,
                        typeShort: result[index].typeShort,
                        name: result[index].name,
                        parents: result[index].parents,  
                    }); 
                }
            }
        },
    },
    components:{
        autocomplete,
    }
}
</script>

<style>

</style>