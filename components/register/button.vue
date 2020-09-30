<template>
   <div class="col-4 text-center">
        <b-button @click="go" size="md" class="bg-danger border-danger">Зарегистрироваться</b-button>
    </div>
</template>

<script>
export default {
    inject:["$v"],
    methods:{
        go(){
            this.$v.Form.$touch();
            if(this.$v.Form.$error === false){
                // ЗАПРОС С СОХРАНЕНИЕМ НА СЕРВЕР
            }
        }
    }
}
</script>

