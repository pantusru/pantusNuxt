<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm"> <!-- Спиннер для всего сайта компонент bootstrap 4 -->
      <VueHeader class="mb-5"/> <!-- Шапка сайта -->
      <Nuxt/>
    </b-overlay>
  </div>
</template>
<script>
import VueHeader from "../components/Header/Index"
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
    watch:{ // при изменения url 
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


