<template>
    <div>
        <b-button v-if="!check" :class="AddClass" v-b-modal="'authorization'">Оформить заказ</b-button>
        <b-button v-if="check" :class="AddClass"> <nuxt-link to="/order" class="text-white link-decoration-none">Оформить заказ</nuxt-link> </b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            check: null,
            AddClass: "bg-danger border-0"


        }
    },
    created(){
        if(false){// ПОльзователь авторизован
            this.check = true;
        }else{ // ПОльзователь не авторизован
            this.check = false;
        }
    }
}
</script>

<style>

</style>