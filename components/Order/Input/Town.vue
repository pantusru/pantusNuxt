<template>
  <div>
      <div class="d-flex justify-content-between">
            <label class="mr-3  pl-0" :for="name">{{ items }}</label>
            <b-input class="w-75" v-on:input="goTown" v-model="value" size="sm" :id="name"></b-input>
      </div>
        <div class="error-full text-center">
            <div class="error" v-for="data in error" :key="data.id">
                <span v-if="!$v.Form[name][data.ifv] && $v.Form[name].$dirty">{{data.text}} </span>     
            </div>
        </div>
    </div>
</template>

<script>
import mixitProps from "@/mixins/Input/Props/index"
import mixit from "@/mixins/Input/VuexInput"
export default {
    data() {
        return {
            nameSet: "Order/Form/SetFull"
        }
    },
    mixins:[mixit,mixitProps],
    props:{
        name:{}
    },
    methods:{
        goTown(){
            // let data = this.$store.dispatch("API/axios/_API_Town", this.value);
            // console.log(data);
        }
    },
}
</script>

<style>

</style>