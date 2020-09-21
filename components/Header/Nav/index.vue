<template>
 <div class="container">
  <b-navbar toggleable="lg">
      <!-- Логотип -->
    <b-navbar-brand to="/"><img src="~assets/img/logo.png" alt="Логотип сайта"></b-navbar-brand>
      <!-- center -->
        <b-navbar-nav class="flex-row col-12 col-lg-6 order-4 order-lg-0 mt-2 mt-lg-0 align-items-center">
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
      <b-navbar-nav class="ml-0 ml-lg-auto flex-row fz-5">
        <div class="d-flex mr-5 align-items-center">
            <div class="icons-nav"><img src="~/assets/img/icons/icon-avatar.png" alt="Иконка пользователя"/></div>
            <div class="d-flex flex-column ml-3" v-if="User.id == ''">
                <nuxt-link to="" v-b-modal.authorization class="text-secondary link-danger">Вход</nuxt-link>
                <nuxt-link to="/register" class="text-secondary link-danger">Регистрация</nuxt-link>
            </div>
            <div class="ml-3" v-if="User.id != ''">
               <NavUser :userName="User.surname +' '+ User.name"/>
            </div>
        </div>
        <nuxt-link to="/cart" class="d-flex align-items-center link-decoration-none">
            <div class="icons-nav"><img src="~/assets/img/icons/icon-shopping-cart.png" alt=""/></div>
            <div class="d-flex flex-column ml-3 text-secondary">
                <div><span>Корзина</span><b>: 2</b></div>
                <strong>1200 р</strong>
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
        }
    },
}
</script>

<style>
    .icons-nav{
        width: 20px;
    }
</style>