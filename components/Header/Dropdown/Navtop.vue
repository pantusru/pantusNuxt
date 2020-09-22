<template>
    <b-nav-item-dropdown
        no-caret
        id="my-nav-dropdown"
        text="О компании"
        toggle-class="nav-link-custom text-body px-0"
        center
    >
        <b-dropdown-item :to="data.to" v-for="data in links" :key="data.id">{{ data.text }}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
export default {
    data(){
        return{
            links:[
                {to:"", text:"О компании"},
                {to:"", text:"Работа в компании"},
                {to:"", text:"ОПТ"},
                {to:"", text:"Поставщикам"},
                {to:"", text:"Документы и реквизиты"},
                {to:"", text:"Дилерские сертификаты"},
            ]
        }
    }
}
</script>

<style>

</style>