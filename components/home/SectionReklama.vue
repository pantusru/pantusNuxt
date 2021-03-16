<template>
  <section class="section-reklama flex-column flex-lg-row">
    <div class="row col-12 col-md-3">
      <div class="img-reklama col-6">
        <img
          class="img-100-auto"
          :src="urlPantus + '/upload/medialibrary/d26/Luzar.jpg'"
          alt="Luzar"
        />
      </div>
      <div class="img-reklama col-6">
        <img
          class="img-100-auto"
          :src="urlPantus + '/upload/medialibrary/56f/image (510).png'"
          alt="Trialli"
        />
      </div>
    </div>
    <p class="text">
      ПАНТУС заключил дистрибьюторское соглашение с управляющей компанией
      «Карвиль». Документ наделил нашу компанию правом реализовывать продукцию
      торговых марок LUZAR и TRIALLI. Это известные производители автозапчастей
      и электрооборудования для автомобилей отечественного и зарубежного
      производства.
    </p>
    <nuxt-link to="/news/7065098/" class="bnt-reklama-more mt-3 mt-sm-0"
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
    .bnt-reklama-more
        background-color: #e1002b
        border: 2px solid #e1002b
        color: #fff
        border-radius: 3px
        padding: 8px 15px
        &:hover
          background-color: #ec0e1d
.img-reklama
  max-width: 150px
</style>
