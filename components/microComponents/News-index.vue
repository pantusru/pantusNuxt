<template>
  <div class="elem-news">
    <div class="blog-elem-new">
      <div class="img-new">
        <img :src="data.img" alt="11" />
      </div>
      <div class="content-new">
        <div class="data-new">
          <div class="date-day-new">{{ data.day }}</div>
          <div class="date-year-new">{{ data.year }}</div>
        </div>
        <router-link :to="data.href" class="title-new"> {{ data.title }} </router-link>
      </div> 
    </div>
    <div class="text-new">{{ data.text }}</div>
  </div>
</template>

<script>
export default {
  props: ["data"] 
};
</script>

<style lang="sass">
.elem-news
    +size(4)
    +col-offsets(margin)
    margin-bottom: 50px
.blog-elem-new
    display: flex
    margin-bottom: 10px
.img-new
    +size(4)
.content-new
    margin-left: 15px
.data-new
    display: flex
    align-items: center
.date-day-new
    font-size: 18px
    font-weight: 600
    margin-right: 5px
    color: #ca3b45
.date-year-new
    font-size: 12px
    color: #727275
.title-new
    color: #436174
    text-decoration: underline
    font-size: 14px
    &:hover
        text-decoration: none
</style>
