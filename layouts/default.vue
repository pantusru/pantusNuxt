<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm">
      <VueHeader/>
      <Nuxt />
    </b-overlay>
  </div>
</template>
<script>
import VueHeader from "../components/Header/index"
  export default {
    components:{
      VueHeader,
    },
    computed:{
      show(){
        return this.$store.getters["Getshow"];
      }
    },
    mounted(){
      this.$store.commit("SetShow", false);
    },
    watch:{ // при изменения page 
      $route() {
        this.$store.commit("SetShow", true);
      }
    },
    updated(){
      this.$store.commit("SetShow", false);
    }
}
</script>

<style>
</style>
