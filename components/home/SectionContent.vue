<template>
  <section class="section-content row">
    <div class="blog-catalogs col-md-4 col-12">
      <h2>
        <nuxt-link class="title-content link-hover" to="catalog/"
          >Оригинальные каталоги
        </nuxt-link>
      </h2>
      <img
        class="img-100-auto"
        :src="require('@/assets/img/home/zapchasti.png')"
        alt="11"
      />
    </div>
    <div class="blog-brand col-12 col-md-8">
      <h2>
        <nuxt-link to="/brands" class="title-content link-hover"
          >Бренды запчастей</nuxt-link
        >
      </h2>
      <div class="table-brand">
        <div v-for="data in table" :key="data.id" class="brand-tr row">
          <div
            v-for="dataset in data"
            :key="dataset.id"
            class="brand-td col-md-3 col-6"
          >
            <nuxt-link class="brand-link link-hover" :to="dataset.href">{{
              dataset.name
            }}</nuxt-link>
          </div>
        </div>
      </div>
      <nuxt-link to="/brands" class="btn-full-brand">Все бренды</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      table: [
        [
          { name: "ВРТ", href: "search?filter_brand=227" },
          { name: "БРТ", href: "search?filter_brand=226" },
          { name: "Lada", href: "search?filter_brand=591" },
          { name: "Элад", href: "search?filter_brand=609" },
        ],
        [
          { name: "AMD", href: "search?filter_brand=673" },
          { name: "ASAM", href: "search?filter_brand=679" },
          { name: "СОАТЭ", href: "search?filter_brand=453" },
          { name: "РезиноТехника", href: "search?filter_brand=618" },
        ],
        [
          { name: "БМРТ", href: "search?filter_brand=339" },
          { name: "СЭВИ", href: "search?filter_brand=272b" },
          { name: "ТехноПартнер", href: "search?filter_brand=631" },
          { name: "ТРЕК", href: "search?filter_brand=531" },
        ],
        [
          { name: "ФОБОС", href: "search?filter_brand=227" },
          { name: "ПромТехПласт", href: "search?filter_brand=227" },
          { name: "Hanse", href: "search?filter_brand=227" },
          { name: "Rezkon", href: "search?filter_brand=227" },
        ],
      ],
    };
  },
};
</script>

<style lang="sass">
.title-content
    line-height: 28px
    font-size: 24px
    color: #2e414d
.section-content
    display: flex
    justify-content: space-between
.blog-catalogs,.blog-brand
    padding-top: 20px
    border: 1px solid rgba(179, 179, 179, 0.2)
.blog-catalogs
    .title-content
        display: block
        margin-bottom: 30px
        text-align: center
.blog-brand
    padding-left: 20px
    .table-brand
        font-size: 16px
        margin-top: 20px
        width: 100%
    .brand-tr
        border-bottom: 1px solid rgba(179, 179, 179, 0.2)
    .brand-td
        padding: 12px 0
    .brand-link
        color: #6b6b6b
    .btn-full-brand
        border: 0
        background: transparent
        margin-top: 20px
        font-size: 16px
        color: #cb444e
        border-bottom: 1px dashed
</style>
