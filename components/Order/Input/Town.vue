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
export default {
    inject:["$v", "VuexSrc"],
    mixins:[mixitProps],
    data() {
        return {
            nameSet: "Order/Form/SetFull",
            itemsTown: [],
            timerId: null,
            value: "",
            valueId : "",
        }
    },
    props:{
        name:{}
    },
    watch:{
        value(){
            console.log(this.value);
            this.$v.Form[this.name].$touch();
            this.$store.commit(this.nameSet, {data:this.VuexSrc, name: "Town", value:this.value});
            this.$store.commit(this.nameSet, {data:this.VuexSrc, name: "TownId", value:this.valueId});
        }
    }, 
    methods:{
        async GetData(data){
            this.valueId = data.id;
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
        SetValue(data){
            if(this.timerId !=null){
                clearTimeout(this.timerId);
            }
            this.timerId = setTimeout(this.GetData, 1000 , data);
        },
    },
    components:{
        autocomplete,
    }
}
</script>

<style>

</style>