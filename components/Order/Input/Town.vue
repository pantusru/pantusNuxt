<template>
  <div class="w-75">
      <b-input @input="goTown" v-model="value" size="sm" :id="name">

      </b-input>
  </div>
</template>

<script>
import mixit from "@/mixins/Input/order"
export default {
    mixins:[mixit],
    props:{
        name:{}
    },
    methods:{
        goTown(){
            // console.log(this.value)
            // let data = this.$store.dispatch("API/axios/_API_Town", this.value);
            // console.log(data);
        }
    },
}
</script>

<style>

</style>