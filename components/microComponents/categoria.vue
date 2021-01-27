<template>
  <div class="col-12 col-lg-8 mb-2 mb-lg-0">
    <div class="blog-categoria">
      <div class="categoria-content">
        <h2>
          <a href="" class="categoria-title"> {{ title }}</a>
        </h2>
        <div class="categoria-ul">
          <a
            v-for="data in ul"
            :key="data.id"
            :href="data.href"
            class="categoria-link"
          >{{ data.name }}</a
          >
        </div>
      </div>
      <div class="categoria-img">
        <img :src="src" :alt="alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "ul", "src", "alt"],
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
        &:hover
            color: #fff
            background: linear-gradient(to right, rgba(224,107,117,1) 0%, rgba(255,255,255,1) 120%)
.blog-categoria
    padding: 20px
    box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
    position: relative
    display: flex
    justify-content: space-between
    .categoria-content
        .categoria-ul
            display: flex
            flex-direction: column
    .categoria-img
        width: 60%
        position: absolute
        right: 0
        top: 20%
        z-index: -2
</style>
