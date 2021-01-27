<template>
  <div class="news-category">
    <router-link
      v-for="data in category"
      :key="data.id"
      :to="data.href"
      class="box-news-category"
    >
      <div class="name-category-news">{{ data.name }}</div>
      <div class="kolvo-news-category">{{ data.kolvo }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        { name: "Акции", kolvo: "2", href: "/news/aktsii" },
        { name: "Интересное", kolvo: "80", href: "/news/interes" },
        { name: "Новости компании", kolvo: "55", href: "/news/interes" },
        { name: "Полезные советы", kolvo: "27", href: "/news/interes" },
        { name: "Обновления сайта", kolvo: "27", href: "/news/interes" },
        { name: "Новинки", kolvo: "27", href: "/news/interes" },
      ],
    };
  },
};
</script>

<style lang="sass">
.news-category
  +row-flex()
.box-news-category
  display: flex
  +col-offsets(margin)
  +size(3)
  box-shadow: 5px 5px 9px 1px #ccc
  justify-content: space-between
  align-items: center
  padding: 20px
  margin-bottom: 35px
.name-category-news
  color: #c8312b
  font-size: 16px
  text-decoration: underline
.kolvo-news-category
  font-size: 12px
  color: #666
</style>
