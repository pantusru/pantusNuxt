<template>
  <b-navbar class="fz-5" toggleable="lg" variant="light">
        <div class="container">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!-- Выплывающий список и прост ссылка -->
                    <VueDropdown class="d-none d-lg-block" />
                    <b-nav-item to="" link-classes="text-body link-danger d-lg-none">О компании </b-nav-item> 
                    <!-- Выплывающий список и прост ссылка -->
                    <b-nav-item :to="data.to"
                    link-classes="text-body link-danger"  
                    v-for="data in links" :key="data.id"> 
                        {{ data.text }}
                    </b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                     <b-nav-item href="tel:88005558721"> <strong>(800) 555 87 21</strong></b-nav-item>
                     <b-nav-text >Звонок по РФ - бесплатный</b-nav-text>
                </b-navbar-nav>
            </b-collapse>
            </div>
  </b-navbar>
</template>

<script>
import VueDropdown from "@/components/Header/Dropdown/Navtop"
export default {
    name: "NavTop", 
    data(){
        return{
            links:[
                {to:"", text:"Мобильное приложение"},
                {to:"", text:"Доставка"},
                {to:"", text:"Оплата"},
                {to:"/news/", text:"Новости"},
                {to:"", text:"Помощь"},
                {to:"", text:"Контакты"},
            ]
        }
    },
    components:{
        VueDropdown,
    }
}
</script>

<style>
 
</style>