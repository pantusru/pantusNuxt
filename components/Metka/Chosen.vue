<template>
    <b-icon-bookmark-plus @click="SetChosen" class="cursor-pointer h4 d-none-chosen"></b-icon-bookmark-plus>
</template>

<script>
export default {
    props:{
        id:{
            type: Number,
        }
    },
    methods:{
        SetChosen(){
            console.log('Сохраненно в избранное');
        }
    }
}
</script>

<style>
 svg.d-none-chosen{
    display: none !important;
 }
.d-none-chosen:hover , .activ{
    color: red!important;
}
</style>