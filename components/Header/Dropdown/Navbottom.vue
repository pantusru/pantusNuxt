<template>
   <b-nav-item-dropdown center  no-caret toggle-class="text-body link-danger font-weight-bold fz-5">
    <!-- Using 'button-content' slot -->
    <template slot="button-content">
        <b-icon-justify></b-icon-justify>
        <em>Все запчасти</em>
    </template>
     <b-dropdown-item :to="data.to" v-for="data in links" :key="data.id">{{ data.text }}</b-dropdown-item>
</b-nav-item-dropdown> 
</template>
 

<script>
export default {
    data(){
        return{
            links:[
                {to:"", text:"Бренды запчастей"},
                {to:"", text:"Марки автомобилей"},
                {to:"", text:"Категории запчастей"},
                {to:"", text:"Масло  и автохимия"},
                {to:"", text:"Антифризы, толосы"},
                {to:"", text:"Каталоги оригинальных запчастей"},
            ]
        }
    }
}
</script>

<style>

</style>