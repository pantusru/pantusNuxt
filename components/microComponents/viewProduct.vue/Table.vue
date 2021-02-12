<template>
  <div class="grid-table">
    <div class="row-table">
      <div class="grid-4">
        <div class="col-grid">Бренд</div>
        <div class="col-grid">Артикул</div>
        <div class="col-grid">Изображение</div>
        <div class="col-grid">Наименование</div>
      </div>
      <div class="grid-6">
        <div class="col-grid">Поставщик</div>
        <div class="col-grid">Наличие</div>
        <div class="col-grid">Срок</div>
        <div class="col-grid">Цена</div>
        <div class="col-grid">купить</div>
      </div>
    </div>
    <div class="data-blog">
      <a
        :href="data.href"
        class="row-link"
        v-for="data in product"
        :key="data.id"
      >
        <div class="box-product">
          <div class="col-brand">{{ data.bran }}</div>
          <div class="">{{ data.x }}</div>
          <div class="col-img">
            <img :src="data.img" alt="" />
          </div>
          <div class="table-name col-table">{{ data.name }}</div>
        </div>
        <div class="provider-blog-full">
          <div
            class="provider-blog"
            v-for="dataset in data.provider"
            :key="dataset.id"
          >
            <div class="">{{ dataset.name }}</div>
            <div class="">{{ dataset.kolvo }}</div>
            <div class="">{{ dataset.term }}</div>
            <div class="col-price">{{ dataset.plice }} р</div>
            <div><button class="bnt-buy">Купить</button></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          bran: "Бренд",
          article: "артикуль",
          name: "название",
          img: `${process.env.pantus}upload/iblock/efb/1111-3501080 - Колодки тормозные передние Zollex ОКА - No Name.jpg`,
          provider: [
            { name: "Pantus", kolvo: 300, term: "По запросу", plice: 300 },
            { name: "Pantus", kolvo: 300, term: "По запросу", plice: 300 },
            { name: "Pantus", kolvo: 300, term: "По запросу", plice: 300 },
            { name: "Pantus", kolvo: 300, term: "По запросу", plice: 300 },
          ],
        },
        {
          bran: "Бренд",
          article: "артикуль",
          name: "название",
          img: `${process.env.pantus}/upload/iblock/efb/1111-3501080 - Колодки тормозные передние Zollex ОКА - No Name.jpg`,
          provider: [
            { name: "Pantus", kolvo: 300, term: "По запросу", plice: 300 },
          ],
        },
        {
          bran: "Бренд",
          article: "артикуль",
          name: "название",
          img: `${process.env.pantus}/upload/iblock/efb/1111-3501080 - Колодки тормозные передние Zollex ОКА - No Name.jpg`,
          provider: [
            { name: "Pantus", kolvo: 300, term: "По запросу", plice: 300 },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="sass">
.row-table // свойства row с названиями полей
    display: flex
    font-size: 12px
    font-weight: 700
    color: #555
    background: #fafafa
    outline: 1px solid #E1E1E1
    padding: 10px
    // text-align: center
    outline-radius: 2px
.grid-4, .grid-6 // gridы для row-table
    width: 50%
    display: grid
.grid-4
    grid-template-columns: repeat(4, 1fr)
.grid-6
    grid-template-columns: repeat(5, 1fr)
.data-blog
     padding: 0 10px
.row-link // полная линия данных
    display: flex
    margin-top: 10px
    border-bottom: 1px solid #ddd
    // align-items: flex-end
.box-product // данные о товаре
    width: 50%
    display: grid
    // align-items: center
    align-items: center
    color: #576b77
    font-size: 12px

    grid-template-columns: repeat(4, 1fr)
    // justify-content: space-between
.provider-blog-full // данные о наличие товаров у поставщиков
   width: 50%
   display: flex
   flex-direction: column
   justify-content: flex-end
.provider-blog
    padding: 5px 0
    display: grid
    grid-template-columns: repeat(5, 1fr)
    border-bottom:  1px solid #ddd
    &:last-child
        border-bottom: none
    // каждая col данных
.col-brand
    font-weight: bold
.col-price
    font-weight: 700
    font-size: 15px
.col-img
    width: 70%
</style>
