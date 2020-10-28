<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm"> <!-- Спиннер для всего сайта компонент bootstrap 4 -->
      <VueHeader class="mb-5"/> <!-- Шапка сайта -->
      <Nuxt/>
      <VueFooter/>
    </b-overlay>
  </div>
</template>
<script>
import VueHeader from "@/components/Header/index"
import VueFooter from "@/components/Footer/index"
  export default {
    components:{
      VueHeader,
      VueFooter
    },
    computed:{
      show(){
        return this.$store.getters["GetshowLoader"];
      },
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
    },
}
</script>




