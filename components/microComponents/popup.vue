<template>
  <div class="blog-hover" @mouseover="check = true" @mouseleave="check = false">
    <a :href="href" class="popul-link">{{ name }}</a>
    <div class="get-blog" v-if="check" @mouseover="check = true">
      <a
        v-for="data in ul"
        :key="data.id"
        :href="data.href"
        class="popul-link get-brand"
        >{{ data.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: 0
    };
  },
  props: ["ul", "name", "href"]
};
</script>

<style lang="sass">
.get-blog
    background-color: #fff
    position: absolute
    right: -165px
    top: -10px
.blog-hover
    position: relative
.popul-link.get-brand
    padding: 10px 20px
</style>
