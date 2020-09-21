<template>
    <div class="d-flex flex-column">
        <div class="mb-5">
            <div class="mb-2">{{User.surname}} {{User.name}} </div>
            <div>{{User.login}}</div>
        </div>
        <nuxt-link to="/profile">Личный кабинет</nuxt-link>
        <nuxt-link to="">История заказов</nuxt-link>
        <nuxt-link to="/selected">Избранные товары</nuxt-link>
    </div>
</template>

<script>
export default {
    name:"NavProfile",
    computed:{
        User(){
            return this.$store.getters["User/FormData"];
        }
    },

}
</script>

<style>

</style>