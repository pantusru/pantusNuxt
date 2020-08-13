<template>
  <div>
  <b-dropdown id="dropdown-1" text="О компании" class="p-0 bg-white">
    <b-dropdown-item 
        link-classes="text-body link-danger font-weight-bold" 
        v-for="data in links" :key="data.id">
            {{ data.text }}
        </b-dropdown-item>
  </b-dropdown>
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