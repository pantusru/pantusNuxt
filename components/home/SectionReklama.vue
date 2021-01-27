<template>
  <section class="section-reklama">
    <div class="img-reklama">
      <img src="@/assets/logo (1).png" alt="21" />
    </div>
    <p class="text">
      Пантус заключил диллерское соглашение с производителем широкой
      ассортиментной линейки автомобильного электрооборудования и приборов для
      отечественных автомобилей Автоприбор!
    </p>
    <div class="img-reklama">
      <img src="@/assets/photo-min2.0.jpg" alt="2" />
    </div>
    <button class="bnt-reklama-more">Подробнее</button>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass">
.section-reklama
    padding-left: 20px
    display: flex
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
</style>
