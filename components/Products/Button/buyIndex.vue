<template>
    <div>
        <b-button v-on="$listeners" v-if="!userBasket"  class="py-1 px-2 bg-danger border-0">Купить</b-button>
        <div class="d-flex justify-content-end align-items-center" v-if="userBasket" >
            <b-button 
                @mouseover="text = 'Добавить'"
                @mouseout="text = 'В корзине'"
                class="text-danger py-1 px-2 border-danger bg-light bg-link-danger link-light">
                    {{ text }}
                </b-button>
                <b-button class="text-danger ml-1 py-1 bg-light">X</b-button>
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
        if(false){ // Товар в корзине
            this.userBasket = true;
        }else{ // Товар не в корзизне
            this.userBasket = false;
        }
    }
}
</script>

<style>

</style>