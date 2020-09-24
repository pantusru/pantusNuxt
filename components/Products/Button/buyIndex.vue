<template>
    <div>
        <b-button v-on="$listeners" v-if="!userBasket"  class="py-1 px-2 bg-danger border-0 fz-5_5">Купить</b-button>
        <div class="d-flex justify-content-end align-items-center" v-if="userBasket" >
            <b-button 
                v-on="$listeners"
                @mouseover="text = 'Добавить'"
                @mouseout="text = 'В корзине'"
                class="text-danger py-1 px-1 border-danger bg-light bg-link-danger link-light fz-5_5">
                    {{ text }}
                </b-button>
                <b-button class=" border-0 text-danger ml-1 py-0  px-1 bg-transparent fz-5_5">X</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userBasket: null,
            text: "В корзине"
        }
    },
    created(){ // ПРОВЕРКА ЕСЛИ ЛИ ТОВАР В КОРЗИНЕ
        if(true){ // Товар в корзине
            this.userBasket = true;
        }else{ // Товар не в корзизне
            this.userBasket = false;
        }
    }
}
</script>

<style>

</style>