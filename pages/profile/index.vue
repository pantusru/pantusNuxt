<template>
    <b-container>
        <b-row>
            <b-col cols="3">
                <div class="mb-5">
                    <div class="mb-2">Максим Семенов</div>
                    <div>m.semenov@pantus.ru</div>
                </div>
                 <div class="d-flex flex-column">
                    <nuxt-link to="">Личный кабинет</nuxt-link>
                    <nuxt-link to="">История заказов</nuxt-link>
                    <nuxt-link to="">Избранные товары</nuxt-link>
                 </div>
            </b-col>
            <b-col>
                <b-form>
                    <ElementForm :name="'Логин (e-mail):'"  :value="'m.semenov@pantus.ru'" />
                    <ElementForm :name="'Имя:'"  :value="'Максим'" />
                    <ElementForm :name="'Фамилия:'"  :value="'Семенов'" />
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ElementForm from "@/components/Profile/span"
export default {
    components:{
        ElementForm,
    }
}
</script>

<style>

</style>