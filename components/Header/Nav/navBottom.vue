<template>
  <div class="container">
  <b-nav class="d-none d-lg-flex align-items-center">
      <!-- Выплывающий список все запчасти -->
        <VueDropdown/>
        <!-- Выплывающий список все запчасти -->
        <b-nav-item 
        link-classes="text-body link-danger font-weight-bold fz-5" 
        v-for="data in links" :key="data.id">
            {{ data.text }}
        </b-nav-item>
  </b-nav>
</div>
</template>

<script>
import VueDropdown from "../Dropdown/Navbottom"
export default { 
    data(){
        return{
            links:[
                {to:"", text:"Оригинальные каталоги"},
                {to:"", text:"Иномарки"},
                {to:"", text:"Ваз"},
                {to:"", text:"Камаз"},
                {to:"", text:"Газ"},
                {to:"", text:"Рти"},
                {to:"", text:"Популярные"},
                {to:"", text:"Новинки"},
            ]
        }
    },
    components:{
        VueDropdown  
    }
}
</script>

<style>

</style>