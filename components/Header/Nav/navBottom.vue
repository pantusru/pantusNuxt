<template>
  <div class="container">
  <b-nav class="d-none d-lg-flex">
        <b-nav-item 
        link-classes="text-body link-danger font-weight-bold" 
        v-for="data in links" :key="data.id">
            {{ data.text }}
        </b-nav-item>
  </b-nav>
</div>
</template>

<script>
export default {
    data(){
        return{
            links:[
                {to:"", text:"Все запчасти"},
                {to:"", text:"Оригинальные каталоги"},
                {to:"", text:"Иномарки"},
                {to:"", text:"Ваз"},
                {to:"", text:"Камаз"},
                {to:"", text:"Газ"},
                {to:"", text:"Рти"},
                {to:"", text:"Популярные"},
                {to:"", text:"Новинки"},
            ]
        }
    }
}
</script>

<style>

</style>