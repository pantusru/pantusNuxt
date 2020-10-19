<template>
 <div class="container">
  <b-navbar toggleable="lg" class="px-0">
      <!-- Логотип -->
    <b-navbar-brand to="/"><img src="~assets/img/logo.png" alt="Логотип сайта"></b-navbar-brand>
      <!-- center -->
        <b-navbar-nav class="flex-row col-12 col-lg-7 order-4 order-lg-0 mt-2 mt-lg-0 align-items-center">
            <input 
                v-model="search"  
                class=" border-danger border-right-0 w-100 p-2 rounded-left bl-0" 
                placeholder="Введите номер или название детали"
            />
            <nuxt-link 
                :to="'/search?name=' +  search"   
                class="bg-danger px-2 py-2 border-danger rounded-right text-light" 
                type="submit">
                    Найти
            </nuxt-link>
        </b-navbar-nav>
        <!-- right -->
      <b-navbar-nav class="ml-0 ml-lg-auto flex-row fz-6">
        <div class="d-flex mr-lg-2 mr-4 align-items-center">
            <div class="icons-nav-w20"><img src="~/assets/img/icons/icon-avatar.png" alt="Иконка пользователя"/></div>
            <div class="d-flex flex-column ml-1" v-if="CheckUser == false">
                <nuxt-link to="" v-b-modal.authorization class="text-secondary link-danger">Вход</nuxt-link>
                <nuxt-link to="/register" class="text-secondary link-danger">Регистрация</nuxt-link>
            </div>
            <div class="" v-if="CheckUser == true">
               <NavUser :userName="User.surname +' '+ User.name"/>
            </div>
        </div>
        <nuxt-link to="/cart" class="d-flex align-items-center link-decoration-none" >
            <div class="icons-nav-w20"><img src="~/assets/img/icons/icon-shopping-cart.png" alt=""/></div>
            <div class="d-flex flex-column text-secondary pl-10px">
                <div><span>Корзина</span><b v-if="GetLength">: {{GetLength}}</b></div>
                <strong v-if="stoimost != 0">{{stoimost  }} р</strong>
            </div>
        </nuxt-link>
      </b-navbar-nav>
    </b-navbar>
    <ModalAuthorization/>
</div>
</template>

<script>
import VueDropdown from "../Dropdown/Navbottom"
import NavUser from "@/components/Header/Dropdown/NavUser"
import ModalAuthorization from "@/components/Modal/authorization"
export default {
    name: "NavIndex",
    data() {
        return {
            search: ''
        }
    },
    components: {
        ModalAuthorization,
        NavUser,
        VueDropdown
    },
    computed:{
        User(){
            return this.$store.getters["User/FormData"];
        },
        CheckUser(){
            return this.$store.getters["User/CheckUser"];
        },
        stoimost(){
            return this.$store.getters["Cart/CartAll/GetSymmaAll"]
        },
        GetLength(){
            return this.$store.getters["Cart/CartAll/GetLength"]
        }
    },
}
</script>
