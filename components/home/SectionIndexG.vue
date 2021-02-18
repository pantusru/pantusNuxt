<template>
  <section class="section-index row">
    <categoriaVue
      src-index="search?filter_applicabilities=3140"
      class="col-12 col-lg-6 mb-3"
      title="Запчасти для а/м ГАЗ"
      :ul="categoriaUrl[0]"
      :src="urlPantus + '/bitrix/templates/main/img/home/home-car-5.png'"
      alt="home-car-5"
    />
    <categoriaVue
      src-index="search?filter_applicabilities=4921,4815"
      class="col-12 col-lg-6 mb-3"
      class-img="w-230px"
      title="Запчасти на грузовые авто"
      :ul="categoriaUrl[1]"
      :src="require('@/assets/img/home/home-car-6.png')"
      alt="home-car-6"
    />
    <div class="col-12 col-lg-6 mb-3">
      <div class="bg-cover d-flex flex-column justify-content-between h-100">
        <h2 class="pt-4 text-center">
          <nuxt-link
            to="search/filter_brands=636,791"
            class="text-light categoria-title"
            >Автомасла автокосметика автохимия</nuxt-link
          >
        </h2>
        <img
          :src="require('@/assets/img/home/home-car-7.png')"
          alt="home-car-7"
        />
      </div>
    </div>
    <categoriaVue
      src-index="/search?filter_categories=406"
      class-img="w-200px"
      class="col-12 col-lg-6 mb-3 bg"
      title="Автосвет и лампы"
      :ul="categoriaUrl[2]"
      :src="urlPantus + '/bitrix/templates/main/img/home/home-car-8.png'"
      alt="home-car-7"
    />
  </section>
</template>

<script>
import categoriaVue from "../microComponents/categoria.vue";
export default {
  components: {
    categoriaVue,
  },
  data() {
    return {
      urlPantus: process.env.pantus,
      categoriaUrl: [
        [
          {
            name: "Легковые",
            href: "/search?filter_applicabilities=3140,5136,5143,4943",
          },
          {
            name: "Грузовые",
            href: "/search?filter_applicabilities=3140,4922,5139",
          },
        ],
        [
          {
            name: "Для а/м КАМАЗ",
            href: "/search?filter_applicabilities=4921",
          },
          { name: "Для а/м МАЗ", href: "/search?filter_applicabilities=4815" },
          { name: "Для а/м ЗИЛ", href: "/search?filter_applicabilities=4849" },
        ],
        [
          { name: "Лампы", href: "/search?filter_categories=438" },
          { name: "Оптика", href: "/search?filter_categories=406" },
        ],
      ],
    };
  },
};
</script>

<style lang="sass">
.bg-cover
  background-size: cover
  background-color: #cb444e
.w-200px
  width: 200px
.w-230px
  width: 230px
//.col-6
    padding-bottom: 100px
    &:nth-child(2),  &:nth-child(1)
        margin-bottom: 30px
    &.bg, &.bg-red
        .categoria-title
            color: #fff
            &:hover
                color: #000
    &.bg
        color: #fff
        background-color: #305f97
        .categoria-img
            top: 0
            width: 41%
            z-index: 1
        .categoria-link
            color: #fff
            &:hover
                color: #fff
                background: linear-gradient(to right, rgba(155,166,180,1) 0%, rgba(112,128,147,1) 120%)
    &.bg-red
        box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
        //background-image: url("../../../public/img/home-car-7.png")
        background-repeat: no-repeat
        background-size: cover
        .categoria-title
            text-align: center
            display: block
            margin-top: 15px
    .categoria-img
        top: 10%
        width: 50%
</style>
