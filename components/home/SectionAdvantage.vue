<template>
  <section class="section-advantage">
    <div class="block-advantage">
      <a
        :href="data.href"
        class="elem-advantage"
        v-for="data in block"
        :key="data.id"
      >
        <div class="img-advantage"><img :src="data.src" :alt="data.alt" /></div>
        <div class="content-advantage">
          <h2 class="title-advantage">
            {{ data.title }}
            <span class="item-advantage">{{ data.titleDop }} </span>
          </h2>
          <div class="text-advantage">{{ data.text }}</div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      block: [
        {
          title: "БОЛЕЕ",
          titleDop: "22 000",
          text: "автозапчастей в каталогах",
          src: "img/feature-new-01.png",
          alt: "1",
          href: ""
        },
        {
          title: "ДОСТАВКА",
          titleDop: "ПО ВСЕМУ МИРУ",
          text: "  От 0 руб. по России",
          src: "img/feature-new-02.png",
          alt: "2",
          href: ""
        },
        {
          title: "ИНДИВИДУАЛЬНОЕ",
          titleDop: "",
          text: "производство деталей",
          src: "img/feature-new-03.png",
          alt: "3",
          href: ""
        },
        {
          title: "Способов оплаты",
          titleDop: "20",
          text: "с возможностью отсрочки и оплаты при получении",
          src: "img/feature-new-04.png",
          alt: "4",
          href: ""
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.block-advantage
  display: flex
  justify-content: space-between
  .elem-advantage
    display: flex
    flex-direction: column
    align-items: center
    +size(3)
    .img-advantage
      +size(7)
      height: 95px
      margin-bottom: 20px
      img
        height: 100%
    .content-advantage
      text-align: center
      .title-advantage
        font-size: 14px
        color: #2d414e
        font-weight: bold
        .item-advantage
          color: #c32836
      .text-advantage
        font-size: 13px
        color: #436174
</style>
