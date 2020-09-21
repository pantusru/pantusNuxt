<template>
    <b-container>
        <b-row>
            <b-col cols="3">
                <NavProfile/>
            </b-col>
            <b-col>
                <div>
                    <h2 class="mb-4"> Личные данные </h2>
                    <ElementForm name="login" :items="'Логин (e-mail):'"  />
                    <ElementForm name="name" :items="'Имя:'"  />
                    <ElementForm name="surname" :items="'Фамилия:'"  />
                    <ElementForm name="patronymic" :items="'Отчество:'"/>
                    <ElementForm name="telephone" :items="'Телефон:'" />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
// УКАЗАТЬ mixit 
import ElementForm from "@/components/Profile/input"
import NavProfile from "@/components/Nav/Profile/index"
export default {
    components:{
        ElementForm,
        NavProfile
    },
    computed:{
        Form(){
            return this.$store.getters["User/FormData"];
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