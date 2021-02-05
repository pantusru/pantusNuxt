<template>
  <section class="section-reklama flex-column flex-md-row">
    <div class="row">
      <div class="img-reklama col-6">
        <img
          class="img-100-auto"
          src="https://www.pantus.ru/upload/medialibrary/d26/Luzar.jpg"
          alt="Luzar"
        />
      </div>
      <div class="img-reklama col-6">
        <img
          class="img-100-auto"
          src="https://www.pantus.ru/upload/medialibrary/56f/image (510).png"
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
export default {};
</script>

<style lang="sass">
.section-reklama
    margin-top: 20px
    margin-bottom: 20px
    padding: 20px
    display: flex
    //flex-wrap: wrap
    box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
    // justify-content: space-between
    align-items: center
    .text
        margin: 0 15px
    .bnt-reklama-more
        margin-left: 40px
        background-color: #e1002b
        border: 2px solid #e1002b
        color: #fff
        border-radius: 3px
        padding: 8px 15px
.img-reklama
  //max-width: 150px
</style>
