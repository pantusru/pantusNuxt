<template>
    <b-nav-item-dropdown
        no-caret
        id="my-nav-user"
        :text="userName"
        toggle-class="nav-link-custom text-body"
        center
    >
        <b-dropdown-item :to="data.to" v-for="data in links" :key="data.id">{{ data.text }}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
export default {
    props:{
        userName:{
            type: String,
        }
    },
    data(){
        return{
            links:[
                {to:"/profile", text:"Личный кабинет"},
                {to:"/profile", text:"История заказов"},
                {to:"/selected", text:"Избранные товары"},
                {to:"/profile", text:"Выход"},
            ]
        }
    }
}
</script>

<style>

</style>