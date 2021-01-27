<template>
  <div class="elem-product-popular">
    <div class="content-product-popular">
      <h2 class="">
        <a  class="title-product-popular"> {{ arr.name }}</a>
      </h2>
      <div class="img-product-popular">
        <img :src="arr.images.main" alt="12" />
      </div>
      <div class="row-product-popular">
        <div class="column-product-popular">Бренд</div>
        <a  :href="arr.manufacturer.code" class="column-result-product-popular">{{ arr.manufacturer.name }}</a>
      </div>
      <div class="row-product-popular">
        <div class="column-product-popular">Артикуль</div>
        <a :href="arr.sku.custom" class="column-result-product-popular">{{
          arr.sku.origin
        }}</a>
      </div>
      <div class="row-product-popular">
        <div class="column-product-popular">OEM</div>
        <div class="blog-result-product-popular">
          <a
            class="column-result-product-popular"
            v-for="(data, index) in arr.oem.list.slice(0, 5)"
            :key="index"
          >
            {{ data }}
          </a>
        </div>
      </div>
    </div>
    <div class="data-product-popular">
      <div class="blog-price-product-popular">
        <div class="name-price-product-popular">Цена</div>
        <div class="value-price-product-popular">{{ arr.offer.prices.retail }} Р</div>
      </div>
      <div class="blog-content-product-popular">
        <div class="kolvo-product-popular">{{ arr.offer.quantity }} шт</div>
        <button class="btn-buy-product-popular">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["arr"]
};
</script>

<style lang="sass">
.content-product-popular
    padding: 15px
.elem-product-popular
    height: 100%
    display: flex !important
    flex-direction: column
    justify-content: space-between
    border: 2px solid #e1e1e1
.title-product-popular
    display: block
    text-align: center
    font-size: 16px
    color: #436174
    font-weight: 500
    margin-bottom: 10px
.row-product-popular
    display: flex
    margin-bottom: 15px
.column-product-popular
    +size(7)
    font-weight: 700
    font-size: 12px
    color: #555555
    position: relative
    background-color: #fff
    &::after
        content: ""
        display: block
        width: 96%
        height: 1px
        background: #a6a6a6
        opacity: 0.2
        position: absolute
        top: 13px
        left: 0
.blog-result-product-popular
    display: flex
    flex-direction: column
.column-result-product-popular
    color: #576b77
    font-size: 12px
.data-product-popular
    display: flex
    justify-content: space-between
    padding: 15px
    outline: 1px solid #e1e1e1
.name-price-product-popular
    font-size: 13px
    color: #555555
    margin-bottom: 15px
.value-price-product-popular
    font-weight: 700
    font-size: 15px
.blog-content-product-popular
.kolvo-product-popular
    text-align: right
    font-size: 12px
    color: #00b91e
.btn-buy-product-popular
    background-color: #e1002b
    color: #fff
    border-radius: 3px
    padding: 4px 8px
    border: 2px solid #e1002b
    margin-top: 10px
.img-product-popular
  margin-right: auto
  margin-left: auto
  max-width: 50%
  height: 120px
  margin-bottom: 10px 
  img 
    height: 100%
</style>
