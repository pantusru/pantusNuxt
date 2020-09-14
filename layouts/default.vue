<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm">
      <VueHeader class="mb-5"/>
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
    mounted(){ // при прогрузке странице
      this.$store.commit("SetShow", false);
    },
    watch:{ // при изменения page 
      $route() {
        this.$store.commit("SetShow", true);
      }
    },
    updated(){// при обновление страницы
      this.$store.commit("SetShow", false);
    }
}
</script>

<style>
</style>
