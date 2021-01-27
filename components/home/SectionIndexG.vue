<template>
  <section class="section-index">
    <categoriaVue
      class="col-6"
      title="Запчасти ГАЗ"
      :ul="categoriaUrl[0]"
      src="img/home-car-5.png"
      alt="1"
    />
    <categoriaVue
      class="col-6"
      title="Запчасти на грузовые авто    "
      :ul="categoriaUrl[1]"
      src="img/home-car-6.png"
      alt="1"
    />
    <div class="col-6 bg-red">
      <h2>
        <a href="" class="categoria-title">Автомасла автокосметика автохимия</a>
      </h2>
    </div>
    <categoriaVue
      class="col-6 bg"
      title="Автосвет и лампы"
      :ul="categoriaUrl[2]"
      src="img/home-car-8.png"
      alt="1"
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
      categoriaUrl: [
        [
          { name: "ГАЗель и легковые", href: "" },
          { name: "Грузовые ГАЗ", href: "" },
        ],
        [
          { name: "Запчасти КАМАЗ", href: "" },
          { name: "Запчасти МАЗ", href: "" },
          { name: "Запчасти ЗИЛ", href: "" },
        ],
        [
          { name: "Лампы", href: "" },
          { name: "Оптика", href: "" },
        ],
      ],
    };
  },
};
</script>

<style lang="sass">
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
