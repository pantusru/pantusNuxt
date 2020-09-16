<template>
    <b-container>
        <b-row>
            <b-col cols="3">
                <div class="mb-5">
                    <div class="mb-2">Максим Семенов</div>
                    <div>m.semenov@pantus.ru</div>
                </div>
                 <div class="d-flex flex-column">
                    <nuxt-link to="">Личный кабинет</nuxt-link>
                    <nuxt-link to="">История заказов</nuxt-link>
                    <nuxt-link to="">Избранные товары</nuxt-link>
                 </div>
            </b-col>
            <b-col>
                <div>
                    <h2 class="mb-4"> Личные данные </h2>
                    <ElementForm name="login" :items="'Логин (e-mail):'"  :value="'m.semenov@pantus.ru'" />
                    <ElementForm name="name" :items="'Имя:'" :value="'Максим'" />
                    <ElementForm name="surname" :items="'Фамилия:'"  :value="'Семенов'" />
                    <ElementForm name="patronymic" :items="'Отчество:'" :value="'Александрович'" />
                    <ElementForm name="telephone" :items="'Телефон:'"  :value="'+7 (937) 147-91-57'" />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// УКАЗАТЬ mixit 
import ElementForm from "@/components/Profile/input"
export default {
    components:{
        ElementForm,
    },
    computed:{
        Form(){
            return this.$store.getters["User/index/FormData"];
        }
    },
    provide(){
        return{
            // $v: this.$v,
            VuexSrc: this.Form
        }
    },
}
</script>

<style>

</style>