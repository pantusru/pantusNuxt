<template>
  <section class="section-content">
    <div class="blog-catalogs col-md-4 col-12">
      <h2>
        <a class="title-content link-hover" href="">Оригинальные каталоги </a>
      </h2>
      <img :src="require('@/assets/img/home/zapchasti.png')" alt="11">
    </div>
    <div class="blog-brand col-12 col-md-8">
      <h2>
        <a href="" class="title-content link-hover">Бренды запчастей</a>
      </h2>
      <table class="table-brand">
        <tbody>
          <tr v-for="data in table" :key="data.id" class="brand-tr">
            <td v-for="dataset in data" :key="dataset.id" class="brand-td">
              <a class="brand-link link-hover" :href="dataset.href">{{
                dataset.name
              }}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn-full-brand">Все бренды</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      table: [
        [
          { name: "ВРТ", href: "" },
          { name: "БРТ", href: "" },
          { name: "Lada", href: "" },
          { name: "Элад", href: "" },
        ],
        [
          { name: "AMD", href: "" },
          { name: "ASAM", href: "" },
          { name: "SA", href: "" },
          { name: "РезиноТехника", href: "" },
        ],
        [
          { name: "РезиноТехника", href: "" },
          { name: "СЭВИ", href: "" },
          { name: "SA", href: "" },
          { name: "РезиноТехника", href: "" },
        ],
        [
          { name: "БМРТ", href: "" },
          { name: "СЭВИ", href: "" },
          { name: "ТехноПартнер", href: "" },
          { name: "Hanse", href: "" },
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
        margin-top: 20px
        font-size: 16px
        color: #cb444e
        border-bottom: 1px dashed
</style>
