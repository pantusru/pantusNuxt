<template>
  <section class="section-about">
    <h2 class="about-title-index">Интернет-магазин запчастей Pantus.ru</h2>
    <div class="about-text">
      Интернет-магазин Pantus.ru – это выбор
      <b>более чем 25 000 наименований в наличии.</b>. Здесь можете
      <b>купить оптом</b> или в <b>розницу запчасти</b> для автомобилей ВАЗ,
      Renault, ГАЗ, УАЗ, КАМАЗ, МАЗ и для многих других легковых и грузовых
      отечественных автомобилей и иномарок. Подберите в интернет-магазине Пантус
      <b>оригинальные запчасти</b> Lada, Renault, Hyundai, Kia и другие или
      остановите свой выбор на качественных аналогах, если хотите сэкономить на
      покупке автозапчастей.
    </div>
    <h3 class="about-title">Бренды запчастей</h3>
    <div class="about-text">
      Мы являемся
      <b>официальными дилерами более чем 30-ти заводов производителей,</b>
      поставляющих детали, как на автосборочные конвейеры, так и на вторичный
      рынок. Держим эксклюзивные цены и наличие по таким брендам как: БРТ
      (БалаковоРезиноТехника), ВРТ (ВолжскРезиноТехника), ВПТ (ВолгаПромТранс),
      БМРТ (БалаковоМеталлоРезиноТехника, Ломов), УЭТ, СЭВИ, Резинотехника
      (Копыльцов), МЗАТЭ-2, ДЗТА, ЗиТ, БЗАК, ХИМАВТО, РЕСУРС, ОПОРА, ЭЛАД,
      БРАВЫЙ, АВТОТЕПЛО, ЛИВНЫ, ФОБОС, GALLANT, RIGINAL, FRANCECAR, TORK, AMD,
      HQ, PolKar и другим.
    </div>
    <h3 class="about-title">Интернет-магазин запчастей Pantus.ru это:</h3>
    <div class="about-blog">
      <div class="about-box">
        <h4 class="about-box-title">11 безопасных способов оплаты товара:</h4>
        <div class="about-text">
          Оплата заказа онлайн с помощью любых банковских карт, электронных
          денег, сеть терминалов, салоны связи, наличными при получении или
          безналичным переводом с НДС.
        </div>
        <h4 class="about-box-title">
          Удобная система поиска и подбора запчастей:
        </h4>
        <ul class="about-list">
          <li class="about-link">
            Подробная и достоверная информация о каждом производителе.
          </li>
          <li class="about-link">
            Подбор деталей по бренду, категориям и применимости.
          </li>
          <li class="about-link">
            Оригинальные онлайн-каталоги автозапчастей на отечественные
            автомобили и иномарки.
          </li>
          <li class="about-link">Поиск запчастей по номеру и названию.</li>
          <li class="about-link">Подбор детали по VIN-номеру автомобиля.</li>
        </ul>
      </div>
      <div class="about-box">
        <h4 class="about-box-title">Доставка по всему миру:</h4>
        <div class="about-text">
          Мы доставим заказ в любую точку мира. Сделайте заказ и укажите ваш
          адрес, а мы подберем оптимальный способ доставки, учитывая объем и
          срочность доставки запчастей
        </div>
        <ul class="about-list">
          <li class="about-link">
            <b>Бесплатная</b> доставка нашим транспортом
            <b>в 140 городов</b> России.
          </li>
          <li class="about-link">
            Пункты самовывоза в Москве, Тольятти, Балакове, Астрахани.
          </li>
          <li class="about-link">
            Транспортные компании Деловые Линии, ПЭК, Байкал-сервис, Энергия и
            другие. Доставка до терминала - <b>бесплатно</b>
          </li>
          <li class="about-link">Курьерские службы СДЭК, DPD и другие.</li>
          <li class="about-link">Почта России.</li>
        </ul>
      </div>
    </div>
    <div class="about-text">
      Команде Пантус важен каждый клиент и каждый заказ, мы всегда ответим на
      ваши вопросы по подбору запчастей, их наличию, качеству и стоимости. Вы
      можете позвонить на бесплатный номер, заказать обратный звонок или
      связаться с консультантом через онлайн чат или удобный для вас мессенджер.
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass">
.about-title-index
    font-size: 30px
    margin-bottom: 11px
    color: #515151
    font-weight: 600
.about-text
    margin-bottom: 15px
    line-height: 18px
.about-title
    font-size: 18px
    margin-bottom: 15px
.about-blog
    margin-bottom: 15px
    display: flex
    justify-content: space-between
.about-box
    +size(6)
.about-box-title
    font-size: 13px
    margin-bottom: 15px
    font-weight: 700
.about-link
    position: relative
    margin: 5px 0
    &::after
        position: absolute
        top: 0
        right: 100%
        background: #c8312b
        content: ''
        width: 5px
        height: 5px
        margin-right: 12px
        margin-top: 8px
        border-radius: 5px
</style>
