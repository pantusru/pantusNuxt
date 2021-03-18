<template>
  <section class="section-reklama flex-column flex-lg-row">
    <div class="row col-12 col-md-2">
<!--      <div class="img-reklama col-6">-->
<!--        <img-->
<!--          class="img-100-auto"-->
<!--          :src="urlPantus + '/upload/medialibrary/d26/Luzar.jpg'"-->
<!--          alt="Luzar"-->
<!--        />-->
<!--      </div>-->
      <div class="img-reklama col-12">
        <img
          class="img-100-auto"
          :src="
            urlPantus +
            '/upload/medialibrary/8b6/5b5497825af762b2260dfdf6f573665b.jpg'
          "
          alt="Trialli"
        />
      </div>
    </div>
    <p class="text">
      Мы подписали дистрибьюторское соглашение с ™ Pekar. Портфель Pekar – это более 1000
      наименований изделий для отечественных автомобилей марок: ВАЗ, ИЖ, АЗЛК,
      ГАЗ, УАЗ, ЗИЛ, ПАЗ, ЛИАЗ, УРАЛ, КамАЗ, МАЗ и пр.
    </p>
    <nuxt-link to="/news/7643014" class="bnt-reklama-more mt-3 mt-lg-0"
      >Подробнее</nuxt-link
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      urlPantus: process.env.pantus,
    };
  },
};
</script>

<style lang="sass">
.section-reklama
    margin: 20px 0
    padding: 20px
    display: flex
    //flex-wrap: wrap
    box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 7%)
    // justify-content: space-between
    align-items: center
    .text
        margin: 5px 15px 0
        text-align: center
    .bnt-reklama-more
        background-color: #e1002b
        border: 2px solid #e1002b
        color: #fff
        border-radius: 3px
        padding: 8px 15px
        &:hover
          background-color: #ec0e1d
.img-reklama
  max-width: 180px
  margin: 0 auto
</style>
