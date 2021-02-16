<template>
  <div class="">
    <div class="blog-categoria">
      <h2 class="pt-4">
        <nuxt-link :to="srcIndex" class="categoria-title">
          {{ title }}</nuxt-link
        >
      </h2>
      <div class="d-block d-md-flex">
        <div class="categoria-content">
          <div class="categoria-ul">
            <nuxt-link
              v-for="data in ul"
              :key="data.id"
              :to="data.href"
              class="categoria-link"
              >{{ data.name }}</nuxt-link
            >
          </div>
        </div>
        <div class="categoria-img">
          <img :class="classImg" :src="src" :alt="alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    ul: {},
    src: {},
    alt: {},
    classImg: {},
    srcIndex: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="sass">
.categoria-title
    color: #2e414d
    line-height: 28px
    font-size: 24px
    font-weight: 400
    transition: all 0.2s linear
    &:hover
        color: #98001F
.categoria-link
        background-color:  transparent
        font-size: 16px
        color: #6b6b6b
        transition: all 0.2s linear
        padding-bottom: 10px
        padding-top: 15px
        padding-left: 30px
        padding-right: 15px
        &:hover
            color: #fff
            background: linear-gradient(to right, rgba(224,107,117,1) 0%, rgba(255,255,255,1) 120%)
.blog-categoria
    box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
    position: relative
    //display: flex
    //justify-content: space-between
    .categoria-content
        .categoria-ul
            display: flex
            flex-direction: column
    .categoria-img
      margin-left: auto
      max-width: 60%
      margin-top: auto
      //width: 60%
        //position: absolute
        //right: 0
        //top: 20%
        //z-index: -2
</style>
