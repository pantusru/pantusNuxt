<template>
    <b-nav-item-dropdown
        no-caret
        id="my-nav-user"
        :text="userName"
        toggle-class="nav-link-custom text-body"
        center
    >
        <b-dropdown-item class="fz-6" :to="data.to" v-for="data in links" :key="data.id">{{ data.text }}</b-dropdown-item>
         <b-dropdown-item class="fz-6" @click="exitUser">Выход</b-dropdown-item>
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
            ]
        }
    },
    methods:{
        exitUser(){
            this.$store.commit("User/ResetForm");
            this.$store.commit("User/AuthorizationFalse");
            this.$cookies.remove("Authorization");
            this.$router.push({name:"index"});

        }
    }
}
</script>
