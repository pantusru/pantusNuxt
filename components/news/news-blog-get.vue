<template>
  <b-col cols="12" md="6" lg="4" class="mb-4 news-border">
    <b-row no-gutters>
      <b-col cols="5" v-if="data.preview.image !== null">
        <b-img class="img-100" :src="data.preview.image" alt="" />
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
.link-newsId {
  color: #436174;
  text-decoration: underline;
  font-size: 14px;
}
</style>
