<template>
  <div class="container">
  <b-nav class="d-none d-lg-flex align-items-center">
      <!-- Выплывающий список все запчасти -->
        <VueDropdown/>
        <!-- Выплывающий список все запчасти -->
        <b-nav-item 
        :to="data.to"
        link-classes="text-555 link-ec0e1d font-weight-bold fz-5" 
        v-for="data in links" :key="data.id">
            {{ data.text }}
        </b-nav-item>
  </b-nav>
</div>
</template>

<script>
import VueDropdown from "../Dropdown/Navbottom"
export default {
    name: "NavBottom", 
    data(){
        return{
            links:[
                {to:"", text:"Оригинальные каталоги"},
                {to:"search?applicabilities=3138", text:"Ваз"},
                {to:"search?applicabilities=4921", text:"Камаз"},
                {to:"search?applicabilities=3140", text:"Газ"},
                {to:"search?categorie=264", text:"Рти"},
                {to:"", text:"Популярные"},
                {to:"", text:"Новинки"},
            ]
        }
    },
    components:{
        VueDropdown  
    },
}
</script>