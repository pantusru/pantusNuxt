<template>
  <div class="home">
    <b-overlay :show="show" rounded="sm"> <!-- Спиннер для всего сайта компонент bootstrap 4 -->
      <VueHeader class="mb-5"/> <!-- Шапка сайта -->
      <!-- <Nuxt v-if="loaderUser"/> -->
      <Nuxt v-if="loaderUser"/>
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
      },
      loaderUser(){
        return this.$store.getters["User/Loader"];
      },
    },
    mounted(){ // при прогрузке странице
      this.$store.commit("SetShow", false);
      this.GetUser();  
    },
    watch:{ // при изменения url 
      $route() {
        this.$store.commit("SetShow", true);
      }
    },
    updated(){// при обновление страницы
      this.$store.commit("SetShow", false);
    },
    methods:{
      async GetUser(){ // Загрузка Данных User
        await Promise.all([
          this.$store.dispatch("User/_User"),
          this.$store.dispatch("Cart/CartAll/_CartProduct")
        ])
      }
    }
}
</script>




