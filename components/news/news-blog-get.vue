<template>
  <b-col class="mb-4 news-border">
    <b-row no-gutters>
      <b-col v-if="data.preview.image !== null" cols="5">
        <b-img class="img-news" :src="data.preview.image" alt="" />
      </b-col>
      <b-col cols="7" class="pl-3">
        <!--        <div class="date"> -->
        <!--          <time class="day">{{ data.created_at[0].day }} </time>-->
        <!--          <time class="month">{{ data.created_at[0].month }}</time>-->
        <!--          <time class="year">{{ data.created_at[0].year }}</time>-->
        <!--        </div>-->
        <nuxt-link class="fz-5 link-newsId" :to="'/news/' + data.id">{{
          data.name
        }}</nuxt-link>
      </b-col>
    </b-row>
    <p class="mt-3 fz-5" v-html="data.preview.text" />
  </b-col>
</template>

<script>
export default {
  props: {
    data: {},
  },
};
</script>
<style>
.news-border {
  padding-bottom: 30px;
  border-bottom: 1px solid #cfd8df;
}
.news-border:nth-last-child(-n + 3) {
  border-bottom: 0;
  padding-bottom: 0px;
}
.link-newsId {
  color: #436174;
  text-decoration: underline;
  font-size: 14px;
}
.img-news {
  max-height: 107px;
  max-width: 160px;
}
</style>
