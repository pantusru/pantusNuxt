<template>
  <section class="section-content row">
    <div class="blog-catalogs col-md-4 col-12">
      <nuxt-link class="title-content link-hover" to="catalog/"
        >Оригинальные каталоги
      </nuxt-link>
      <img
        class="img-100-auto"
        :src="require('@/assets/img/home/zapchasti.png')"
        alt="zapchasti"
      />
    </div>
    <div class="blog-brand col-12 col-md-8">
      <nuxt-link to="/brands" class="title-content link-hover"
        >Бренды запчастей</nuxt-link
      >
      <div class="table-brand">
        <div
          v-for="data in table"
          :key="data.id"
          class="brand-tr row no-gutters"
        >
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
        <nuxt-link to="/brands" class="btn-full-brand">Все бренды</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      table: [
        [
          { name: "ВРТ", href: "/brands/vrt" },
          { name: "БРТ", href: "/brands/brt/" },
          { name: "Lada", href: "/brands/lada/" },
          { name: "Элад", href: "/brands/elad/" },
        ],
        [
          { name: "AMD", href: "/brands/amd/" },
          { name: "ASAM", href: "/brands/asam-sa/" },
          { name: "СОАТЭ", href: "/brands/soate/" },
          { name: "РезиноТехника", href: "/brands/rezinotekhnika/" },
        ],
        [
          { name: "БМРТ", href: "/brands/bmrt/" },
          { name: "СЭВИ", href: "/brands/sevi/" },
          { name: "ТехноПартнер", href: "/brands/tekhnopartner/" },
          { name: "ТРЕК", href: "/brands/trek/" },
        ],
        [
          { name: "ФОБОС", href: "/brands/fobos/" },
          { name: "ПромТехПласт", href: "/brands/promtekhplast/" },
          { name: "Hanse", href: "/brands/hanse/" },
          { name: "Rezkon", href: "/brands/rezkon/" },
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
    padding-bottom: 10px
    .table-brand
        font-size: 16px
        margin-top: 20px
        width: 100%
    .brand-tr
        border-bottom: 1px solid rgba(179, 179, 179, 0.2)
    .brand-td
        padding: 12px 0
    .brand-link
        padding-left: 5px
        color: #6b6b6b
        &:hover
          color: #ec0e1d !important
    .btn-full-brand
        border: 0
        background: transparent
        margin-top: 20px
        font-size: 16px
        color: #cb444e
        border-bottom: 1px dashed
</style>
